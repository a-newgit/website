// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://your-site.netlify.app",
  output: "static",
  adapter: netlify(),
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes("/portfolio/") }),
  ],
});
