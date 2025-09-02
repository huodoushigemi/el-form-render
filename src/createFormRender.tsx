import { type InjectionKey, defineComponent, inject, provide, ref, type ExtractPropTypes, mergeProps, camelize, renderSlot, reactive } from 'vue'
import { objectPick, reactiveComputed, toReactive } from '@vueuse/core'
import { createRender } from '@el-lowcode/render'
import { type Obj, unFn, useTransformer } from './utils'
import { type Item, formItemRenderPropsBase } from './props'

type CreateFormRenderOptions<F, FI> = {
  Form: any
  formName: string
  formProps: F
  FormItem: any
  formItemName: any
  formItemProps: FI
  Input: any
  fields?: {
    /** @default 'label' */
    label?: keyof FI
    /** @default 'prpo' */
    prop?: keyof FI
    /** @default 'modelValue' */
    modelValue?: string | ((item: Item) => string)
    /** @default 'rules' */
    rules?: keyof FI
    /** @default 'default' */
    inputSlot?: string
  }
}

const defaultFields = {
  label: 'label',
  prop: 'prop',
  modelValue: 'modelValue',
  rules: 'rules',
  inputSlot: 'default'
}

/*#__NO_SIDE_EFFECTS__*/
export function createFormRender<F extends Obj, FI extends Obj>({ Form, formName, formProps, FormItem, formItemName, formItemProps, Input, fields }: CreateFormRenderOptions<F, FI>) {
  const _fields = { ...defaultFields, ...fields }
  const formItemKs = Object.keys(formItemProps) as any[]
  const formRenderContextKey: InjectionKey<{ model?: Obj } & Obj> = Symbol()

  const solveLP = (lp: Item['lp']) => Array.isArray(lp) ? lp : (lp ? [lp, camelize(lp!)] : [])
  const _label = (item) => item[_fields.label] || solveLP(item.lp)[0]
  const _prop = (item) => item[_fields.prop] || solveLP(item.lp)[1]
  const _rules = (item, val) => unFn(item[_fields.rules], val)

  // FormItemRender ========================================================================================================
  
  const formItemRenderProps = {
    ...formItemProps,
    ...formItemRenderPropsBase
  }

  const FormItemRender = defineComponent({
    props: formItemRenderProps as any,
    name: formItemName,
    setup(props: Item, { attrs, slots }) {
      const form = inject(formRenderContextKey)
      const injected = inject('form-item', void 0)
      const model = reactiveComputed(() => form?.model || reactive({}))

      const transformer = useTransformer(model, () => _prop(props), props)

      return () => {
        const itemProps = {
          ...objectPick(props, formItemKs),
          // ...props,
          lp: void 0,
          [_fields.label]: injected?.noLabel ? void 0 : _label(props),
          [_fields.prop]: _prop(props),
          [_fields.rules]: _rules(props, model),
          '.__transformer': transformer
        }
        
        return !unFn(props.hide, model)
          ? (
            <FormItem {...itemProps}>
              {{
                ...slots,
                default: undefined,
                [_fields.inputSlot]: () => {
                  const elProps = mergeProps(
                    {
                      modelValue: transformer.get(),
                      'onUpdate:modelValue': transformer.set,
                      [unFn(_fields.modelValue, props)]: transformer.get(),
                      [`onUpdate:${unFn(_fields.modelValue, props)}`]: transformer.set
                    },
                    {
                      ...(props.el || {}),
                      disabled: unFn(props.el?.disabled, model)
                    }
                  )

                  const vnode = renderSlot(slots, 'default')
                  if (vnode.children![0]) vnode.children![0].props = Object.assign(elProps, vnode.children![0].props)
                  else vnode.children![0] ??= Input({ ...props, ...itemProps, el: elProps }, { attrs })
                  return vnode
                }
              }}
            </FormItem>
          )
          : undefined
      }
    }
  })

  // FormRender ========================================================================================================
  
  const _formRenderProps = {
    model: { type: Object, default: () => reactive({}) },
    items: [Array, Function],
    on_submit: Function,
  }
  const formRenderProps = {
    ...formProps,
    ..._formRenderProps,
  }

  const FormRender = defineComponent({
    name: formName,
    props: formRenderProps,
    setup(props: ExtractPropTypes<typeof _formRenderProps>, { attrs, emit, slots, expose }) {
      const _FormItemRender = createRender({
        defaultIs: (item, { slots }) => (
          <FormItemRender {...item}>{{ default: slots[`$${_prop(item)}`] ?? slots.default }}</FormItemRender>
        )
      })
      
      const formRef = ref({})
      expose(toReactive(formRef))

      provide(formRenderContextKey, props)

      const initialModel = JSON.stringify(props.model)

      async function submit(e) {
        if (!props.on_submit) return
        e.preventDefault?.()
        await formRef.value.validate?.()
        emit('_submit', props.model)
      }

      function reset() {
        formRef.value.reset?.()
        formRef.value.resetFields?.() // element-plus antdv 
        formRef.value.restoreValidation?.()
        formRef.value.resetValidation?.() // vant
        if (props.model) {
          Object.keys(props.model).forEach(k => props.model![k] = void 0)
          Object.assign(props.model, JSON.parse(initialModel || '{}'))
        }
      }

      return () => (
        <Form ref={formRef} {...{...props, ...attrs, items: void 0, on_submit: void 0 }} onSubmit={submit} onReset={reset}>
          {unFn(props.items, props.model)?.map((item: any) => (
            <_FormItemRender {...item} key={_prop(item)} />
          ))}
          {slots.default?.()}
        </Form>
      )
    }
  })

  return {
    FormRender,
    formRenderProps,
    FormItemRender,
    formItemRenderProps
  }
}