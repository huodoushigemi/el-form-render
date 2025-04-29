import { defineConfig } from 'vite'
import path from 'path'

const cwd = process.cwd()

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'el-form-render/element-plus': path.join(cwd, '/src/ui/element-plus'),
      'el-form-render/naive-ui': path.join(cwd, '/src/ui/naive-ui'),
      'el-form-render/antdv': path.join(cwd, '/src/ui/antdv'),
      'el-form-render/vant': path.join(cwd, '/src/ui/vant'),
      'el-form-render': path.join(cwd, '/src/index'),
    }
  },
  plugins: [
    (await import('@vitejs/plugin-vue')).default(),
    (await import('@vitejs/plugin-vue-jsx')).default(),
  ],
})
