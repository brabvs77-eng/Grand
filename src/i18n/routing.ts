import { defineRouting } from "next-intl/routing";

export const locales = ["pt", "es", "en", "uz", "ru", "fil"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});
