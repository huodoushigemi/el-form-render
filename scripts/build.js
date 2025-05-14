import path from 'path'
import { build } from 'vite'
import fs from 'fs'
import fse from 'fs-extra/esm'
import pkg from '../package.json' with { type: 'json' }

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
      formats: ['cjs'],
      fileName: (format, e) => `${e}.${exts[format] ?? 'js'}`,
    },
    // minify: true,
    rollupOptions: {
      // treeshake: 'smallest',
      external: Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies, ...pkg.devDependencies })
    }
  },
})

;['package.json', 'README.md'].forEach(name => {
  const file = path.join(cwd, name)
  if (fs.existsSync(file)) fse.copySync(file, path.join('dist', name))
})
