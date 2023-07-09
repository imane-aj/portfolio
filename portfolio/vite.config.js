import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'postcss'
// import SwiperPlugin from 'swiper/swiper-bundle';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),postcss()],
  optimizeDeps: {
    include: ['framer-motion'],
  },
  base: './',
  build: {
    outDir: 'static',
    assetsDir: '',
  },
})
