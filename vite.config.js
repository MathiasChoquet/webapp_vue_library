import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/restbackend': {
        target: 'http://localhost:8087', // Remplacez par l'URL de votre serveur backend
        rewrite: (path) => path.replace(/^\/restbackend/, ''),
      },
    },
  },
})
