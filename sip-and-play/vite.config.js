import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu/index.html'),
        calendar: resolve(__dirname, 'calendar/index.html'),
      },
    },
  },
})