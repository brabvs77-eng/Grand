import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { publishedPosts } from "@/lib/blog";
import {
  SITEMAP_LAST_MODIFIED,
  SITEMAP_PAGES,
  hreflangAlternates,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const lastModified = new Date(SITEMAP_LAST_MODIFIED);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of SITEMAP_PAGES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: hreflangAlternates(page.path) },
      });
    }

    for (const post of publishedPosts) {
      const path = `/blog/${post.slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: hreflangAlternates(path) },
      });
    }
  }

  return entries;
}
