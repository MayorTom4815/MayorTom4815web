// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mayortom4815.github.io",
  base: "/MayorTom4815web/",

  vite: {
    plugins: [tailwindcss()]
  }
});