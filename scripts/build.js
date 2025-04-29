import path from 'path'
import { build } from 'vite'
import fs from 'fs'
import fse from 'fs-extra/esm'
import pkg from '../package.json' with { type: 'json' }

const input = [
  '/src/index.ts',
  '/src/createFormRender',
  '/src/ui/element-plus',
  // '/src/ui/antdv4',
  '/src/ui/naive-ui',
].map(e => path.join(process.cwd(), e))

await build({
  build: {
    copyPublicDir: false,
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: input,
      formats: ['es'],
      fileName: '[name]',
    },
    minify: false,
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)]
    }
  },
})

// ;['package.json', 'README.md'].forEach(name => {
//   const file = path.join(path.dirname(input), name)
//   if (fs.existsSync(file)) fse.copySync(file, path.join(outDir, name))
// })