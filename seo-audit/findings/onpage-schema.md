# On-page and schema — findings

## Title tags (measured)

| Page | Title | Length | Verdict |
|---|---|---|---|
| `/` | cognilogs \| Support automation that runs in your network | 56 | good |
| `/features` | Product \| cognilogs | 19 | **weak** — no keyword, wastes the strongest commercial page |
| `/how-it-works` | How it works \| cognilogs | 24 | acceptable, thin on keywords |
| `/use-cases` | Use cases \| cognilogs | 21 | acceptable |
| `/pricing` | Pricing \| cognilogs | 19 | acceptable |
| `/comparison` | Compare \| cognilogs vs Zendesk AI, Freshdesk Freddy, Intercom Fin, and Agentforce | 81 | **too long** — truncated before the competitor names |
| `/docs` | Deployment and operations guide \| cognilogs | 43 | good |
| `/about` | About \| cognilogs | 17 | acceptable |
| `/waitlist` | Early access \| cognilogs | 24 | good |
| `/privacy` | Privacy Policy \| cognilogs | 26 | good |
| `/terms` | Terms of Service \| cognilogs | 28 | good |

## Meta descriptions (measured)

8 of 11 exceed the ~155–160 character snippet:

| Page | Length |
|---|---|
| `/use-cases` | 249 |
| `/features` | 209 |
| `/comparison` | 195 |
| `/pricing` | 183 |
| `/docs` | 182 |
| `/waitlist` | 182 |
| `/how-it-works` | 172 |
| `/` | 170 |
| `/about` | 164 |
| `/terms` | 133 |
| `/privacy` | 122 |

## Headings

11 pages, 11 single H1s, no duplicates, no skipped levels found in the sampled pages. Homepage: 1 H1 + 5 H2. `/features`: 1 H1 + 8 H2. `/comparison`: 1 H1 + 4 H2 with a comparison table. Heading structure is a strength, not a problem.

## Social metadata

- `og:title`, `og:description`, `og:site_name`, `og:type` present on every page — but **identical on every page**, inherited from the root layout.
- `twitter:card = summary_large_image`, `twitter:title`, `twitter:description` present.
- `og:image` and `twitter:image`: **absent**. No `og:url`. No `og:locale`.
- Cause: Next.js shallowly overwrites nested metadata, so the root `openGraph` object wins on every route that does not define its own.

## Internal linking

Homepage anchor inventory (unique):

```
/landing/features/      «Product»
/landing/how-it-works/  «How it works»
/landing/use-cases/     «Use cases»
/landing/pricing/       «Pricing»
/landing/comparison/    «Compare»
/landing/docs/          «Docs»
/landing/about/         «About»
/landing/waitlist/      «Waitlist»
/landing/privacy/       «Privacy»
/landing/terms/         «Terms»
mailto:team@cognilogs.com
```

Eleven links, all from nav and footer, none from editorial copy, and anchor text is generic. The homepage copy mentions evidence, confidence gates, RCA drafting and SLA tracking — all of which have dedicated pages that are never linked from the body.

## Structured data

| Format | Count |
|---|---|
| JSON-LD | 0 |
| Microdata | 0 |
| RDFa | 0 |

`render_page.py` → `structured_data: {block_count: 0, processed_count: 0, blocks: []}`.

### Recommended markup

1. **`Organization`** (sitewide): `name`, `url`, `logo`, `description`, `email`, `sameAs` (only for profiles that exist — do not invent).
2. **`WebSite`** (sitewide): `name`, `url`, `publisher` → Organization. Do **not** add `potentialAction: SearchAction` — there is no site search.
3. **`SoftwareApplication`** (sitewide or `/` + `/features`): `name`, `applicationCategory: BusinessApplication`, `operatingSystem` (self-hosted), `description`, `featureList` keyed to the real capability list, `offers` only if the ₹10 floor is presented as a public price.
4. **`BreadcrumbList`** on inner pages — gives Google a site hierarchy it currently has to infer.

### Explicitly not recommended

- **`FAQPage`** — Google retired FAQ rich results for all sites on 7 May 2026. The homepage and `/pricing` FAQ copy should stay; the markup adds no surface.
- **`HowTo`** (retired Sept 2023), **`ClaimReview`** (no rich result since June 2025), **`EstimatedSalary` / `LearningVideo` / `CourseInfo`** (retired June 2025), **`SpecialAnnouncement`** (deprecated July 2025).
- **`Product` with `AggregateRating` or `Review`** — the project has no verified customer reviews, and inventing them is both a policy violation and a credibility risk.
