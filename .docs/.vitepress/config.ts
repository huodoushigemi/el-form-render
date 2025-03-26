import { defineConfig } from 'vitepress'
import Jsx from '@vitejs/plugin-vue-jsx'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "el-form-render",
  description: "🚀 JSON 渲染表单，无限扩展",

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
          { text: 'options 属性', link: '/el-form-render/options' },
          { text: '自定义组件', link: '/el-form-render/is' },
          { text: '复杂布局', link: '/el-form-render/layout' },
          // { text: 'ant-design-vue', link: '/el-form-render/antdv' },
          // { text: 'naive-ui', link: '/el-form-render/naive-ui' },
          // { text: 'vant-ui', link: '/el-form-render/vant' },
          // { text: 'Runtime API Examples', link: '/markdown-examples' },
        ]
      },
      {
        text: '文档',
        items: [
          { text: 'cursor', link: '/docs/docs' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huodoushigemi/el-lowcode' }
    ]
  },

  base: '/el-form-render',
  outDir: '../docs',

  vite: {
    resolve: {
      alias: {
        'el-form-render/antdv4': path.join(process.cwd(), 'packages/el-form-render/antdv4'),
        'el-form-render/naive-ui': path.join(process.cwd(), 'packages/el-form-render/naive-ui'),
        'el-form-render/vant4': path.join(process.cwd(), 'packages/el-form-render/vant4'),
      }
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
