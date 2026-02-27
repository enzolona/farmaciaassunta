import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["combinations-conventions-kissing-move.trycloudflare.com"],
  },
})
