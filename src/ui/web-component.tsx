import { hyphenate } from '@vue/shared'
import { defineCustomElement } from 'vue'

export const customElement = (Comp, name?) => {
  name ??= hyphenate(Comp.name)
  if (customElements.get(name)) return
  customElements.define(name, defineCustomElement(Comp))
}
