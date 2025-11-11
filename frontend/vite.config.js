import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
    open: true,
    // permitir hosts específicos (por exemplo, ngrok)
    allowedHosts: [
      'e87596155761.ngrok-free.app'
    ]
  }
})
