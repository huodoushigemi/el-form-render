import { toValue } from 'vue'
import type { JSONSchema7 } from 'json-schema'
import { inRange, isPlainObject, merge, zip } from 'es-toolkit'
import { assignInWith, get, isObject, set } from 'es-toolkit/compat'
import { unFn, type Obj } from '../utils'

const define = (o, k, cb) => Object.defineProperty(o, k, { get: cb, enumerable: true })

export function createJSF(ctx) {
  return (model: Obj, schema: JSONSchema7) => fromSchema2(model, [schema], ctx).children
}

export function fromSchema(model: Obj, schema: JSONSchema7) {
  return fromSchema2(model, [schema], {}).children
}

function fromSchema2(model: Obj, queue: JSONSchema7[], ctx, path?: string) {
  const val = k => (o => k ? get(o, k) : o)(toValue(model))
  
  const js = parseSchema(queue)

  for (const k in js) {
    k.includes(':') && set(js, k.split(':'), js[k])
  }
  
  const prop = path?.split('.').pop() || ''
  const item: any = merge({
    label: js.title ?? prop,
    prop: path,
    lp: [js.title ?? prop, path],
    rules: [],
    el: { name: path }
  }, js['ui'] || {})

  // enum
  if (js.enum) {
    item.type ??= 'select'
    // @ts-ignore
    item.options ??= js.enumName ? zip(js.enumName, js.enum) : js.enum
  }

  if (js.default !== void 0) {
    item.defaultValue = js.default
  }

  switch (js.type) {
    case 'string':
      // todo e.format
      item.type ??= 'input'
      item.rules.push({
        type: 'string',
        min: js.minLength,
        max: js.maxLength,
        pattern: js.pattern ? new RegExp(js.pattern) : void 0
      })
      item.el = {
        minlength: js.minLength,
        maxlength: js.maxLength,
        ...item.el
      }
      break
      
    case 'integer':
    case 'number':
      item.type ??= 'input-number'
      item.rules.push({
        type: js.type,
        min: js.minimum,
        max: js.maximum,
      })
      item.el = {
        min: js.minimum,
        max: js.maximum,
        // todo
        // precision: e.type == 'integer' ? 
        step: js.multipleOf,
        ...item.el
      }
      break

    case 'boolean':
        item.type ??= 'switch'
        break

    case 'object':
      if (item.type || item.el?.is) {
        // 
      }
      else {
        // item.is ??= 'div'
        item.is ??= ctx.SubForm
        let items = [] as any[]
        for (const prop in js.properties) {
          const e2 = js.properties[prop]
          if (typeof e2 == 'boolean') continue
          const k = path ? `${path}.${prop}` : prop
          queue.push(e2)
          const item2 = fromSchema2(model, queue, ctx, k)
          queue.pop()
          items.push(item2)
          item2.required ??= js.required?.includes(prop)
          // dependencies
          if (js.dependencies) {
            const vif = Object.getOwnPropertyDescriptor(item2, 'vIf')
            define(item2, 'vIf', () => {
              const _if = vif ? unFn(vif?.value ?? vif?.get?.()) : true
              if (_if && !!js.dependencies?.[prop]) return true
              const deps = Object.entries(js.dependencies!).filter(e => (e[1] as string[]).includes(prop))
              if (!deps.length) return true
              return deps.some(e => val(e[0]) != null)
            })
            const required = Object.getOwnPropertyDescriptor(item2, 'required')
            define(item2, 'required', () => {
              const need = required ? required.value ?? required.get?.() : void 0
              if (need) return true
              const o = val(path) || {}
              return Object.entries(js.dependencies!).some(([k, v]) => o[k] != null && (v as string[]).includes(prop))
            })
          }
        }
        // todo
        // e.if
        // e.then
        define(item, 'model', () => toValue(model))
        define(item, 'modelValue', () => val(path))
        item.children = items
      }
      if (js.minProperties != null || js.maxProperties != null) {
        item.rules.push({
          validator: () => inRange(Object.keys(val(path)).length, js.minProperties ?? -Infinity, js.maxProperties ?? Infinity)
            ? new Error(['minProperties', 'maxProperties'].map(k => `${js}: ${js[k]}`).join('\n'))
            : true
        })
      }
      break

    case 'array':
      // 自定义组件
      if (item.type || item.el?.is) {
        Object.assign(item.el, { min: js.minItems, max: js.maxItems, schema: js })
        if (item.type == 'select') Object.assign(item.el, { multiple: true, multipleLimit: js.maxItems })
      }
      else if (isPlainObject(js.items)) {
        const _queue = [...queue, js.items as JSONSchema7]
        js.items = parseSchema(_queue)

        // object[]
        if (js.items.type == 'object') item.is ??= ctx.SubTable
        
        Object.assign(item, { min: js.minItems, max: js.maxItems, schema: js })
        define(item, 'model', () => toValue(model))
        define(item, 'modelValue', () => val(path))
        define(item, 'children', () => {
          const items = [] as any[]
          val(path)?.forEach((_, i) => {
            const k = path ? `${path}.${i}` : i
            const e = fromSchema2(model, _queue, ctx, k)
            if (item.is == ctx.SubTable) e.is = 'div'
            items.push(e)
          })
          return items
        })
      }
      else if (Array.isArray(js.items)) {
        // layout
        item.is ??= 'div'
        const items = [] as any[]
        js.items.forEach((e2, i) => {
          if (typeof e2 == 'boolean') return
          const k = path ? `${path}.${i}` : i
          queue.push(e2)
          items.push(fromSchema2(model, queue, ctx, k))
          queue.pop()
        })
        Object.assign(item, { min: js.minItems, max: js.maxItems, schema: js })
        define(item, 'model', () => toValue(model))
        define(item, 'modelValue', () => val(path))
        item.children = items
      }
      // todo e.uniqueItems
      if (js.minItems != null || js.maxItems != null) {
        item.rules.push({
          min: js.minItems,
          max: js.maxItems
        })
      }
      break
    default:
      // todo
      break
  }

  return item
}

/*@__PURE__*/
const wm = new WeakMap()

function parseSchema(queue: JSONSchema7[]): JSONSchema7 {
  let e = queue[queue.length - 1]

  // todo
  if (e.$defs) {}
  
  if (e.$ref) {
    if (wm.has(e)) return wm.get(e)
    wm.set(e, e = { ...e })
  
    if (e.$ref!.startsWith('#/definitions/')) {
      const k = e.$ref!.split('#/definitions/')[1]
      const ref = queue[0].definitions?.[k] as JSONSchema7
      queue.push(ref)
      defaultsDeep(e, parseSchema(queue))
      queue.pop()
    }
    else if (e.$ref!.startsWith('#/$defs/')) {
      // todo
    }
  }

  if (e.oneOf) {
    // todo
  }
  else if (e.anyOf) {
    // todo
  }
  else if (e.allOf) {
    (e.allOf as JSONSchema7[]).map((e) => {
      queue.push(e)
      const ret = parseSchema(queue)
      queue.pop()
      return ret
    }).reduce((o, e) => merge(o, e), e)
  }

  return e
}

const defaultsDeep = (o1, o2) => assignInWith(o1, o2, (v1, v2) => (
  isObject(v1) && isObject(v2) ? defaultsDeep(v1, v2) :
  v1 !== void 0 ? v1 :
  v2
))
