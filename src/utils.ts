import { type Ref, ref, toRaw, toValue } from 'vue'
import { isArray, camelize, isPromise, isObject } from '@vue/shared'
import type { Item, Item0, NormalizedOpt, Opt } from './props'

const solveLP = (lp: Item['lp']) => isArray(lp) ? lp : (lp ? [lp, camelize(lp!)] : [])

type LP = Pick<Item, 'lp'> & {
  label?: string
  prop?: string
}

export const label = (item: LP) => item.label || solveLP(item.lp)[0]
export const prop = (item: LP) => item.prop || solveLP(item.lp)[1]
export const normalizeItem = (item: Item) => ({
  label: label(item),
  prop: prop(item),
  ...item,
  options: solveOptions(item.options),
})

const waekMap = new WeakMap<any, Ref<NormalizedOpt[]>>()

export const solveOptions = (opts?: Item['options']) => {
  if (!opts) return undefined
  if (waekMap.has(opts)) return waekMap.get(opts)!.value
  const ret = ref<NormalizedOpt[]>([])
  waekMap.set(opts, ret)
  // solve
  const val = unFn(opts)
  if (isPromise(val)) val.then(val => ret.value = val.map(normalizeOpt))
  else ret.value = val.map(normalizeOpt)
  // 
  return ret.value
}

export const showOpt = (opt?: NormalizedOpt) => opt?.label ?? opt?.value

const normalizeOpt = (opt: Opt): NormalizedOpt => (
  isArray(opt) ? { label: opt[0], value: opt[1] } :
  isObject(opt) ? opt :
  { label: opt, value: opt }
)

export const useTransformer = (
  _model,
  _prop,
  opt: Pick<Item0, 'defv' | 'defaultValue' | 'displayValue' | 'get' | 'set' | 'out'> & { untrackedGet?: boolean; silentSet?(v, model): any } = {}
) => {
  const ret = {
    get() {
      const model = toValue(_model), prop = toValue(_prop)
      if (prop == null) return
      let v = get(opt.untrackedGet ? toRaw(model) : model, prop)
      const defv = opt.defaultValue ?? opt.defv
      const disv = opt.displayValue
      if (opt.get) v = opt.get(v, model)
      if (defv !== undefined && (v === undefined || v === '')) set(model, prop, v = unFn(defv))
      if (disv !== undefined && (v === undefined || v === '')) v = unFn(disv)
      return v
    },
    set(v) {
      const model = toValue(_model), prop = toValue(_prop)
      if (prop == null) return
      if (opt.silentSet) set(toRaw(model), prop, opt.silentSet(v, model))
      else if (opt.set) set(model, prop, opt.set(v, model))
      else set(model, prop, v)
      if (opt.out) Object.assign(model, opt.out(v, model))
      v = get(model, prop)
      if (opt.displayValue !== undefined && v === unFn(opt.displayValue)) del(toRaw(model), prop)
    },
    get v() { return this.get() },
    set v(v) { this.set(v) },

    get value() { return this.get() },
    set value(v) { this.set(v) },
    __v_isRef: true,
  }
  return ret as typeof ret & Ref<any>
}


// =============================================================================================================
export type Obj = Record<any, any>
export type Arrable<T> = T | T[]
export type Fnable<T, A extends any[] = []> = T | ((...args: A) => T)

const numReg = /^\d+$/

type UnFn <T> = T extends (...args) => infer R ? R : T
type FilterFn<T> = T extends (...args) => any ? T : never
export const unFn = <T extends Fnable<any>>(fn: T, ...args: Parameters<FilterFn<T>>): UnFn<T> => typeof fn == 'function' ? fn(...args) : fn

export function get(obj: any, path: string | ((...args) => any)) {
  if (typeof path === 'function') return path(obj)
  for (const k of path.split('.')) if (!(obj = obj[k])) break
  return obj
}

export function set<T>(obj: any, path: string, val: T) {
  return path.split('.').reduce((o, k, i, ks) => i == ks.length - 1 ? (o[k] = val) : (o[k] ??= numReg.test(ks[i + 1]) ? [] : {}), obj)
}

export function del(obj: any, path: string) {
  const arr = path.split('.')
  if (arr.length > 1) delete get(obj, arr.slice(0, -1).join('.'))?.[arr[arr.length - 1]]
  else delete obj[arr[0]]
}