import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { publishedPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

const pages = [
  "",
  "/join",
  "/deposit",
  "/withdraw",
  "/rakeback",
  "/vip",
  "/bonuses",
  "/diamonds",
  "/tools",
  "/download",
  "/faq",
  "/blog",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of pages) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${SITE_URL}/${l}${page}`])
          ),
        },
      });
    }

    for (const post of publishedPosts) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${SITE_URL}/${l}/blog/${post.slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
