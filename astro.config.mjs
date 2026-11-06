import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://portocampustudios.com',
  // Astro 7 defaults to 'jsx', which drops spaces between inline tags
  compressHTML: true,
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
