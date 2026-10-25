import type { Metadata } from "next";

/**
 * Canonical origin for the marketing site.
 *
 * Override with NEXT_PUBLIC_SITE_URL when the site is served from a different
 * origin or path (for example the GitHub Pages project URL
 * `https://cognilogs.github.io/landing`). No trailing slash.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cognilogs.com"
).replace(/\/+$/, "");

export const SITE_NAME = "cognilogs";

export const OG_IMAGE = `${SITE_URL}/og.png`;

/** Absolute URL for a site path. `"/"` stays `"/"`. */
export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  /** Site path with trailing slash, e.g. `/pricing/`. */
  path: string;
};

/**
 * Builds the full metadata block for a page: canonical, Open Graph and Twitter.
 *
 * Next.js shallowly merges nested metadata, so a page that defines any
 * `openGraph` field replaces the parent object entirely. Every page therefore
 * has to declare the complete set, which is what this helper exists for.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}: ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
