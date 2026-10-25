import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * robots.txt must be served from the domain root to be honoured, so this file
 * only takes effect once the site is served at SITE_URL (see src/lib/site.ts).
 * All crawlers, including AI search and training crawlers, are allowed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
