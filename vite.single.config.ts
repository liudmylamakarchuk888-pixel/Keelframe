// Builds the whole site into ONE self-contained HTML file (used for the hosted preview).
// Run: npm run build:single  → dist-single/index.html
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: { outDir: 'dist-single', emptyOutDir: true },
});
