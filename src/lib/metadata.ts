import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "./constants";

export type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type PageMetadataInput = {
  locale: string;
  /** Route without locale prefix, e.g. `/about` or empty for home. */
  path: string;
  title: string;
  description: string;
  image?: OgImage;
  type?: "website" | "article";
  robots?: Metadata["robots"];
};

/** Build a localized URL for a route segment shared across locales. */
export function localizedPath(locale: string, path: string): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  return normalized ? `/${locale}${normalized}` : `/${locale}`;
}

function defaultOgImage(locale: string, alt: string): OgImage {
  return {
    url: `${SITE_URL}/${locale}/og.png`,
    width: 1200,
    height: 630,
    alt,
  };
}

/** Canonical, hreflang, Open Graph and Twitter metadata for a page. */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  image,
  type = "website",
  robots,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${localizedPath(locale, path)}`;
  const ogImage = image ?? defaultOgImage(locale, title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}${localizedPath(l, path)}`])
        ),
        "x-default": `${SITE_URL}${localizedPath(routing.defaultLocale, path)}`,
      },
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    ...(robots ? { robots } : {}),
  };
}
