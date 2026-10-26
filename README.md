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
6. Deploy.

Every push to `main` deploys production. Pull requests get preview deployments.

If the custom domain is not connected yet, set `NEXT_PUBLIC_SITE_URL` to the production `*.pages.dev` URL instead, then change it to `https://cognilogs.com` and redeploy once the domain is live.

### CLI deploy

```sh
npm run build
npx wrangler pages deploy out --project-name cognilogs
```

The `wrangler.jsonc` file also points Pages at `./out` for local `wrangler pages` commands. If you use a different Pages project name, update `name` in `wrangler.jsonc`.

### Custom domain

1. In the Pages project, open **Custom domains** → **Set up a domain**.
2. Add `cognilogs.com`.
3. If the domain is on Cloudflare DNS, the required records are created automatically.
4. Add a **Redirect Rule** in the `cognilogs.com` zone to send `www.cognilogs.com/*` to `https://cognilogs.com/:splat` with a `301`.
5. Enable **Always Use HTTPS** in SSL/TLS → Edge Certificates.

If the domain is not on Cloudflare DNS, move the nameservers to Cloudflare first. Cloudflare Pages custom domains and apex records work best with Cloudflare DNS.

### Bot access

The site intentionally allows every crawler:

- `src/app/robots.ts` emits `User-Agent: *` with `Allow: /` and the sitemap URL.
- `public/_headers` does not add `X-Robots-Tag` or any bot challenge.
- Cloudflare preview URLs receive `X-Robots-Tag: noindex` from Cloudflare itself. Production URLs do not.

To keep it that way in Cloudflare:

- Turn **off** Bot Fight Mode and Super Bot Fight Mode.
- Turn **off** **Block AI bots**.
- Do **not** enable AI Crawl Control or Managed robots.txt.
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
