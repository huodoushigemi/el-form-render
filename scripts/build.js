import path from 'path'
import { build } from 'vite'
import fs from 'fs'
import fse from 'fs-extra/esm'
import { remove } from 'es-toolkit'

const cwd = process.cwd()

const input = {
  'index': 'src/index',
  'createFormRender': 'src/createFormRender',
  'ui/element-plus': 'src/ui/element-plus',
  'ui/element-plus.wc': 'src/ui/element-plus.wc',
  'ui/naive-ui': 'src/ui/naive-ui',
  'ui/antdv': 'src/ui/antdv',
  'ui/vant': 'src/ui/vant',
  'ui/vuetify': 'src/ui/vuetify',
}

const exts = {
  es: 'mjs'
}


function copyExtra(cwd) {
  ;['package.json', 'README.md'].forEach(name => {
    const file = path.join(cwd, name)
    if (fs.existsSync(file)) fse.copySync(file, path.join(cwd, 'dist', name))
  })
}

async function aaa(cwd, entry, { minify = false, full = false } = {}) {
  // 读取package.json
  const pkg = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf-8'))
  const peerDependencies = pkg.peerDependencies
  const dependencies = pkg.dependencies
  const devDependencies = pkg.devDependencies
  const external = Object.keys({ ...dependencies, ...peerDependencies, ...devDependencies })

  const inline = ['@el-lowcode/render', '@vueuse/core', 'es-toolkit', '@vue/shared']
  remove(external, v => inline.includes(v))

  await build({
    root: cwd,
    configFile: path.join(process.cwd(), 'vite.config.ts'),
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    build: {
      emptyOutDir: true,
      copyPublicDir: false,
      target: 'esnext',
      outDir: 'dist',
      lib: {
        entry,
        formats: ['es'],
        fileName: (format, e) => [e, full && 'full', minify && 'min', exts[format] ?? 'js'].filter(Boolean).join('.'),
      },
      minify,
      rollupOptions: {
        external: full ? void 0 : source => external.includes(source) || external.includes(source.split('/')[0])
      }
    }
  })

  copyExtra(cwd)
}

await aaa(cwd, input)
await aaa(path.join(cwd, 'packages/element-plus'), { index: 'index', wc: 'wc' }, { minify: true, full: true })