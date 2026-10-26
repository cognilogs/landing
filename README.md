# cognilogs website

Marketing site for cognilogs. Built with Next.js App Router and exported as a fully static site.

## Local development

```sh
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Production build

```sh
npm run build
```

Next.js writes the static site to `out/`. There is no Node server at runtime.

## Analytics (PostHog)

The site uses PostHog for client-side product analytics. It tracks:

- `$pageview` on the initial load and on every client-side route change
- `link_clicked` for every link, with the link text, destination, section, and page
- `button_clicked` for every button, menu toggle, FAQ disclosure, and `role="button"` control
- `waitlist_dialog_opened` when the early-access dialog opens
- `waitlist_signup_started`, `waitlist_signup`, and `waitlist_signup_failed` around the waitlist form
- `pricing_estimate_changed` and `confidence_threshold_changed` when those sliders are released

No email address or other form value is sent to PostHog. The tracking code lives in `src/components/analytics/PostHogAnalytics.tsx` and `src/lib/analytics.ts`, and is mounted once in `src/app/layout.tsx`.

### Configure it

1. Create a PostHog project at [posthog.com](https://posthog.com) or open an existing one.
2. In the project, open **Settings** → **Project** → **Project API key**. Copy the `phc_...` key. This key is public and safe to ship in client-side code. Do not use a personal API key.
3. Copy `.env.example` to `.env.local` and fill in the key:

   ```sh
   cp .env.example .env.local
   ```

   ```text
   NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_key
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

   Use `https://eu.i.posthog.com` if the PostHog project is in the EU region.
4. Restart the dev server. Open the site and check **Activity** → **Live events** in PostHog. Click through a few pages and buttons; the events should appear within a few seconds.

### Cloudflare Pages

Add both variables under **Settings** → **Environment variables** for **Production** and **Preview**:

```text
NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

`NEXT_PUBLIC_*` values are inlined into the static bundle at build time. Changing either value requires a new deployment. If the key is missing or empty, analytics is a no-op and the site still builds and runs normally.

If a value is not inlined, change its type from **Text** to **Secret** and redeploy. Cloudflare Pages has a known issue where plain-text dashboard variables are not passed to the build when the repository contains a `wrangler.jsonc` or `wrangler.toml` with `pages_build_output_dir`. This repository intentionally does not commit one.

### Custom event IDs

The global click capture already records every link and button. For stable, human-readable IDs on specific controls, add a `data-analytics` attribute:

```tsx
<button data-analytics="hero-waitlist">Join the waitlist</button>
```

The event will include `analytics_id: "hero-waitlist"`. You can also add `data-analytics-label` to override the captured text, and `data-analytics-source` to record where the control lives.

## Deploy to Cloudflare Pages

### Git integration (recommended)

1. Push the repository to GitHub.
2. In the Cloudflare dashboard, open **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
3. Select the `cognilogs/landing` repository.
4. Use these build settings:
   - **Production branch:** `main`
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** leave blank
5. Add these environment variables for Production and Preview:
   - `NODE_VERSION` = `22` (optional; `.nvmrc` already pins Node 22)
   - `NEXT_PUBLIC_SITE_URL` = `https://cognilogs.com`
   - `NEXT_PUBLIC_POSTHOG_KEY` = your PostHog project API key (`phc_...`)
   - `NEXT_PUBLIC_POSTHOG_HOST` = `https://us.i.posthog.com` (or the EU host)
6. Deploy.

Every push to `main` deploys production. Pull requests get preview deployments.

If the custom domain is not connected yet, set `NEXT_PUBLIC_SITE_URL` to the production `*.pages.dev` URL instead, then change it to `https://cognilogs.com` and redeploy once the domain is live.

### CLI deploy

```sh
npm run build
npx wrangler pages deploy out --project-name landing
```

The Pages project is named `landing`. Do not commit a `wrangler.jsonc` or `wrangler.toml` with `pages_build_output_dir`: Cloudflare treats that file as the project's configuration source of truth and stops passing plain-text dashboard variables to the build step.

### Custom domain

1. In the Pages project, open **Custom domains** → **Set up a domain**.
2. Add `cognilogs.com` and wait for it to become active.
3. If the domain is on Cloudflare DNS, the required records are created automatically. If it is not, move the nameservers to Cloudflare first. Cloudflare Pages custom domains and apex records work best with Cloudflare DNS.
4. Enable **Always Use HTTPS** in SSL/TLS → Edge Certificates.
5. If you do not already have a `www` record, add a proxied `A` record:
   - **Type:** `A`
   - **Name:** `www`
   - **IPv4 address:** `192.0.2.1`
   - **Proxy status:** Proxied
   - `192.0.2.1` is Cloudflare's placeholder address for redirect-only hostnames. It does not point to a server.

   If `www` already exists as a proxied `CNAME` to `cognilogs.com`, keep it. Do not add the placeholder `A` record. The redirect rule runs before the request reaches Pages, so the CNAME target does not matter for a redirect-only setup.
6. Create a **Redirect Rule** in the `cognilogs.com` zone:
   - Go to **Rules** → **Overview** → **Create rule** → **Redirect Rule**.
   - **Wildcard pattern:** `https://www.cognilogs.com/*`
   - **Target URL:** `https://cognilogs.com/${1}`
   - **Status code:** `301`
   - **Preserve query string:** enabled
7. Deploy the rule and test both the root and a subpath:
   ```sh
   curl -I https://www.cognilogs.com/
   curl -I https://www.cognilogs.com/pricing/
   ```

`www` is a redirect to the apex, not a second copy of the site. Keep `NEXT_PUBLIC_SITE_URL` set to `https://cognilogs.com` so canonicals and the sitemap stay on one host.

### Bot access

The site intentionally allows every crawler:

- `src/app/robots.ts` emits `User-Agent: *` with `Allow: /` and the sitemap URL.
- `public/_headers` does not add `X-Robots-Tag` or any bot challenge.
- Cloudflare preview URLs receive `X-Robots-Tag: noindex` from Cloudflare itself. Production URLs do not.

To keep it that way in Cloudflare:

- Open **Security** → **Settings** → **Bot traffic** → **Configure AI bot policies** and set **Search**, **Agent**, and **Training** to **Allow (do not block)**.
- Turn **off** Bot Fight Mode and Super Bot Fight Mode.
- Turn **off** Bot Preference Sync and Managed robots.txt.
- Do **not** enable AI Crawl Control or the legacy **Block AI bots** rule.
- Set **Security Level** to **Essentially Off** if you truly want every bot, including scrapers, to pass.
- Do not enable **Under Attack Mode** or a WAF rule that challenges crawlers.
- If **Browser Integrity Check** is on, turn it off.

These settings trade bot protection for open access. Confirm with:

```sh
curl -A "Googlebot" -I https://cognilogs.com/
curl -A "GPTBot" -I https://cognilogs.com/
curl https://cognilogs.com/robots.txt
```

### Moving off GitHub Pages

- The GitHub Pages workflow has been removed from `.github/workflows/`.
- In the GitHub repository, open **Settings** → **Pages** → **Source** and set it to **None**.
- Remove any old GitHub Pages custom domain or environment once Cloudflare is live.
