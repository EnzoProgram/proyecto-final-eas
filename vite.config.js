import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/proyecto-final-eas/',
  build: {
    outDir: 'dist',
    assetsDir: '.',  // Mueve assets a la raíz de 'dist'
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',  // Elimina hashes para simplificar
      },
    },
  },
});