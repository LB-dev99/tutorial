import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://radiant-macaron-402dc3.netlify.app/',
  integrations: [tailwind(), preact()],
  output: "server",
  adapter: netlify()
});