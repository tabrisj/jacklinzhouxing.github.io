# Svelte 5 + Vite migration (proposal)

A from-scratch rebuild of this site on **Svelte 5 + Vite, as a multi-page static site** — one real HTML file per page, no client-side router.

This branch exists so the rebuild can be compared side by side with `main` before anyone commits to it. It is **not** a pull request, and nothing here is deployed.

> **逐条改动清单见 [CHANGELOG.md](CHANGELOG.md)** — 完整列出相对 `main` 的每一处改动，含体积对比、修复的故障、设计与内容调整、以及待确认事项。

## Why

The current site is a React SPA. Everything works, but a five-page static academic site carries a lot of machinery:

| | `main` (React SPA) | this branch (Svelte MPA) |
| --- | --- | --- |
| First-load JS (raw) | 470 KB | 98.9 KB |
| First-load JS (gzip) | 152.7 KB | 36.0 KB |
| CSS (gzip) | 11.2 KB | 4.6 KB |
| npm dependencies | 72 | 8 |
| `/research/automation` HTTP status | **404** (JS redirect) | **200** (real file) |
| Page `<title>` / description / canonical | set by JS, one shared value | static, one per page |

> Bundled module count actually rose (2,074 → 4,221) because Lucide ships one module per icon. Judge by output size, not module count.

The routing row is the one that matters most: GitHub Pages has no server-side rewrite, so deep links currently depend on a `404.html` bounce plus a decoder script in `index.html`. In an MPA that entire problem disappears — the pages are just files.

## What changed

- **Build**: Vite 8 with `appType: 'mpa'` and five HTML entry points.
- **Framework**: Svelte 5 (runes), no router.
- **Styling**: the same `tailwind.config` and CSS custom properties, and the original class strings are kept in the markup — but the design was **not** frozen. Contrast, type scale, measure, spacing and section headings were revised afterwards. [CHANGELOG.md](CHANGELOG.md) lists every one.
- **Animation**: `framer-motion`'s `whileInView` replaced by a 20-line IntersectionObserver action (`src/lib/reveal.js`), which also honours `prefers-reduced-motion`.
- **Icons**: `lucide-react` → `@lucide/svelte`. LinkedIn, X and Xiaohongshu were dropped from Lucide 1.x, so those are inlined (`BrandLinkedin.svelte`, `BrandX.svelte`, `BrandXiaohongshu.svelte`).
- **Removed**: every dependency that was never actually used — `recharts`, `react-hook-form`, `@tanstack/react-query`, `vaul`, and the 48 `shadcn/ui` wrappers (only 12 were ever imported).
- **Added while in there**: per-page `canonical`, a `Person` JSON-LD block on the homepage, a skip link, and a real error state on the contact form.

## Structure

```
index.html                 Home
research/*/index.html      One file per research subpage
src/lib/*.svelte           One component per homepage section
src/entries/*.js           Mount one component per page
public/                    Served verbatim (CV, headshot, favicon, 404.html)
```

Content lives in the same places it does on `main` — the news array in `News.svelte`, publications in `Publications.svelte`, media in `Engagement.svelte`, research subpages in `src/entries/*.js`. Editing workflow is unchanged.

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
- Deployment: `.github/workflows/static.yml` was kept and switched from Bun to npm (`npm ci && npm run build`) so CI uses the same toolchain and lockfile as local development. `bun.lock` is gone with the old dependency tree. Pages serves `dist/` as before, and no `404.html` fallback is needed.
