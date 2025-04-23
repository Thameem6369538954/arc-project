import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src', // ✅ Alias for `src` folder
    },
  },
  base: '/', // ✅ Change to absolute paths for GoDaddy
  build: {
    outDir: 'dist',
  },
})
