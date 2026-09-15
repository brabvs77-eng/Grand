import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { CookieConsent } from "@/components/CookieConsent";
import { FAVICON_VERSION, SITE_NAME, SITE_URL, TELEGRAM_BOT, TELEGRAM_SUPPORT } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

const icon = (path: string) => `${path}?v=${FAVICON_VERSION}`;
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const page = buildPageMetadata({
    locale,
    path: "",
    title: t("title"),
    description: t("description"),
  });

  return {
    metadataBase: new URL(SITE_URL),
    ...page,
    title: {
      default: t("title"),
      template: `%s | ${SITE_NAME}`,
    },
    alternates: {
      ...page.alternates,
      types: {
        "text/markdown": `${SITE_URL}/llms.txt`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: icon("/favicon.ico"), sizes: "any" },
        { url: icon("/icon-32.png"), sizes: "32x32", type: "image/png" },
        { url: icon("/icon-64.png"), sizes: "64x64", type: "image/png" },
        { url: icon("/icon-192.png"), sizes: "192x192", type: "image/png" },
        { url: icon("/icon-512.png"), sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: icon("/apple-icon-180.png"), sizes: "180x180", type: "image/png" }],
      shortcut: icon("/favicon.ico"),
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent" as const,
      title: "PPPoker77",
    },
  };
}

export const viewport = {
  themeColor: "#0a0f0d",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "meta" });

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    description: t("description"),
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: [TELEGRAM_BOT.url, TELEGRAM_SUPPORT.url],
  };

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <BottomNav />
          <CookieConsent />
          <ServiceWorkerRegister />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
