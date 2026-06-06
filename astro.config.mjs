// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nataliia-karmolog.github.io/',
  base: '/NataliaKarmolog',
  vite: {
    plugins: [tailwindcss()],
  },
});
