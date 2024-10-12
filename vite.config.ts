import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({ 
  base: "https://s-idn.github.io/TheatreLocal/", plugins: [react()], 
  resolve: {
    preserveSymlinks: true
  },
}) 