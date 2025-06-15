import type { ExtractPropTypes, PropType } from 'vue'
import type { Fnable, Obj } from './utils'

type Awaitable<T> = Promise<T> | T

export type NormalizedOpt = {
  label?: string
  value: any
  [k: string]: any
}

export type Opt = string | any[] | NormalizedOpt

export const formItemRenderPropsBase = {
  is: null,
  lp: [String, Array] as PropType<string | [string, string]>,
  type: String,
  defv: null,
  defaultValue: null,
  displayValue: null,
  hide: [Boolean, Function] as PropType<boolean | ((row) => boolean)>,
  get: Function as PropType<(val: any, row: any) => any>,
  set: Function as PropType<(val: any, row: any) => any>,
  out: Function as PropType<(val: any, row: any) => any>,
  options: [Array, Object, Function] as PropType<Fnable<Awaitable<Opt[]>>>,
  rules: null,
  el: Object,
}

export type Item = ExtractPropTypes<typeof formItemRenderPropsBase> & Obj
export type Item0 = ExtractPropTypes<typeof formItemRenderPropsBase>
