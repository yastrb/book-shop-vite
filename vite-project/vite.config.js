import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['axios'], // Зовнішній модуль
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-git-dev-bibliotekas-projects.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})




