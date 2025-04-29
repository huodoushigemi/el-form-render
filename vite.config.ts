import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    (await import('@vitejs/plugin-vue')).default(),
    (await import('@vitejs/plugin-vue-jsx')).default(),
    (await import('unocss/vite')).default(),
  ],
})
