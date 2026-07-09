# will-portfolio — Infrastructure Snapshot

> Context gathered from repo analysis and GitHub API. Last updated: 2026-07-09.

## Repository

| Field | Value |
|-------|-------|
| Remote | `https://github.com/wahc1983/will-portfolio` |
| Default branch | `main` |
| Package name | `will_portfolio` |
| License | MIT |

### Remote branches (snapshot)

- `main` — production
- `cloudflare/workers-autoconfig` — created by Cloudflare bot during initial setup
- `feature/visual-refactor`, `feature/ngrx-refactor`, `backup/*` — feature/backup branches

## CI/CD: Cloudflare Workers Builds

### What it is

Native Git integration between GitHub and Cloudflare. No `.github/workflows/` in the repo.

### Evidence

- GitHub check run name: **Workers Builds: will-portfolio**
- App: **Cloudflare Workers and Pages** (`cloudflare-workers-and-pages[bot]`)
- Successful builds verified on commits: `6e4def0`, `6ad79be`, `0bc1f8b`, `a3c0951`

### Pipeline (per Cloudflare docs)

| Step | Default command | Notes |
|------|-----------------|-------|
| Build | `npm run build` | Runs `vite build`; outputs `dist/` including `wrangler.json` |
| Deploy (production) | `npx wrangler deploy` | Uses `wrangler.jsonc` + built assets |
| Deploy (non-prod branches) | `npx wrangler versions upload` | Preview URLs; not actively used (direct pushes to `main`) |

Build settings live in Cloudflare dashboard: Worker → Settings → Build.

### Setup history

1. **2026-04-14** — Bot opened PR #1 from `cloudflare/workers-autoconfig`
2. Commit `497aa78` added: `wrangler.jsonc`, `@cloudflare/vite-plugin`, `wrangler`, updated `vite.config.js`, `.gitignore`
3. Merged to `main` as `6e4def0`
4. Every subsequent push to `main` triggers build + deploy

### What CI does NOT run

- `npm run lint`
- Tests (none in project)
- GitHub Actions workflows

## Cloudflare Worker config

`wrangler.jsonc`:

```jsonc
{
  "name": "will-portfolio",
  "compatibility_date": "2026-04-14",
  "observability": { "enabled": true },
  "assets": { "not_found_handling": "single-page-application" },
  "compatibility_flags": ["nodejs_compat"]
}
```

- **SPA routing:** all unknown paths → `index.html`
- **No custom Worker script** — static assets only
- **Observability:** enabled for logs/metrics in dashboard

## Build toolchain

| Package | Version (approx) |
|---------|------------------|
| react / react-dom | ^19.2.0 |
| vite | ^8.0.8 (rolldown-vite) |
| wrangler | ^4.82.2 |
| @cloudflare/vite-plugin | ^1.32.2 |
| react-i18next / i18next | ^17 / ^26 |

Production build output (snapshot): ~276 KB JS (~87 KB gzip), ~24 KB CSS (~5.5 KB gzip), WebP illustrations 13–55 KB each.

## Security headers

`public/_headers` (copied to `dist/_headers`):

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `Content-Security-Policy` with `unsafe-inline` for scripts/styles (typical Vite SPA tradeoff); allows `fonts.googleapis.com` / `fonts.gstatic.com`

## Source structure

```
src/
├── assets/illustrations/     # WebP: hero, experience, contact (light/dark)
├── constants/contact.js      # Obfuscated email + Bogotá, Colombia
├── data/
│   ├── experience.js         # jobIndex, technologies, images
│   ├── projects.js           # listIndex, technologies, repoUrl, gradient
│   └── skills.js
├── components/
│   ├── layout/               # Header, Footer
│   ├── sections/             # Hero, About, Experience, Skills, Projects, Contact
│   └── ui/                   # ThemeToggle, LanguageSelector, SocialLinks, SocialIcons
├── contexts/                 # ThemeProvider, themeContext
├── hooks/                    # useTheme, useClickOutside
└── i18n/
    ├── config.js             # AVAILABLE_LANGUAGES, detection options
    ├── index.js
    └── locales/              # es.json (default), en.json, fr.json
```

## i18n

- Default language: **Spanish** (`es`)
- Detection order: `localStorage` → `navigator` → `htmlTag`
- `localStorage` key: `i18nextLng`
- `index.html` static `lang="en"` — mismatch with default locale (known gap)

## Theme

- Dark/light via `dark-theme` / `light-theme` classes on `document.documentElement`
- Persisted in `localStorage` key `theme`
- Fallback: `prefers-color-scheme`
- Palette inspired by NgRx design system (see README, `THEMES.md`)

## Scripts

| Script | Command |
|--------|---------|
| `dev` | `vite` |
| `build` | `vite build` |
| `lint` | `eslint .` |
| `preview` | `npm run build && wrangler dev` |
| `deploy` | `npm run build && wrangler deploy` |

## What's intentionally absent

- Backend / API routes
- Database
- Authentication
- GitHub Actions
- Docker
- Automated tests
- Analytics
- `robots.txt` / `sitemap.xml`
- Open Graph meta tags

## Review notes (2026-07-09)

Overall health: **good** for a personal portfolio.

| Area | Status |
|------|--------|
| Infra / deploy | OK — Cloudflare Workers Builds on `main` |
| Code structure | OK — clear separation |
| Security headers | OK — CSP could be tightened later |
| SEO / shareability | Improveable |
| CI lint gate | Not configured |
| Performance | OK — minor lazy-load opportunity |
