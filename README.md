# Vite Multi-page application

Exploring [Vite](https://vitejs.dev/) to create multi-page application.

When you want only simplicity and deployment only on **GitHub Pages**, then you should
know about this possibility.

Reference: https://vitejs.dev/guide/build.html#multi-page-app

## How this project was initiated

Initiate **Vite** project.

```bash
npm create vite@latest
√ Project name: ... try-vite-mpa
√ Select a framework: » Vanilla
√ Select a variant: » TypeScript
```

## Vite configuration

Manually create `vite.config.ts` in root directory.

```ts
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
```

### Restructure project

Update the import/src links path accordingly when moving files around.

Use relative path.

```txt
.
├─ public/
├─ src/
│   ├─ index.html
│   ├─ main.ts
│   └─ style.css
└─ package.json
└─ vite.config.ts
```
