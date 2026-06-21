import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.laurabohanon.com',
  integrations: [sitemap()],
  output: 'static',
});
