import { defineCustomElement, type ComponentOptions } from 'vue'
import { hyphenate } from '@vue/shared'
import EP, { useTooltipContentProps, ElDatePicker, ElTimePicker } from 'element-plus'
import { ElFormRender } from './element-plus'

import css1 from 'element-plus/dist/index.css?raw'
import css2 from 'element-plus/theme-chalk/dark/css-vars.css?raw'

useTooltipContentProps.teleported.default = false
;(ElDatePicker.props.teleported ??= {}).default = false
;(ElTimePicker.props.teleported ??= {}).default = false

const WC = defineCustomElement({
  ...ElFormRender as ComponentOptions,
  styles: [css1, css2].map(e => e.replaceAll(':root', ':host').replaceAll('html.', '.')),
  configureApp(app) {
    app.use(EP)
  },
})

const name = hyphenate(ElFormRender.name!)

if (!customElements.get(name)) {
  customElements.define(name, WC)
}