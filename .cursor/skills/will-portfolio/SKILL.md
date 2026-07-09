---
name: will-portfolio
description: >-
  Provides infrastructure and project context for William's personal portfolio
  site (will-portfolio). Use when the user mentions will-portfolio, portfolio
  site, Cloudflare Workers deploy, Wrangler, Workers Builds, or work in
  will-proy/will-portfolio. Read reference.md for the current snapshot.
---

# will-portfolio

Personal portfolio SPA: React + Vite, i18n (es/en/fr), dark/light theme, hosted on Cloudflare Workers.

## Repo & paths

| Item | Value |
|------|-------|
| GitHub | `wahc1983/will-portfolio` |
| Production branch | `main` |
| Local path | `will-proy/will-portfolio` |
| Worker name | `will-portfolio` |

## Deploy (important)

**Deploy is automatic via Cloudflare Workers Builds — NOT GitHub Actions.**

- GitHub App: [Cloudflare Workers and Pages](https://github.com/apps/cloudflare-workers-and-pages)
- Check run on each push to `main`: `Workers Builds: will-portfolio`
- Pipeline (two steps on Cloudflare servers):
  1. **Build command:** `npm run build` → `vite build` → `dist/`
  2. **Deploy command:** `npx wrangler deploy` (default; separate from build)

Do **not** suggest adding GitHub Actions unless the user explicitly asks. `npm run deploy` is for **local/manual** use only (`build && wrangler deploy`); Workers Builds does not use it (avoids double build).

Initial Cloudflare setup: PR #1 (`cloudflare/workers-autoconfig` branch), merged 2026-04-14. Bot added `wrangler.jsonc`, `@cloudflare/vite-plugin`, and Wrangler deps.

Dashboard: Workers & Pages → `will-portfolio` → Settings → Build / Builds.

## Local development

```bash
cd will-portfolio
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build
npm run preview  # build + wrangler dev
npm run deploy   # manual: build + wrangler deploy (needs wrangler login)
```

Requires Node.js 18+ (stack uses React 19, Vite 8).

## Architecture

Static SPA — no backend, no database, no runtime API.

```
Push to main → Cloudflare Workers Builds → dist/ → CDN
```

| Layer | Tech |
|-------|------|
| UI | React 19, CSS variables, Flexbox/Grid |
| Build | Vite 8 + Rolldown, `@vitejs/plugin-react` |
| i18n | react-i18next, locales in `src/i18n/locales/` |
| Theme | Context API + `useTheme`, `localStorage`, `prefers-color-scheme` |
| Hosting | Cloudflare Workers static assets (`wrangler.jsonc`) |
| Fonts | Google Fonts (Oxanium, Roboto, Space Mono) |

## Key files

| File | Purpose |
|------|---------|
| `wrangler.jsonc` | Worker name, SPA `not_found_handling`, observability |
| `vite.config.js` | `react()` + `cloudflare()` plugins |
| `public/_headers` | CSP, HSTS, X-Frame-Options, etc. |
| `src/data/` | Static metadata: experience, projects, skills |
| `src/i18n/` | i18n config + es/en/fr JSON |
| `src/constants/contact.js` | Email (obfuscated) + location |

## Content editing

1. **Texts:** `src/i18n/locales/{es,en,fr}.json`
2. **Structured data:** `src/data/{experience,projects,skills}.js`
3. **Contact:** `src/constants/contact.js`
4. **Illustrations:** `src/assets/illustrations/*.webp`
5. **Theme tokens:** `src/index.css`, `THEMES.md`

## Agent guidelines

- Prefer minimal diffs; match existing component/CSS patterns.
- Do not add backend, CMS, or over-engineer for a static portfolio.
- Do not commit `dist/`, `.wrangler/`, or `.env*` (gitignored).
- Only create git commits when the user explicitly asks.
- Lint passes (`npm run lint`); build passes (`npm run build`).
- `nodejs_compat` in `wrangler.jsonc` is likely unnecessary (no server Worker logic) but harmless.

## Known gaps (optional improvements)

Not blockers — mention only when relevant:

- Set `VITE_SITE_URL` in Cloudflare Builds for absolute `sitemap.xml`
- Set `VITE_CF_BEACON_TOKEN` in Cloudflare Builds for Web Analytics
- No analytics until beacon token is configured

## Additional resources

- Detailed snapshot: [reference.md](reference.md)
- User-facing docs: [README.md](../../README.md)
