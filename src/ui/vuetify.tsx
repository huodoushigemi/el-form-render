import { pick } from 'es-toolkit'
import { createVNode, resolveDynamicComponent } from 'vue'
import { VForm } from 'vuetify/components'

import { createFormRender } from '../createFormRender'
import { solveOptions } from '../utils'

const alias = {
  'input': 'text-field',
  'input-number': 'number-input',
  'input-tag': 'combobox',
  'checks': 'checkbox-group',
  'radios': 'radio-group',
  'chips': 'chip-group'
}

const { FormRender, FormItemRender } = createFormRender({
  Form: VForm,
  formName: 'VFormRender',
  formProps: VForm.props,
  FormItem: (_, { slots }) => slots.default?.(),
  formItemName: 'VFormItemRender',
  formItemProps: {},
  Input: (item, { attrs }) => {
    let { type, options, el, ...props } = item
    el && Object.assign(props, attrs, el)
    type = alias[type] || type
    const is = `v-${type || 'text-field'}`
    if (!item.options) {
      return createVNode(resolveDynamicComponent(is), props)
    }
    options = solveOptions(options)!
    if (el?.is) {
      return createVNode(resolveDynamicComponent(is), { items: options, ...props })
    }
    else if (type == 'select' || !type) {
      return (
        <v-select {...props} items={options.map(e =>({ ...e, title: e.label }))} />
      )
    }
    else if (type == 'combobox') {
      return (
        <v-combobox {...props} items={options.map(e => e.label)} />
      )
    }
    else if (type == 'checkbox-group') {
      return (
        <v-input class='v-radio-group' {...props}>
          <v-label text={props.label} style='margin-inline-start: 16px' />
          <div class='v-selection-control-group v-selection-control-group--inline' style={['padding-inline-start: 6px; --v-selection-control-size: 40px']}>
            {options.map(opt => (
              <v-checkbox
                multiple={true}
                density={props.density || attrs.density}
                style={'--v-input-control-height: 40px'}
                {...opt}
                {...pick(props, ['modelValue', 'onUpdate:modelValue'])}
                hide-details={true}
              />
            ))}
          </div>
        </v-input>
      )
    }
    else if (type == 'radio-group') {
      return (
        <v-radio-group inline={true} {...props}>
          {options.map(opt => <v-radio {...opt} />)}
        </v-radio-group>
      )
    }
    else if (type == 'chip-group') {
      return (
        <v-input class='v-radio-group' {...props}>
          <v-label text={props.label} style='margin-inline-start: 16px' />
          <v-chip-group style='padding-inline-start: 6px;' {...props}>
            {options.map(opt => <v-chip text={opt.label} {...opt} label={void 0} />)}
          </v-chip-group>
        </v-input>
      )
    }
    else {
      return createVNode(resolveDynamicComponent(is), { items: options, ...props })
    }
  },
})

export const FormItem = FormItemRender

export default FormRender
