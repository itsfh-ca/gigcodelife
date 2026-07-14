// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// NOTE: The Cloudflare adapter runs dev through the workerd runtime, which
// lacks `process` and 500s every route locally. The site is fully static,
// so we develop adapter-free (standard Vite/Node dev server) and re-enable
// Cloudflare for deploy:
//
//   import cloudflare from '@astrojs/cloudflare';
//   adapter: cloudflare(),

// https://astro.build/config
export default defineConfig({
  site: 'https://gigcodelife.com',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
