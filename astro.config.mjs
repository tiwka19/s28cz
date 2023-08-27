import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  experimental: {
    assets: true,
    viewTransitions: true
  },
  integrations: [tailwind(), react()]
});