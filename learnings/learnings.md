# Portfolio Build Learnings

A running log of lessons learned while building this design portfolio.

---

## 2026-01-27 — Initial Setup

### Tech Stack Decisions

**Astro 5 with Hybrid Mode**

- Chose Astro for its content-first approach and excellent Markdown/MDX support
- Hybrid mode (static + SSR) enables password protection for case studies without sacrificing static performance for public pages

**Netlify Edge Functions for Auth**

- JWT tokens with HTTP-only cookies provide secure, stateless authentication
- Edge functions run close to users, keeping auth checks fast
- Simpler than setting up a full backend while still being secure

**CSS Variables Over Frameworks**

- No Tailwind or other CSS frameworks — keeps bundle small and maintains full control
- CSS custom properties enable easy theming and accent color changes
- System font stack for monospace avoids extra font downloads

### Content Architecture

**Content Collections**

- Astro's content collections with Zod schemas provide type safety for Markdown frontmatter
- Separate collections for `notes` (public) and `case-studies` (protected)
- MDX for case studies allows embedding custom components (figures, callouts, stats)

**Self-hosted Variable Fonts**

- Crimson Pro as variable font reduces HTTP requests and file size
- Subsetting would further optimize but full character set kept for flexibility

### What Worked Well

- Starting with a clear site structure before writing code
- Designing the content schema before creating pages
- Using MDX components to keep case study markdown clean

### What Could Be Better

- Consider adding a build-time check that all required frontmatter fields are present
- Image optimization pipeline not yet set up (Astro's built-in image optimization pending)

---

## 2026-01-28 — Phase 0: Site Audit & Optimization

### Completed

**Performance:**

- Added `@astrojs/sitemap` integration (excludes `/portfolio/*`)
- Added cache headers for `/_astro/*` static assets (immutable, 1 year)
- Added `decoding="async"` to images in Figure, ImageGrid, CaseStudyCard
- Added width/height attributes to CaseStudyCard images

**Accessibility:**

- Added `prefers-reduced-motion` support in global.css
- Added skip link to BaseLayout for keyboard navigation
- Added `aria-label="Main navigation"` to Header nav
- Added `id="main-content"` to PageLayout main element

**SEO:**

- Added JSON-LD structured data (WebSite schema) to BaseHead
- Created `public/robots.txt` blocking `/portfolio/` and `/api/`
- Sitemap auto-generated at `/sitemap-index.xml`

**Code Quality:**

- Set up ESLint with `eslint-plugin-astro` and TypeScript support
- Set up Prettier with `prettier-plugin-astro`
- Added lint/format npm scripts

**Documentation:**

- Created `CLAUDE.md` with commands, architecture, and Phase 0 changes
- Created `~/.claude/skills/audit.md` reusable audit skill
- Created `.mcp.json` for Playwright MCP (visual regression testing)

### Next Steps

1. ~~Load Playwright MCP~~ — Configured but unused; direct Playwright is more reliable
2. ~~Capture baseline screenshots~~ — Done via `npm run screenshots`
3. ~~Update site URL~~ — Set to `https://www.agnimitrapathak.com`

### Baseline Screenshots (2026-01-28)

Captured 15 screenshots (5 pages × 3 viewports) using Playwright directly:

- `scripts/capture-screenshots.mjs` — Screenshot capture script
- `screenshots/baseline/` — Baseline images
- Run with `npm run screenshots` (dev server must be running)

### Commit

- `aa2f0f3` — "Add Phase 0 site audit optimizations" (pushed to main)

---

## Session Notes

_Add learnings from each work session below_

---
