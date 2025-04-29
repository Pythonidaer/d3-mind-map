import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mind Map Method',
        short_name: 'MindMap',
        description:
          'The Mind Map Method is a dynamic platform for creating interactive mind maps and comprehensive learning resources. Build, visualize, and share knowledge through customizable mind maps and detailed articles. Perfect for visual learners.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#EE0979',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/maskable-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icons/maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        screenshots: [
          {
            src: 'screenshots/desktop-1280x720.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: 'screenshots/mobile-375x667.png',
            sizes: '375x667',
            type: 'image/png',
            // no form_factor here → covers mobile
          },
        ],
      },
    }),
    visualizer({ open: true }), // 👈 auto-opens a stats.html after build
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  publicDir: 'public',
  // Ensure static files are copied to build output
  assetsInclude: ['robots.txt'],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{js,jsx}'],
      exclude: ['**/mindMapData.js', '**/articleData.js'],
      all: true,
    },
  },
})
