import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true
  },
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
          'icons': ['lucide-react', '@fortawesome/react-fontawesome']
        }
      }
    },
    chunkSizeWarningLimit: 1200
  }
})

