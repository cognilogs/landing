import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-10-25");

const pages: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/features/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/how-it-works/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/use-cases/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/comparison/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/docs/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/waitlist/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
