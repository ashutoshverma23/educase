import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        CustomBlue: '#6C25FF',
        CustomPurple: '#6C25FF4B',
        CustomBlack: '#1D2226',
        CustomBg: '#F7F8F9',
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
