import { routing } from "@/i18n/routing";
import { FAVICON_VERSION, SITE_NAME } from "@/lib/constants";

const icon = (path: string) => `${path}?v=${FAVICON_VERSION}`;
import "./globals.css";

export const metadata = {
  title: `404 — ${SITE_NAME}`,
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: icon("/favicon.ico"), sizes: "any" },
      { url: icon("/icon-32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: icon("/apple-icon-180.png"), sizes: "180x180", type: "image/png" }],
  },
};

/**
 * The root layout is a pass-through so that `[locale]/layout.tsx` can own the
 * `<html lang>` attribute, which leaves this page responsible for the document
 * shell. It is also the file that produces `404.html` in the static export, so
 * it cannot assume a locale.
 */
export default function NotFound() {
  const labels: Record<string, string> = {
    pt: "Português",
    es: "Español",
    en: "English",
    uz: "O'zbekcha",
    ru: "Русский",
    fil: "Filipino",
  };

  return (
    <html lang={routing.defaultLocale}>
      <body className="min-h-screen antialiased">
        <main className="gradient-hero flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <p className="gold-text text-7xl font-extrabold md:text-8xl">404</p>
          <h1 className="mt-4 text-2xl font-bold md:text-3xl">Page not found</h1>
          <p className="mt-3 max-w-md text-gray-400">
            This page does not exist or has been moved. Pick your language to continue.
          </p>

          <nav className="mt-8 flex flex-wrap justify-center gap-3">
            {routing.locales.map((locale) => (
              <a
                key={locale}
                href={`/${locale}`}
                className="card px-4 py-2 text-sm font-medium text-grand-300 transition hover:text-white"
              >
                {labels[locale]}
              </a>
            ))}
          </nav>
        </main>
      </body>
    </html>
  );
}
