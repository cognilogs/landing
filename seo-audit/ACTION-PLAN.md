# Action plan — cognilogs

Ordered by impact per unit of work. Each item states what changes, why it matters, and how to confirm it worked.

## Phase 1 — Discovery plumbing (Critical, same day)

| # | Change | Why | Done when |
|---|---|---|---|
| 1 | Add `app/robots.ts` — allow all crawlers, declare the sitemap, state AI search vs training preference | `robots.txt` currently 404s; nothing is declared and the sitemap is unannounced | `/robots.txt` returns 200 and names the sitemap URL |
| 2 | Add `app/sitemap.ts` — 11 URLs, `lastModified`, priority and `changeFrequency` per page type | No sitemap exists at any conventional path | `/sitemap.xml` returns 200, valid XML, 11 `<url>` entries |
| 3 | Add self-referencing canonical to every page via a shared metadata helper | 0/11 pages declare a canonical while the site is served from a `github.io` subpath | Every page's `<head>` carries one absolute `<link rel="canonical">` |
| 4 | Create a real 1200×630 social image and wire `og:image` + `twitter:image` | `summary_large_image` with no image means every share renders blank | Sharing the URL in Slack/LinkedIn previews the image |

**GitHub Pages caveat:** `robots.txt` is only honoured at the **domain root** (`cognilogs.github.io/robots.txt`), which a project site cannot write. Item 1 ships the file so it is correct the moment the site moves to `cognilogs.com`; until then, submitting `/landing/sitemap.xml` directly in Search Console covers discovery.

## Phase 2 — Metadata quality (High, this week)

| # | Change | Why | Done when |
|---|---|---|---|
| 5 | Per-page `openGraph` and `twitter` blocks (title, description, url, image) | All 11 pages currently inherit the homepage's OG tags | Each page has its own `og:title`, `og:description`, `og:url` |
| 6 | Trim 8 meta descriptions to ≤ 155 characters | 8 of 11 are cut off in SERPs | Measured lengths all ≤ 158 |
| 7 | Rewrite `/features` title (19 chars, no keyword) and shorten `/comparison` title (81 chars) | One wastes a ranking asset, the other is truncated | Both ≤ 60 chars and keyword-bearing |
| 8 | Add sitewide JSON-LD: `Organization`, `WebSite`, `SoftwareApplication` (+ `BreadcrumbList` on inner pages) | 0 structured data today; no entity for Search or LLMs to attach to | Rich Results Test passes with 0 errors |
| 9 | Add 3–5 contextual in-body links per page with descriptive anchor text | Internal graph is nav/footer only; anchor text is generic | Homepage links to `/features`, `/comparison`, `/docs` from the copy |

## Phase 3 — Domain and hosting (High, needs your decision)

| # | Change | Why | Done when |
|---|---|---|---|
| 10 | Serve the site at `cognilogs.com` (CNAME + DNS, drop the `/landing` base path) | The brand domain resolves but does not serve the site; TLS fails. Canonical host is a `github.io` subpath, which also makes root-level `robots.txt` impossible | `https://cognilogs.com/` serves the site and every canonical points there |

This is a config + DNS change I can prepare, but it needs your DNS access and a decision on apex vs `www`.

## Phase 4 — Content surface (Medium, month 2)

| # | Change | Why | Done when |
|---|---|---|---|
| 11 | Publish 6–8 query-shaped pages (what is support automation, local-first vs cloud support AI, Zendesk AI vs Intercom Fin vs cognilogs, confidence gating, RCA automation, local model choices) | 11 marketing pages cannot cover informational queries; the current ceiling is brand search only | Each page targets one query cluster and is linked from `/docs` or the footer |
| 12 | Add author/entity signals: named founders on `/about` with `sameAs` links, `datePublished`/`dateModified` on content pages | No bylines, no dates, no entity links — the main E-E-A-T gap for a pre-revenue vendor | `/about` names people, JSON-LD links them out |
| 13 | Add `llms.txt` | Optional; Google ignores it, non-Google agents may use it | `/llms.txt` returns 200 with H1 + summary + links |

## Phase 5 — Performance and monitoring (Medium, ongoing)

| # | Change | Why | Done when |
|---|---|---|---|
| 14 | Cut main-thread work (TBT 269 ms > 200 ms): lazy-load framer-motion below the fold, split the heaviest chunks | INP risk on mid-range Android | Mobile TBT < 200 ms on repeat runs |
| 15 | Reduce duplicated inline SVG weight (245 KB HTML/page) by sharing icon components | Transfer and parse cost on every page | HTML response < 150 KB |
| 16 | Set up Search Console + Bing Webmaster, submit the sitemap, then re-run this audit with Google API keys for real CrUX data | Field data is the only way to confirm CWV in production | CrUX and GSC sections populated in the next audit |
| 17 | Capture a drift baseline (`seo drift baseline`) | Catch regressions as pages change | Baseline file committed, `drift compare` clean |

## Do not do

- **`FAQPage` markup.** Google retired FAQ rich results for all sites on 7 May 2026. The on-page FAQ copy is good; the markup buys nothing.
- **`HowTo`, `SpecialAnnouncement`, `ClaimReview`, `EstimatedSalary`.** Deprecated or retired; no rich-result surface.
- **Keyword-stuffing the existing copy.** The writing is the site's strongest asset; the gap is plumbing and surface area, not keyword density.
