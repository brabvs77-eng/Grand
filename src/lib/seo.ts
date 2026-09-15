import { routing } from "@/i18n/routing";
import { SITE_URL } from "./constants";

/** ISO date for sitemap lastmod — bump when publishing content or SEO changes. */
export const SITEMAP_LAST_MODIFIED = "2026-09-15T21:30:00.000Z";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type SitemapPage = {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
};

/** Core site routes with crawl priority tiers (GEO + search best practice). */
export const SITEMAP_PAGES: SitemapPage[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/join", priority: 0.95, changeFrequency: "weekly" },
  { path: "/deposit", priority: 0.95, changeFrequency: "weekly" },
  { path: "/withdraw", priority: 0.95, changeFrequency: "weekly" },
  { path: "/download", priority: 0.9, changeFrequency: "weekly" },
  { path: "/rakeback", priority: 0.9, changeFrequency: "weekly" },
  { path: "/vip", priority: 0.85, changeFrequency: "weekly" },
  { path: "/bonuses", priority: 0.85, changeFrequency: "weekly" },
  { path: "/diamonds", priority: 0.85, changeFrequency: "weekly" },
  { path: "/tools", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.85, changeFrequency: "daily" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/data-policy", priority: 0.2, changeFrequency: "yearly" },
];

/** hreflang map including x-default for multilingual GEO. */
export function hreflangAlternates(path: string): Record<string, string> {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
  );
  return {
    ...languages,
    "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
  };
}

/**
 * AI / LLM crawlers explicitly allowed for GEO (Generative Engine Optimization).
 * Access control lives in robots.txt; llms.txt provides curated context.
 */
export const AI_CRAWLER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "FacebookBot",
  "CCBot",
  "cohere-ai",
  "Bytespider",
] as const;
