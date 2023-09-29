import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'postcss'
// import SwiperPlugin from 'swiper/swiper-bundle';
import { promises as fs } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),postcss()],
  optimizeDeps: {
    include: ['framer-motion'],
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  server: {
    strictPort: true,
    fs: {
      strict: true,
    },
  },
})
