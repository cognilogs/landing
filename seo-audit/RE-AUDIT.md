# Re-audit — 25 October 2026

Second pass with the fixes in the working tree. Two targets are reported, because the fixes are built but not deployed.

| Target | What it is | Score |
|---|---|---|
| **Local build** (`out/`, served on 127.0.0.1:4321) | Exactly what ships on the next deploy | **80 / 100** (+21) |
| **Live site** (`cognilogs.github.io/landing`) | Unchanged, pre-fix code | **59 / 100** (no change) |

Scoring uses the claude-seo category weights (Technical 22, Content 23, On-page 20, Schema 10, Performance 10, AI readiness 10, Images 5). The category scores are a synthesis of the checks below, not a single tool output.

## Category movement

| Category | Weight | Before | After | Why |
|---|---|---|---|---|
| Technical SEO | 22% | 58 | 85 | robots.txt, sitemap and canonicals now exist and validate |
| Content quality | 23% | 72 | 72 | No content was written in this pass |
| On-page SEO | 20% | 65 | 88 | Titles, descriptions, OG/Twitter and canonicals all pass; internal linking only partly addressed |
| Schema | 10% | 10 | 92 | Organization + WebSite + SoftwareApplication + BreadcrumbList, 14/14 structural checks |
| Performance | 10% | 78 | 78 | Not meaningfully re-measurable pre-deploy (see caveat) |
| AI readiness | 10% | 55 | 65 | Entity graph and explicit crawl policy; still no author/date or off-site presence |
| Images | 5% | 50 | 80 | Social preview image exists and is wired everywhere |

## Evidence for the re-audit

### Crawlability and indexability
- `sitemap_discovery.py` (local): `declared: ["https://cognilogs.com/sitemap.xml"]`, `found: [{url: http://127.0.0.1:4321/sitemap.xml, kind: "urlset", valid: true}]`. Previously: `declared: []`, `found: []`.
- `xmllint --noout out/sitemap.xml` — well-formed, 11 `<url>` entries.
- `out/robots.txt` returns 200 `text/plain` and names the sitemap; `agentic_check.py` flipped `robots-reachable` from `warn` to `PASS`, and `robots-user-agents` to `PASS`.
- Canonicals: 11/11 pages, each equal to its sitemap entry and to its own `og:url` (script-verified across the built HTML).

### Structured data
`render_page.py` against the local build: `structured_data.block_count: 1`, 2,072 bytes, types `ContactPoint, ImageObject, Organization, SoftwareApplication, WebSite`. Previously `block_count: 0`.

Structural validation, 14/14:
Organization (name, url, logo, contactPoint), WebSite (name, url, publisher → `#organization`), SoftwareApplication (name, applicationCategory, operatingSystem, featureList), BreadcrumbList (sequential positions, absolute URLs), and every `@id` absolute.

### Metadata
- All 11 descriptions ≤ 136 characters (was 8 of 11 over the limit, worst 249).
- All 11 titles ≤ 56 characters; `/features` is now keyword-bearing, `/comparison` fits.
- Every page has its own `og:title`, `og:description`, `og:url`, `og:image` and `twitter:image`; previously all pages inherited the homepage's.

### Agent readiness
`agentic_check.py` (local): `P0: {info: 1, pass: 2}`, `P1: {info: 3, pass: 2}`, no P0 failures or warnings. `server-rendered: PASS`, `http-404: PASS`.
`agent_ux_check.py` could not render the localhost target (Playwright refused the local origin), so its 0–100 score is **not measured** this pass; the HTML half still reported 34 real anchors, 12 landmarks, 0 unnamed interactive nodes. The pre-fix live run scored 100.

### Internal linking
Unique internal links per page rose slightly, but contextual body links exist on only two pages:

| Page | Unique internal | Contextual body links |
|---|---|---|
| `/` | 13 | 3 |
| `/features/` | 11 | 2 |
| other 9 pages | 11–15 | 0 |

This is the main reason On-page stops at 88 rather than higher.

### Performance
Not re-measured comparably. The local server is cache-warm localhost with no network latency, so it reported LCP 204–608 ms and TBT 0–36 ms, which cannot be compared with the live baseline (LCP 1.98 s, TBT 269 ms over an emulated 1.6 Mbps / 4× CPU profile). Three repeated runs against the *unchanged* live page also swung between 252 and 463 ms TBT, so this machine's measurements are too noisy to support a claim either way.

The deterministic change: HTML 245,111 → 249,574 bytes (+1.8%), request count 28 unchanged, no new JavaScript.

## What still keeps it at 80

1. **Canonicals point at a host that does not serve the site.** `cognilogs.com` still fails TLS. Every canonical, the sitemap and the OG image reference it. This is the single largest remaining risk.
2. **No security headers** (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`) — GitHub Pages cannot set them.
3. **Internal linking is thin** on nine of eleven pages.
4. **No content surface** beyond eleven marketing pages: no informational or comparison-adjacent pages to rank for non-brand queries.
5. **No author, date or entity-presence signals** off-site (no Reddit, YouTube, LinkedIn, Wikipedia).
6. **No `llms.txt`** — optional, Google ignores it.
7. **No `IndexNow`.**

## If it deploys before the domain is ready

Deploying to the project URL as-is puts `robots.txt` at `/landing/robots.txt` (not honoured at the root) and points canonicals, the sitemap and the social image at a host that fails TLS. That state would score **roughly 69**, not 80 — worse than it looks in the build, because the discovery signals would be declared but unreachable.

Setting `NEXT_PUBLIC_SITE_URL=https://cognilogs.github.io/landing` in the Pages workflow avoids that and keeps the build at 80 until DNS lands.
