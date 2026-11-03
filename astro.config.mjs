// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tom-bigot.fr',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
