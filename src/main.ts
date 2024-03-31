import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '../public/vite.svg';
import { setupCounter } from './counter.ts';

const basename = import.meta.env.PROD // vite-env.d.ts
  ? '/try-vite-mpa'
  : '';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="animate-enter">
    <div class="flex flex-row gap-20 justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img class="w-24 h-24" src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img class="w-24 h-24" src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
    </div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      <div class="flex flex-row gap-3 justify-center">
        <a href="${basename}/">Home</a> |
        <a href="${basename}/about/">About</a> |
        <a href="${basename}/other/page/">Other</a>
      </div>
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
