import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dashboard config: vite serve, React 18, port 3000, auto-open browser
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})