import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jfangluo-creator.github.io',
  base: '/Awesome-GPT-image-2',
  integrations: [
    react(),
    tailwind(),
  ],
  image: {
    domains: [],
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
