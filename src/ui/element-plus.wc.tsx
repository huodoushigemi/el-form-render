import { defineCustomElement } from 'vue'
import { hyphenate } from '@vue/shared'
import components from 'element-plus/es/component'
import { ElFormRender } from './element-plus'

import css1 from 'element-plus/dist/index.css?raw'
import css2 from 'element-plus/theme-chalk/dark/css-vars.css?raw'

ElFormRender.components = components

class WC extends defineCustomElement(ElFormRender) {
  connectedCallback() {
    const style = document.createElement('style')
    style.innerHTML = [css1, css2].join('\n')
    this.shadowRoot?.append(style)
    // 
    super.connectedCallback()
  }
}

const name = hyphenate(ElFormRender.name!)

if (customElements.get(name)) {
  customElements.define(name, WC)
}