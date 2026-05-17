import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        navigateFallbackDenylist: [
          /^\/sitemap\.xml$/,
          /^\/robots\.txt$/,
          /^\/favicon\.svg$/,
          /^\/icons\.svg$/,
          /^\/assets\//,
          /^\/logos\//,
          /^\/api\//
        ]
      },
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Lucas Lima | Digital Product Builder',
        short_name: 'Lucas Lima',
        description: 'Construção de Sistemas & Experiências Digitais',
        theme_color: '#05050a',
        background_color: '#05050a',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
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

