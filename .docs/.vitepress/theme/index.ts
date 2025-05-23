import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext } from 'vitepress'
import { CodePreview } from 'vmp:components'

import { useDark, useMounted } from '@vueuse/core'
import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:uno.css'
import './css.scss'

export default {
  ...DefaultTheme,
  async enhanceApp(ctx: EnhanceAppContext) {
    // DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ElementPlus)
    ctx.app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })

    // if (typeof window != 'undefined') await import('./mocks')

    // Fix bug on SSR: https://element-plus.gitee.io/zh-CN/guide/ssr.html#%E5%9C%A8%E6%8C%82%E8%BD%BD%E6%97%B6%E6%B8%B2%E6%9F%93-teleport
    // ctx.app.component('CodePreview', CodePreview)
    ctx.app.component('CodePreview', {
      setup: (props, { slots }) => {
        const isMounted = useMounted()
        return () => isMounted.value ? h(CodePreview, props, slots) : undefined
      }
    })
  }, 
}