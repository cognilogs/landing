# Technical SEO — findings

## Crawlability

| Check | Evidence | Status |
|---|---|---|
| robots.txt at domain root | `https://cognilogs.github.io/robots.txt` → 404 | fail |
| robots.txt at project path | `https://cognilogs.github.io/landing/robots.txt` → 404 | fail |
| Sitemap declared or discoverable | `sitemap_discovery.py`: `declared: []`, `found: []`; `/sitemap.xml`, `/sitemap_index.xml`, `/sitemap-index.xml`, `/wp-sitemap.xml` all 404 | fail |
| Crawl depth | All 11 URLs are one click from the homepage (nav + footer) | pass |
| Crawl budget | 11 URLs; no parameters, no pagination | pass |
| AI crawler policy | None declared anywhere (no robots.txt). Nothing is blocked, so GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot and Google-Extended are all implicitly allowed | unmanaged |

## Indexability

| Check | Evidence | Status |
|---|---|---|
| Canonical tag | `rel="canonical"` count = 0 on all 11 pages | fail |
| Meta robots | No `noindex` anywhere; nothing accidentally blocked | pass |
| Duplicate hosts | Content is reachable only under `github.io/landing/` today, but `cognilogs.com` resolves and is not serving the site — two hosts with no canonical instruction once it does | warn |
| Thin content | Lowest page is `/use-cases` at 630 words, `/how-it-works` 671; all pages are substantive | pass |
| Pagination / hreflang | Not applicable (single-language, no paginated listings) | n/a |

## Security

| Check | Evidence | Status |
|---|---|---|
| HTTPS | Valid certificate, HSTS `max-age=31556952` | pass |
| Mixed content | None found in rendered page | pass |
| Content-Security-Policy | Absent | fail (host-limited) |
| X-Content-Type-Options / Referrer-Policy / X-Frame-Options | Absent | fail (host-limited) |
| Back-button hijacking | No `history.pushState`-based traps found | pass |

GitHub Pages does not let a project set response headers. These four checks are only fixable by moving the site behind a proxy or to a host with `_headers` support — treat them as a by-product of the domain migration, not a task of their own.

## URL structure

| Check | Evidence | Status |
|---|---|---|
| Descriptive, hyphenated URLs | `/how-it-works/`, `/use-cases/`, `/comparison/` | pass |
| Trailing slash consistency | `/landing/features` → 301 → `/landing/features/` (single hop) | pass |
| Redirect chains | Max 1 hop measured on both http→https and slash normalisation | pass |
| URL length | Longest is `/landing/how-it-works/`, well under 100 chars | pass |
| Subpath hosting | Every URL carries `/landing`, a hosting artefact rather than a site hierarchy | warn |

## Mobile and page experience

| Check | Evidence | Status |
|---|---|---|
| Viewport meta | `width=device-width, initial-scale=1` | pass |
| Responsive layout | Rendered at 390×844 with no horizontal scroll | pass |
| Mobile/desktop parity | Same titles, descriptions, robots directives and JSON-LD (none) on both | pass |
| Intrusive interstitials | None; the waitlist dialog is user-triggered only | pass |
| Touch targets | Interactive nav items are ≥ 40 px tall | pass |

## JavaScript rendering

- `agentic_check.py` → `server-rendered: pass`, `words_without_js: 1565`, `js_shell_marker: false`.
- `render_page.py` → `is_spa: false`; rendered and raw HTML carry the same primary copy.
- Consequence: content is fully visible to non-JS fetchers. Structured data injected by JS is **not** an issue today because there is none; when JSON-LD is added it should be server-rendered for the same reason.

## 404 behaviour

`https://cognilogs.github.io/landing/nope/` → HTTP 404 with the custom branded page. `agentic_check.py` → `http-404: pass`. No soft-404 pattern.

## IndexNow

Not implemented. Only meaningful for Bing/Yandex/Naver and requires a host that can serve a key file; low priority for 11 pages.
