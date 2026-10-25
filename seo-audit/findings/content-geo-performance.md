# Content, GEO and performance — findings

## Content quality

**Strengths.** The copy is specific and evidence-led rather than generic SaaS filler: it names the confidence threshold (0.85), the SLA check interval (15 minutes), the escalation rule (three notifications before a manager is involved), the ₹10 floor, and the deployment constraint (customer-operated servers). Every page has a distinct argument. `/comparison` is the strongest asset: a sourced table against Zendesk AI, Freshdesk Freddy, Intercom Fin and Agentforce, which is exactly the shape that wins both SERP and AI citations.

**Page depth.**

| Page | Words |
|---|---|
| `/` | 1,556 |
| `/terms` | 1,410 |
| `/comparison` | 1,264 |
| `/features` | 1,180 |
| `/privacy` | 1,111 |
| `/docs` | 1,104 |
| `/about` | 728 |
| `/pricing` | 711 |
| `/waitlist` | 709 |
| `/how-it-works` | 671 |
| `/use-cases` | 630 |

No page is thin by SaaS standards, but `/use-cases` and `/how-it-works` sit at the bottom and carry the most commercial intent after the homepage.

**E-E-A-T gaps.**
- No author bylines anywhere, including `/about`, which describes an origin story without naming a person.
- No `datePublished` / `dateModified`, no visible "last updated" stamp.
- No `sameAs` entity links (LinkedIn, GitHub, X). `team@cognilogs.com` is the only contact surface.
- No external citations on `/`, `/features` or `/docs`; `/comparison` is the only page that sources its claims.
- Certification is correctly described as "in progress" rather than claimed — keep that discipline.

**Coverage gap.** Eleven marketing pages, zero informational pages. There is no page that can answer "what is support automation", "how does a confidence gate work", "Zendesk AI vs Intercom Fin", "local LLM for customer support" or "RCA automation for support tickets". Brand queries are the only ones this site can currently win, and the brand is new.

## AI search readiness (GEO)

**Technical access.** `agentic_check.py`:
- `server-rendered: pass` — 1,565 words without JavaScript. GPTBot and PerplexityBot, which commonly fetch raw HTML, see the whole page.
- `robots-reachable: warn` — 404. No training-vs-search preference is declared, and nothing is blocked, so all AI crawlers are implicitly allowed.
- No `llms.txt` (`info`, not a failure — Google Search ignores it).
- Real 404s, no soft-404 trap.

**Citability.** The pages already do several things AI answers reward: definitions in the first screen ("cognilogs is a local-first support agent for any ticketing system…"), a comparison table, explicit thresholds and intervals, and question-shaped FAQ headings. What is missing is what makes a passage attributable:
- no entity (Organization/SoftwareApplication) for the model to attach the brand to,
- no author or date signals, so freshness cannot be judged,
- no external corroboration anywhere — no Reddit, YouTube, Wikipedia, LinkedIn or press presence.

**Assessment.** Content-ready, authority-empty. The gap is off-site and entity-level, not on-page prose.

## Performance (lab, not field)

Emulated mid-range Android (390×844, 3× DPR, 4× CPU slowdown, 1.6 Mbps down / 750 kbps up, 150 ms RTT), cold load, measured over Chrome DevTools Protocol:

| Metric | Homepage | `/comparison` | Target |
|---|---|---|---|
| LCP | 1.98 s (hero paragraph) | 0.96 s (lede paragraph) | ≤ 2.5 s |
| CLS | 0.006 | 0 | ≤ 0.1 |
| TBT | 269 ms | 18 ms | < 200 ms |
| TTFB | 380 ms | 293 ms | < 800 ms |
| DOMContentLoaded | 2.15 s | — | — |
| Load | 2.48 s | — | — |
| Requests | 28 | 31 | — |
| Transfer | 460 KB | 95 KB | — |
| HTML payload | 245 KB | 213 KB | — |

**Reading.** LCP and CLS comfortably pass; LCP is a text node, so there is no hero-image risk. The single soft failure is TBT on the homepage (269 ms, 4 long tasks), driven by 10 JS chunks plus framer-motion hydration. That is an INP risk on slower devices rather than a current failure — FID no longer exists as a metric and was not measured.

**Payload.** 245 KB of HTML per page, with 99 inline SVG icons on the homepage repeated through nav, footer and section components on all 11 pages. Well inside Googlebot's 2 MB HTML fetch limit, so this is a mobile transfer/parse cost, not an indexing blocker.

**Fonts.** Self-hosted Inter Variable + JetBrains Mono, 19 `font-display: swap` declarations, 2 font requests, both preloaded by the CSS. No third-party font origin.

## Not measured

- CrUX field Core Web Vitals (no Google API key; PageSpeed Insights anonymous quota exhausted).
- Search Console indexation and query data.
- GA4 organic traffic.
- Backlink profile (no Moz / Bing / DataForSEO credentials). A new `github.io` subpath site should be assumed to have close to zero referring domains.
- Live SERP positions.
