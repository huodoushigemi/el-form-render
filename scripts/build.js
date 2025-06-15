import path from 'path'
import { build } from 'vite'
import fs from 'fs'
import fse from 'fs-extra/esm'
import { remove } from 'es-toolkit'

import pkg from '../package.json' with { type: 'json' }
const external = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies, ...pkg.devDependencies })

const inline = ['@el-lowcode/render', '@vueuse/core', 'es-toolkit', '@vue/shared']
remove(external, v => inline.includes(v))

const cwd = process.cwd()

const input = {
  'index': 'src/index',
  'createFormRender': 'src/createFormRender',
  'ui/element-plus': 'src/ui/element-plus',
  'ui/naive-ui': 'src/ui/naive-ui',
  'ui/antdv': 'src/ui/antdv',
  'ui/vant': 'src/ui/vant',
  'ui/vuetify': 'src/ui/vuetify',
}

const exts = {
  es: 'mjs'
}

await build({
  build: {
    copyPublicDir: false,
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: input,
      formats: ['es'],
      fileName: (format, e) => `${e}.${exts[format] ?? 'js'}`,
    },
    // minify: true,
    rollupOptions: {
      // treeshake: 'smallest',
      external: source => external.includes(source) || external.includes(source.split('/')[0])
    }
  },
})

;['package.json', 'README.md'].forEach(name => {
  const file = path.join(cwd, name)
  if (fs.existsSync(file)) fse.copySync(file, path.join('dist', name))
})
