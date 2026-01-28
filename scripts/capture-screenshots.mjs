import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const BASE_URL = "http://localhost:4321";
const OUTPUT_DIR = "./screenshots/baseline";

const viewports = [
  { name: "mobile", width: 375, height: 667 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const pages = [
  { name: "home", path: "/" },
  { name: "notes-index", path: "/notes/" },
  { name: "notes-design-systems", path: "/notes/design-systems-lessons/" },
  { name: "notes-research", path: "/notes/research-synthesis/" },
  { name: "portfolio-login", path: "/portfolio/login/" },
];

async function captureScreenshots() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    for (const p of pages) {
      const url = `${BASE_URL}${p.path}`;
      console.log(`Capturing ${p.name} at ${viewport.name}...`);

      await page.goto(url, { waitUntil: "networkidle" });
      await page.screenshot({
        path: join(OUTPUT_DIR, `${p.name}-${viewport.name}.png`),
        fullPage: true,
      });
    }

    await context.close();
  }

  await browser.close();
  console.log(`\nScreenshots saved to ${OUTPUT_DIR}`);
}

captureScreenshots().catch(console.error);
