# Portfolio Site

## Commands

- `npm run dev` — Dev server (localhost:4321)
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Run ESLint with auto-fix
- `npm run format` — Run Prettier

## Architecture

- Astro 5 + MDX + Netlify
- Password-protected `/portfolio/*` via Edge Functions
- Self-hosted Crimson Pro variable font

## Content

- `src/content/case-studies/` — MDX (protected)
- `src/content/notes/` — Markdown (public)
- `src/content/timeline.json` — Work history

## Environment Variables

- `PORTFOLIO_PASSWORD` — Portfolio access password
- `JWT_SECRET` — JWT signing secret

## Phase 0 Changes (2026-01-28)

- Added sitemap integration (excludes /portfolio/\*)
- Added prefers-reduced-motion support
- Added skip link for accessibility
- Added ARIA landmark to navigation
- Added JSON-LD structured data
- Added robots.txt
- Set up ESLint + Prettier
- Added cache headers for /\_astro/\* static assets
- Added decoding="async" to images
