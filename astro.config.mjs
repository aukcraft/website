import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aukcraft.org',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    inlineStylesheets: 'auto',
  },
});
