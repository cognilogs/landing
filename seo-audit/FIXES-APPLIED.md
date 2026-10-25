# Fixes applied — 25 October 2026

Scope approved: Critical + High on-site items, with canonicals pointed at `cognilogs.com`.

## What changed

### New files

| File | Purpose |
|---|---|
| `src/lib/site.ts` | Single source of truth for the canonical origin (`SITE_URL`), the OG image URL, and `pageMetadata()` which emits canonical + Open Graph + Twitter for a page |
| `src/lib/schema.ts` | JSON-LD builders: sitewide Organization / WebSite / SoftwareApplication graph, plus per-page BreadcrumbList |
| `src/components/seo/JsonLd.tsx` | Server component that renders a JSON-LD block into the initial HTML |
| `src/app/robots.ts` | `robots.txt`: allow all crawlers, declare the sitemap and host |
| `src/app/sitemap.ts` | `sitemap.xml`: 11 URLs with lastmod, changefreq and priority |
| `public/og.png` | 1200×630 social preview card in the site's visual language |

Both route files use `export const dynamic = "force-static"` because `output: "export"` requires it.

### Edited files

| File | Change |
|---|---|
| `src/app/layout.tsx` | `metadataBase`, sitewide OG/Twitter defaults with the image, and the site entity JSON-LD |
| `src/app/page.tsx` + 10 inner pages | Metadata now built by `pageMetadata()`: self-referencing canonical, per-page OG/Twitter with image, trimmed description, corrected title |
| `src/app/{about,comparison,docs,features,how-it-works,pricing,privacy,terms,use-cases,waitlist}/page.tsx` | Added BreadcrumbList JSON-LD |
| `src/app/globals.css` | Added `.link-inline` for editorial body links |
| `src/components/sections/DeploymentSection.tsx` | In-body links to `/docs` and `/comparison` |
| `src/components/sections/OutcomesSection.tsx` | In-body link to `/how-it-works` |
| `src/app/features/page.tsx` | In-body links to `/how-it-works` and `/docs` |
| `eslint.config.mjs`, `.gitignore` | Ignore the local `.tools/` skill checkout so `npm run lint` and git stay clean |

### Titles and descriptions after the change

| Page | Title (chars) | Description (chars) |
|---|---|---|
| `/` | 56 | 132 |
| `/features` | 38 | 134 |
| `/how-it-works` | 24 | 136 |
| `/use-cases` | 21 | 133 |
| `/pricing` | 19 | 114 |
| `/comparison` | 48 | 134 |
| `/docs` | 43 | 131 |
| `/about` | 17 | 134 |
| `/waitlist` | 24 | 129 |
| `/privacy` | 26 | 122 |
| `/terms` | 28 | 133 |

## Verification

- `npm run build` — succeeds; 16 static routes including `/robots.txt` and `/sitemap.xml`.
- `NODE_OPTIONS=--max-old-space-size=6144 npm run lint` — clean. (Without the `.tools/**` ignore, ESLint walks the cloned skill and runs out of memory.)
- TypeScript is part of `next build` and passes.
- Served `out/` on `127.0.0.1:4321` and checked the HTML for all 11 pages:
  - canonical present on every page and equal to its sitemap entry,
  - `og:url` equals canonical, `og:image` and `twitter:image` are `https://cognilogs.com/og.png` on every page,
  - every description ≤ 136 characters,
  - every page carries Organization + WebSite + SoftwareApplication, inner pages add BreadcrumbList,
  - `robots.txt` returns 200 `text/plain` with the sitemap line, `sitemap.xml` returns 200 `application/xml` with 11 URLs, `og.png` returns 200 `image/png`.
- `agentic_check.py` against the local build now reports `robots-reachable: PASS` (was `warn`).
- Browser check on `/` and `/features/`: no console errors, no horizontal overflow, inline links resolve to the right routes.
- Lab CWV on the local build stayed within the run-to-run noise of the live baseline (measured TBT ranged 60–1061 ms across repeated runs on this machine, live baseline 269 ms, so the metric is not stable here). HTML payload moved from 245,111 to 249,574 bytes (+1.8%) and the request count is unchanged at 28 — the additions are inline JSON-LD and text links, with no new JavaScript.

## Open dependency

`SITE_URL` defaults to `https://cognilogs.com`, but that domain does not serve the site yet (TLS handshake fails with `unrecognized name`). Until DNS and the GitHub Pages custom domain are set up, canonicals, the sitemap and the social image all point at a host that does not resolve.

Two ways to resolve:

1. **Finish the domain migration** — add the custom domain in GitHub Pages, create the DNS records, drop `basePath` in `next.config.ts`. Everything currently shipped then becomes correct as-is.
2. **Stay on the project URL for now** — set `NEXT_PUBLIC_SITE_URL=https://cognilogs.github.io/landing` in the Pages workflow. Canonicals, sitemap and OG image then match what is actually served, and the constant flips later.

Not done (deferred by scope): content pages, author/entity signals, `llms.txt`, TBT reduction, security headers, IndexNow.
