/**
 * Cloudflare Pages Function for the root route.
 *
 * The site is a static export, so there is no Next.js middleware to negotiate
 * a locale. This runs at the edge for `/` only (see `public/_routes.json`) and
 * sends the visitor to the best matching localised home page.
 */

const LOCALES = ["pt", "es", "en", "uz", "ru", "fil"] as const;
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE = "NEXT_LOCALE";

type Locale = (typeof LOCALES)[number];

/** Language subtags that should resolve to a locale other than their prefix. */
const LANGUAGE_ALIASES: Record<string, Locale> = {
  tl: "fil",
  fil: "fil",
  gl: "es",
  ca: "es",
  uz: "uz",
  kaa: "uz",
};

/** Fallback when the browser sends no usable Accept-Language header. */
const COUNTRY_LOCALES: Record<string, Locale> = {
  BR: "pt",
  PT: "pt",
  AO: "pt",
  MZ: "pt",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  BO: "es",
  PY: "es",
  UY: "es",
  GT: "es",
  CR: "es",
  DO: "es",
  PA: "es",
  UZ: "uz",
  RU: "ru",
  BY: "ru",
  KZ: "ru",
  KG: "ru",
  TJ: "ru",
  AM: "ru",
  AZ: "ru",
  MD: "ru",
  GE: "ru",
  PH: "fil",
};

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function resolveTag(tag: string): Locale | null {
  const normalized = tag.toLowerCase();
  if (isLocale(normalized)) return normalized;

  const primary = normalized.split("-")[0];
  if (LANGUAGE_ALIASES[primary]) return LANGUAGE_ALIASES[primary];
  if (isLocale(primary)) return primary;

  return null;
}

function fromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="));
      const quality = q ? Number.parseFloat(q.slice(2)) : 1;
      return { tag: tag.trim(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .filter((entry) => entry.tag && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    if (tag === "*") break;
    const match = resolveTag(tag);
    if (match) return match;
  }

  return null;
}

function fromCookie(header: string | null): Locale | null {
  if (!header) return null;

  for (const pair of header.split(";")) {
    const index = pair.indexOf("=");
    if (index === -1) continue;
    if (pair.slice(0, index).trim() !== LOCALE_COOKIE) continue;

    const value = decodeURIComponent(pair.slice(index + 1).trim());
    return isLocale(value) ? value : null;
  }

  return null;
}

function fromCountry(header: string | null): Locale | null {
  if (!header) return null;
  return COUNTRY_LOCALES[header.toUpperCase()] ?? null;
}

export function onRequestGet(context: { request: Request }): Response {
  const { request } = context;
  const url = new URL(request.url);

  const locale =
    fromCookie(request.headers.get("Cookie")) ??
    fromAcceptLanguage(request.headers.get("Accept-Language")) ??
    fromCountry(request.headers.get("CF-IPCountry")) ??
    DEFAULT_LOCALE;

  const target = `/${locale}${url.search}`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: target,
      // The response body depends on the visitor, so it must never be shared.
      "Cache-Control": "private, no-store",
      Vary: "Accept-Language, Cookie",
    },
  });
}

export function onRequestHead(context: { request: Request }): Response {
  return onRequestGet(context);
}
