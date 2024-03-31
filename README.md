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

## Adding Multiple Pages

Add multiple pages inside the `src/` folder and update the `vite.config.ts`

```txt
.
├─ public/
├─ src/
│   ├─ about/index.html
│   ├─ other/page/
│   │   ├─ index.html
│   │   └─ main.ts
│   ├─ index.html
│   ├─ main.ts
│   └─ style.css
└─ package.json
└─ vite.config.ts
```

```ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  appType: 'mpa', // the extra '/' at the end of every URL path matters
  base: '',
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true, // explicit true since 'dist' is NOT a sub-directory of 'src'
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about/index.html'),
        other: resolve(root, 'other/page/index.html'),
        '404': resolve(root, '404.html'),
      },
    },
  },
});
```

### D.R.Y Vite Configuration

```ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

const r = (path: string) => {
  return resolve(__dirname, path);
};

const root = r('src');
const outDir = r('dist');
const publicDir = r('public');

const page = (path: string) => {
  return resolve(root, path);
};

export default defineConfig({
  appType: 'mpa', // the extra '/' at the end of every URL path matters
  base: '',
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true, // explicit true since 'dist' is NOT a sub-directory of 'src'
    rollupOptions: {
      input: {
        main: page('index.html'),
        about: page('about/index.html'),
        other: page('other/page/index.html'),
        '404': page('404.html'),
      },
    },
  },
});
```

## Add Tailwindcss

```bash
npm i -D tailwindcss autoprefixer postcss
npx tailwindcss init -p
```

`tailwind.config.js`

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add tailwind directives

`style.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
