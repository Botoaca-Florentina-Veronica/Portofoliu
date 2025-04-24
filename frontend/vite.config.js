import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build', // sau './dist' dacă preferi
    emptyOutDir: true, // șterge folderul la fiecare build
  },
});