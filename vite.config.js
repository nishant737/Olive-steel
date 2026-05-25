import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng:  { optimizationLevel: 7 },
      mozjpeg:  { quality: 72 },
      pngquant: { quality: [0.65, 0.80], speed: 4 },
      svgo:     { plugins: [{ name: 'removeViewBox' }] },
      webp:     { quality: 72 },
    }),
  ],
})
