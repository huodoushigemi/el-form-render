import { defineConfig } from 'vitepress'
import Jsx from '@vitejs/plugin-vue-jsx'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import UnoCSS from 'unocss/vite'
import rootConfig from '../../vite.config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "el-form-render",
  description: "🚀 AI 友好型 JSON 渲染表单，无限扩展",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/el-form-render/quickstart' }
    ],

    sidebar: [
      {
        text: 'el-form-render',
        items: [
          { text: '快速开始', link: '/el-form-render/quickstart' },
          { text: '基础使用', link: '/el-form-render/basic' },
          { text: '组件联动', link: '/el-form-render/linkage' },
          { text: 'options 属性', link: '/el-form-render/options' },
          { text: '自定义组件', link: '/el-form-render/is' },
          { text: '复杂布局', link: '/el-form-render/layout' },
          // { text: 'Runtime API Examples', link: '/markdown-examples' },
        ]
      },
      {
        text: '文档',
        items: [
          { text: 'cursor', link: '/docs/docs' }
        ]
      },
      {
        text: 'UI 库',
        items: [
          { text: 'element-plus', link: '/ui/element-plus' },
          { text: 'naive-ui', link: '/ui/naive-ui' },
          { text: 'antdv', link: '/ui/antdv' },
          { text: 'vant', link: '/ui/vant' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huodoushigemi/el-lowcode' }
    ]
  },

  base: '/el-form-render',
  outDir: '../docs',

  vite: {
    resolve: {
      alias: rootConfig.resolve?.alias
    },
    ssr: {
      noExternal: ['vite-plugin-markdown-preview'],
    },
    plugins: [
      Jsx(),
      MarkdownPreview(),
      UnoCSS(),
    ],
  },
})
