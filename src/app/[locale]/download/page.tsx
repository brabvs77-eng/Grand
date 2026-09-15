import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { DownloadGallery } from "@/components/DownloadGallery";
import { DownloadReel } from "@/components/DownloadReel";
import { Link } from "@/i18n/navigation";
import { DOWNLOAD_LINKS } from "@/lib/downloads";
import { SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download" });
  return buildPageMetadata({
    locale,
    path: "/download",
    title: t("title"),
    description: t("subtitle"),
    image: {
      url: `${SITE_URL}/video/pppoker-promo-poster.jpg`,
      width: 1280,
      height: 720,
      alt: t("videoAlt"),
    },
  });
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("download");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <DownloadReel />
        <DownloadGallery />

        <div className="mx-auto max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {DOWNLOAD_LINKS.map((dl) => (
              <a
                key={dl.key}
                href={dl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 p-5 transition hover:border-grand-500/30"
              >
                <span className="text-3xl">{dl.icon}</span>
                <span className="font-semibold">{t(dl.key)}</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-400">{t("note")}</p>
          <div className="mt-6 text-center">
            <Link
              href="/join"
              className="inline-flex min-h-12 items-center rounded-xl bg-gradient-to-r from-grand-500 to-grand-400 px-8 py-3 font-semibold text-grand-950"
            >
              {nav("join")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
