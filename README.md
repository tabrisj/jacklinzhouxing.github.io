# Svelte 5 + Vite migration (proposal)

A from-scratch rebuild of this site on **Svelte 5 + Vite, as a multi-page static site** — one real HTML file per page, no client-side router.

This branch exists so the rebuild can be compared side by side with `main` before anyone commits to it. It is **not** a pull request, and nothing here is deployed.

## Why

The current site is a React SPA. Everything works, but a five-page static academic site carries a lot of machinery:

| | `main` (React SPA) | this branch (Svelte MPA) |
| --- | --- | --- |
| First-load JS (raw) | 470 KB | ~90 KB |
| First-load JS (gzip) | 152.7 KB | ~33.7 KB |
| CSS (gzip) | 11.2 KB | 4.2 KB |
| Modules bundled | 2,074 | 122 |
| `/research/automation` HTTP status | **404** (JS redirect) | **200** (real file) |
| Page `<title>` / description / canonical | set by JS, one shared value | static, one per page |

The routing row is the one that matters most: GitHub Pages has no server-side rewrite, so deep links currently depend on a `404.html` bounce plus a decoder script in `index.html`. In an MPA that entire problem disappears — the pages are just files.

## What changed

- **Build**: Vite 8 with `appType: 'mpa'` and five HTML entry points.
- **Framework**: Svelte 5 (runes), no router.
- **Styling**: unchanged — the same `tailwind.config` and the same CSS custom properties. Component markup keeps the original class strings, so the visual result is intended to be identical.
- **Animation**: `framer-motion`'s `whileInView` replaced by a 20-line IntersectionObserver action (`src/lib/reveal.js`), which also honours `prefers-reduced-motion`.
- **Icons**: `lucide-react` → `@lucide/svelte`. LinkedIn and X were dropped from Lucide 1.x, so those two are inlined (`BrandLinkedin.svelte`, `BrandX.svelte`).
- **Removed**: every dependency that was never actually used — `recharts`, `react-hook-form`, `@tanstack/react-query`, `vaul`, and the twelve `shadcn/ui` wrappers that only existed to serve them.
- **Added while in there**: per-page `canonical`, a `Person` JSON-LD block on the homepage, and a `<noscript>` fallback for the embedded CV.

## Structure

```
index.html                 Home
research/*/index.html      One file per research subpage
src/lib/*.svelte           One component per homepage section
src/entries/*.js           Mount one component per page
public/                    Served verbatim (CV, headshot, favicon, 404.html)
```

Content lives in the same places it does on `main` — the news array in `News.svelte`, publications in `CV.svelte` and `src/entries/*.js`, media in `Engagement.svelte`. Editing workflow is unchanged.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## Still open

- Headshot is still 1.5 MB and is the LCP element — worth converting to WebP either way.
- No `sitemap.xml` yet.
- The two FT links still use expiring gift tokens.
- Deployment: the existing GitHub Actions workflow runs `bun install && bun run build`, which works unchanged here. Pages would serve `dist/` as before, with no `404.html` fallback needed.
