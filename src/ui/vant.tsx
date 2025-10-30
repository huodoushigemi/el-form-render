import { createVNode, mergeProps, resolveDynamicComponent } from 'vue'
import { Form, formProps, Field, fieldProps } from 'vant'

import { createFormRender } from '../createFormRender'
import { showOpt, solveOptions } from '../utils'

const alias = {
  'input': 'field',
  'input-number': 'stepper',
  'checks': 'checkbox-group',
  'radios': 'radio-group',
}

const { FormRender, FormItemRender } = createFormRender({
  Form: Form,
  formName: 'VanFormRender',
  formProps: formProps,
  FormItem: (item, { slots }) => (
    (item.el?.is || `van-${alias[item.type] || item.type || 'field'}`) == 'van-field'
      ? <van-field {...{...item, ...item.el}} el={undefined} v-model={item['.__transformer'].value}>{{...slots, input: undefined}}</van-field>
      : <van-field {...item} el={undefined}>{slots}</van-field>
  ),
  formItemName: 'VanFormItemRender',
  formItemProps: { ...fieldProps, el: null },
  Input: (item) => {
    const { el } = item
    const type = alias[item.type] || item.type
    const is = el?.is || `van-${type || 'field'}`

    if (!item.options) {
      return createVNode(resolveDynamicComponent(is), el)
    }

    const options = solveOptions(item.options)!
    if (el?.is) {
      return createVNode(resolveDynamicComponent(is), { options, ...el })
    }
    else if (type == 'checkbox-group') {
      return (
        <van-checkbox-group {...el}>
          {options.map(opt => <van-checkbox name={opt.value} {...opt}>{showOpt(opt)}</van-checkbox>)}
        </van-checkbox-group>
      )
    }
    else if (type == 'radio-group') {
      return (
        <van-radio-group {...el}>
          {options.map(opt => <van-radio name={opt.value} {...opt}>{showOpt(opt)}</van-radio>)}
        </van-radio-group>
      )
    }
  },
  fields: {
    prop: 'name',
    inputSlot: 'input',
  }
})

export const VanFormRender = FormRender
export const VanFormItemRender = FormItemRender
export const Item = FormItemRender

export default VanFormRender
