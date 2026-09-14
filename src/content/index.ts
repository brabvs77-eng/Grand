import type { ArticleBody, ArticleCollection } from "./types";
import { routing, type Locale } from "@/i18n/routing";

const loaders: Record<Locale, () => Promise<{ default: ArticleCollection }>> = {
  en: () => import("./articles/en"),
  ru: () => import("./articles/ru"),
  pt: () => import("./articles/pt"),
  es: () => import("./articles/es"),
  uz: () => import("./articles/uz"),
  fil: () => import("./articles/fil"),
};

export async function getArticleBody(
  locale: string,
  slug: string
): Promise<ArticleBody | null> {
  const key = (routing.locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  const { default: collection } = await loaders[key]();
  return collection[slug] ?? null;
}

export type { ArticleBody, ArticleSection } from "./types";
