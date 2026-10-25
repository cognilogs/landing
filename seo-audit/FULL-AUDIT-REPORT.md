# cognilogs — Full SEO Audit

- **URL audited:** https://cognilogs.github.io/landing/
- **Date:** 25 October 2026
- **Business type detected:** B2B SaaS (marketing site, early access, no blog)
- **Method:** claude-seo v2.5.0 (skills `seo-audit`, `seo-technical`, `seo-schema`, `seo-geo`, `seo-agentic`, `seo-sitemap`, `seo-content`, `seo-sxo`) run against the live deployment, plus raw-HTML and headless-Chrome measurements.
- **Limits:** Google API keys are not configured, so CrUX field data, Search Console indexation and GA4 traffic were **not measured**. PageSpeed Insights' anonymous quota was exhausted, so Core Web Vitals are **lab** measurements from an emulated Moto G-class profile (4× CPU slowdown, 1.6 Mbps, 150 ms RTT), not field data. Backlink and SERP data were not measured (no Moz/Bing/DataForSEO credentials).

> **Status (25 Oct 2026):** the Critical and High on-site findings below have been fixed in the repository. See [FIXES-APPLIED.md](FIXES-APPLIED.md) for what changed and how it was verified. The host/domain finding (item 9) still requires DNS work, and the content programme (item 11) was out of scope.
>
> **Re-audit:** the fixed build scores **80/100** against the 59 recorded here. The live site is still 59 because nothing has been deployed. See [RE-AUDIT.md](RE-AUDIT.md).

## SEO Health Score: 59 / 100

| Category | Weight | Score | Verdict |
|---|---|---|---|
| Technical SEO | 22% | 58 | Foundations are clean; discovery plumbing is missing |
| Content quality | 23% | 72 | Strong, differentiated writing; no authority signals |
| On-page SEO | 20% | 65 | Titles mostly good, descriptions overrun, no canonicals |
| Schema / structured data | 10% | 10 | Zero markup |
| Performance (lab CWV) | 10% | 78 | LCP and CLS good; main-thread work is the weak spot |
| AI search readiness | 10% | 55 | Server-rendered and readable, but no entity scaffolding |
| Images | 5% | 50 | No content images; no social preview image at all |

## What already works (do not change)

- **Static server-rendered HTML.** 1,565 words are in the raw response; the page is not a JS shell. Every AI crawler and every search bot sees the full copy.
- **Clean URL and status-code hygiene.** `http://` → `https://` is a single 301; a missing trailing slash is a single 301 to the slashed URL; unknown paths return a real `404`, not a soft redirect.
- **HTTPS with HSTS**, a valid certificate, no mixed content.
- **Titles and H1s are specific and non-duplicated** (11 unique titles, 11 unique H1s, sensible H1→H2 nesting).
- **Core Web Vitals are in good shape on lab data:** LCP 1.98 s, CLS 0.006, TTFB 380 ms on an emulated mid-range phone.
- **Fonts are self-hosted with `font-display: swap`** — 19 declarations, no third-party font requests.
- **Accessibility tree is clean** (822 nodes, 35 interactive, 0 unnamed interactives) and the Agent-UX heuristic scores 100/100.

## Critical issues (fix now)

### 1. No `robots.txt` anywhere
`https://cognilogs.github.io/robots.txt` → 404, and `.../landing/robots.txt` → 404. `sitemap_discovery.py` found no robots file and no sitemap at any common path. GitHub Pages serves a 404 HTML page in its place, which some crawlers read as a soft error. The site therefore declares no sitemap, no crawl policy, and no AI-usage stance.

### 2. No XML sitemap
Eleven real URLs, none listed anywhere. Discovery depends entirely on links from the homepage, which is a single hop but leaves no last-modified signal.

### 3. No canonical URL on any page
Zero `<link rel="canonical">` tags across all 11 pages. The site is served from a GitHub Pages **project subpath** (`github.io/landing/`), which is the duplicate-host scenario canonicals exist for. If `cognilogs.com` is ever pointed at the same content, Google gets two hosts with identical copy and no instruction.

### 4. No social preview image while the card type demands one
`twitter:card` is `summary_large_image` and `og:image` / `twitter:image` are absent. Every share on LinkedIn, X, Slack, WhatsApp and Discord renders a blank or logo-less card. This is a distribution problem, not a ranking problem, but it costs the most per minute of work to fix.

## High priority (this week)

### 5. Zero structured data (JSON-LD blocks: 0)
No Organization, WebSite, SoftwareApplication or BreadcrumbList markup. `render_page.py` confirms `structured_data.block_count: 0`. There is no entity for Google or an LLM to attach the brand, product, pricing or site name to.

### 6. Meta descriptions exceed the SERP snippet on 8 of 11 pages
Measured lengths: `/` 170, `/features` 209, `/use-cases` 249, `/pricing` 183, `/comparison` 195, `/docs` 182, `/waitlist` 182, `/how-it-works` 172. Google truncates around 155–160 characters, so the useful end of each sentence is cut.

### 7. Two titles work against the pages
- `/features`: `Product | cognilogs` (19 chars) — no keyword, and "Product" competes with nothing.
- `/comparison`: `Compare | cognilogs vs Zendesk AI, Freshdesk Freddy, Intercom Fin, and Agentforce` (81 chars) — truncated in results, which hides the competitor names that make the page valuable.

### 8. Open Graph and Twitter tags are identical on every page
`og:title` and `og:description` on `/features`, `/pricing`, `/docs` and `/about` are byte-identical to the homepage. Next.js shallowly overwrites nested metadata, so the root `openGraph` block wins on every route. Shared links all look like the homepage and `/pricing` never shows its own value proposition.

### 9. The site does not live on the brand domain
`cognilogs.com` resolves (GoDaddy nameservers) but does not serve this site; TLS handshakes for it fail with `unrecognized name`. Meanwhile the canonical home for the product is `cognilogs.github.io/landing/`. Consequences: the brand is not the indexed entity, `robots.txt` cannot be served at the domain root at all, and the `/landing` base path leaks into every URL.

### 10. Zero contextual internal links
The homepage contains 11 unique internal links: 7 in the nav, 4 in the footer. No in-body link exists between the homepage copy and `/features`, `/how-it-works`, `/comparison` or `/docs`, and anchor text is generic ("Product", "Compare"). Eleven pages with no contextual edges is a flat, weakly connected graph.

## Medium priority (this month)

### 11. No content surface beyond 11 marketing pages
No blog, glossary, integration pages or query-shaped landing pages. The site cannot rank for informational intent ("what is support automation", "Zendesk AI vs Intercom Fin", "local LLM for support tickets") because no page targets it. This is the largest ceiling on organic growth, and it is a content programme rather than a code fix.

### 12. No author, entity or freshness signals
No bylines, no team identities, no `datePublished` / `dateModified`, no `sameAs` links to LinkedIn, GitHub or X. For a pre-revenue product claiming local deployment, the missing "who is behind this" is the main E-E-A-T gap.

### 13. Main-thread work is the one weak Core Web Vital
Total Blocking Time 269 ms on the emulated mobile profile (4 long tasks) versus the 200 ms "good" line, from 10 JS chunks plus framer-motion. LCP and CLS are unaffected, but this is the INP risk to watch.

### 14. Every page ships ~245 KB of HTML
The homepage response is 245 KB, of which a large share is 99 inline SVG icons repeated in nav, footer and sections on all 11 pages. Well inside Googlebot's 2 MB fetch limit, but it inflates transfer and parse cost on mid-range phones.

### 15. No `llms.txt`
Absent. Google's own guidance says `llms.txt` is not needed for Search, so this is informational only — worth adding for non-Google agents, not worth ranking effort.

### 16. No security headers beyond HSTS
No CSP, `X-Content-Type-Options`, `Referrer-Policy` or `X-Frame-Options`. GitHub Pages does not allow custom response headers; this is only fixable by moving hosts or fronting the site with a proxy. Very light ranking weight; treat as a by-product of the domain change.

## Category detail

### Technical SEO — 58/100
| Check | Result |
|---|---|
| HTTPS + HSTS | pass |
| HTTP→HTTPS 301 | pass |
| Trailing-slash consistency | pass (single 301) |
| 404 returns 404 | pass |
| robots.txt | **fail** (404) |
| XML sitemap | **fail** (none) |
| Canonical tags | **fail** (0/11) |
| Meta robots / noindex conflicts | pass (none present, nothing blocked) |
| JS rendering | pass (SSR, 1,565 words in raw HTML) |
| Mobile viewport / responsive | pass |
| IndexNow | fail (not implemented) |

### On-page — 65/100
Titles: 9 of 11 within length and keyword-bearing. Descriptions: 3 of 11 within length. Canonicals: 0 of 11. OG: 0 of 11 per-page, no image. H1: 11 of 11, single H1 each. Internal links: nav/footer only.

### Schema — 10/100
0 JSON-LD, 0 microdata, 0 RDFa. Recommended set: `Organization` + `WebSite` + `SoftwareApplication` sitewide, `BreadcrumbList` on inner pages. `FAQPage` is **not** recommended — Google retired FAQ rich results for all sites on 7 May 2026; the on-page FAQ copy stays, the markup adds nothing.

### Performance — 78/100 (lab)
| Metric | Mobile emulated | Target |
|---|---|---|
| LCP | 1.98 s | ≤ 2.5 s |
| CLS | 0.006 | ≤ 0.1 |
| TBT | 269 ms | < 200 ms |
| TTFB | 380 ms | < 800 ms |
| Requests | 28 | — |
| Transfer | 460 KB | — |
LCP element is the hero paragraph (text), so no image dependency is involved.

### AI search readiness — 55/100
Strong: server-rendered copy, clear definitions, comparison tables, confidence-gate explanation. Missing: entities (no schema, no `sameAs`), no author or date signals, no `llms.txt`, no brand footprint on Reddit/YouTube/Wikipedia, no robots policy to state training vs search preferences.

## Not measured
CrUX field data, Search Console impressions/clicks/indexation, GA4 organic sessions, backlink profile, live SERP positions. All need credentials the project does not have.
