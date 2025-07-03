import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          luckyCanvas: ['@lucky-canvas/react'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: assetInfo => {
          const getAssetDir = (ext: string) => {
            const assetMap: Record<string, RegExp> = {
              media: /^(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
              images: /^(png|jpe?g|gif|svg|webp|ico)$/i,
              css: /^css$/i,
            }
            return Object.keys(assetMap).find(key => assetMap[key].test(ext)) || 'assets'
          }

          const ext = assetInfo.names?.[0]?.split('.').pop()?.toLowerCase() || ''
          return `${getAssetDir(ext)}/[name]-[hash][extname]`
        },
      },
    },
  },
})
