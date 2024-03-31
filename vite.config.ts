import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  base: '',
  root,
  build: {
    outDir,
    emptyOutDir: true, // explicit true since 'dist' is NOT a sub-directory of 'src'
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      },
    },
  },
});
