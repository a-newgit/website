// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.agnimitrapathak.com",
  output: "static",
  adapter: netlify(),
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes("/portfolio/") }),
  ],
});
