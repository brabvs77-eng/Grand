import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { DownloadReel } from "@/components/DownloadReel";
import { Link } from "@/i18n/navigation";

const downloads = [
  { key: "ios", url: "https://apps.apple.com/app/pppoker-home-games/id1226386602", icon: "🍎" },
  { key: "android", url: "https://play.google.com/store/apps/details?id=com.lein.pppoker.android", icon: "▶️" },
  { key: "apk", url: "https://www.pppoker.net/", icon: "📦" },
  { key: "windows", url: "https://www.pppoker.net/", icon: "🖥️" },
] as const;

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
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-10 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-14">
          <DownloadReel />

          <div className="w-full max-w-md">
            <div className="grid gap-4 sm:grid-cols-2">
              {downloads.map((dl) => (
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
            <p className="mt-6 text-center text-sm text-gray-400 lg:text-left">{t("note")}</p>
            <div className="mt-6 text-center lg:text-left">
              <Link
                href="/join"
                className="inline-flex min-h-12 items-center rounded-xl bg-gradient-to-r from-grand-500 to-grand-400 px-8 py-3 font-semibold text-grand-950"
              >
                {nav("join")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
