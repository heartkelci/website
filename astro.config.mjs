// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["substackcdn.com"],
  },
  integrations: [alpinejs({ entrypoint: "/src/alpinejs_init" })],
});
