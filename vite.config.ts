import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Fonts from 'unplugin-fonts/vite';

export default defineConfig({
  plugins: [
    react(),
    Fonts({
      google: {
        families: ['Inclusive Sans'], 
      },
    }),
  ],
  server: {
    port: 3006, 
  },
});
