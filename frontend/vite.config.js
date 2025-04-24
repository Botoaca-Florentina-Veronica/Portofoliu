import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg'],
  server: {
    proxy: {
      '/api': 'http://localhost:3001', // Proxy pentru backend
    },
  },
});