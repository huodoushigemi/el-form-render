import { toValue } from 'vue'
import { isArray } from '@vue/shared'
import type { JSONSchema7 } from 'json-schema'
import { inRange, isPlainObject, merge, zip } from 'es-toolkit'
import { get, unFn, type Obj } from '../utils'

const define = (o, k, cb) => Object.defineProperty(o, k, { get: cb, enumerable: true })

export function fromSchema(model: Obj, schema: JSONSchema7) {
  return fromSchema2(model, [schema], {}).children
}

function fromSchema2(model: Obj, queue: JSONSchema7[], ctx, path?: string) {
  const val = k => (o => k ? o[k] : o)(toValue(model))
  
  let e = parseSchema(queue)
  
  const prop = path?.split('.').pop() || ''
  let item: any = merge({
    label: e.title ?? prop,
    lp: [e.title ?? prop, path],
    rules: [],
    el: {
      name: path,
      ...e['ui:el']
    }
  }, e['ui'] || {})

  // enum
  if (e.enum) {
    item.type ??= 'select'
    item.options ??= e.enumName ? zip(e.enumName, e.enum) : e.enum
  }

  switch (e.type) {
    case 'string':
      // todo e.format
      item.type ??= 'input'
      item.rules.push({
        type: 'string',
        min: e.minLength,
        max: e.maxLength,
        pattern: e.pattern ? new RegExp(e.pattern) : void 0
      })
      item.el = {
        minlength: e.minLength,
        maxlength: e.maxLength,
        ...item.el
      }
      break;
      
    case 'integer':
    case 'number':
      item.type ??= 'input-number'
      item.rules.push({
        type: e.type,
        min: e.minimum,
        max: e.maximum,
      })
      item.el = {
        min: e.minimum,
        max: e.maximum,
        // todo
        // precision: e.type == 'integer' ? 
        step: e.multipleOf,
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
        item.is ??= 'div'
        define(item, 'model', () => toValue(model))
        let items = [] as any[]
        for (const prop in e.properties) {
          const e2 = e.properties[prop]
          if (typeof e2 == 'boolean') continue
          const k = path ? `${path}.${prop}` : prop
          queue.push(e2)
          const item2 = fromSchema2(model, queue, ctx, k)
          queue.pop()
          item2.required ??= e.required?.includes(prop)
          // dependencies
          if (e.dependencies) {
            const vif = Object.getOwnPropertyDescriptor(item2, 'vIf')
            define(item2, 'vIf', () => {
              const _if = vif ? unFn(vif?.value ?? vif?.get?.()) : true
              if (_if && !!e.dependencies?.[prop]) return true
              const deps = Object.entries(e.dependencies!).filter(e => (e[1] as string[]).includes(prop))
              if (!deps.length) return true
              return deps.some(e => val(e[0]) != null)
            })
            const required = Object.getOwnPropertyDescriptor(item2, 'required')
            define(item2, 'required', () => {
              const need = required ? required.value ?? required.get?.() : void 0
              if (need) return true
              const o = (o => path ? get(o, path) : o)(toValue(model)) || {}
              return Object.entries(e.dependencies!).some(([k, v]) => o[k] != null && (v as string[]).includes(prop))
            })
          }
          items.push(item2)
        }
        // todo
        // e.if
        // e.then
        item.children = items
      }
      if (e.minProperties != null || e.maxProperties != null) {
        item.rules.push({
          validator: () => inRange(Object.keys(val(path)).length, e.minProperties ?? -Infinity, e.maxProperties ?? Infinity)
            ? new Error(['minProperties', 'maxProperties'].map(k => `${e}: ${e[k]}`).join('\n'))
            : true
        })
      }
      break

    case 'array':
      if (item.type || item.el?.is) {
        Object.assign(item.el, { min: e.minItems, max: e.maxItems })
        if (item.type == 'select') Object.assign(item.el, { multiple: true, multipleLimit: e.maxItems })
      }
      else if (isArray(e.items)) {
        // layout
        item.is ??= 'div'
        const items = [] as any[]
        e.items.forEach((e2, i) => {
          if (typeof e2 == 'boolean') return
          const k = path ? `${path}.${i}` : i
          queue.push(e2)
          items.push(fromSchema2(model, queue, ctx, k as string))
          queue.pop()
        })
        Object.assign(item, { min: e.minItems, max: e.maxItems })
        item.children = items
      }
      else if (isPlainObject(e.items)) {
        // layout
        // item.is ??= 'div'
        const schema = e.items
        const queue2 = [...queue]
        Object.assign(item, { min: e.minItems, max: e.maxItems })
        define(item, 'children', () => {
          const items = [] as any[]
          queue2.push(schema)
          val(path)?.forEach((_, i) => {
            const k = path ? `${path}.${i}` : i
            items.push(fromSchema2(model, queue2, ctx, k as string))
          })
          queue2.pop()
          return items
        })
      }
      // todo e.uniqueItems
      if (e.minItems != null || e.maxItems != null) {
        item.rules.push({
          min: e.minItems,
          max: e.maxItems
        })
      }
      break
    default:
      // todo
      break
  }

  return item
}

function parseSchema(queue: JSONSchema7[]) {
  let e = queue[queue.length - 1]

  // todo
  if (e.$defs) {}
  
  if (e.$ref) {
    if (e.$ref.startsWith('#/definitions/')) {
      const k = e.$ref.split('#/definitions/')[1]
      const ref = queue[0].definitions?.[k] as JSONSchema7
      queue.push(ref)
      e = { ...e, ...parseSchema(queue) }
      queue.pop()
    }
    else if (e.$ref.startsWith('#/$defs/')) {
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
