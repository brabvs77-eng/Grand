import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { ContactButtons } from "@/components/ContactButtons";
import { DIAMOND_PACKS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

const usageKeys = ["hud", "timebank", "themes", "clubStars"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "diamondsPage" });
  return buildPageMetadata({
    locale,
    path: "/diamonds",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function DiamondsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("diamondsPage");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-5xl space-y-12 px-4 py-10">
        <div className="card p-6">
          <h2 className="mb-3 text-lg font-semibold">{t("whatTitle")}</h2>
          <p className="text-sm leading-relaxed text-gray-400">{t("whatDesc")}</p>
        </div>

        <div>
          <h2 className="mb-5 text-xl font-semibold">{t("usageTitle")}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {usageKeys.map((key) => (
              <div key={key} className="card flex items-center gap-3 p-4">
                <span className="text-xl">💎</span>
                <p className="text-sm text-gray-300">{t(`usage.${key}`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-xl font-semibold">{t("packsTitle")}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DIAMOND_PACKS.map((pack) => (
              <div key={pack.key} className="card flex flex-col p-5">
                <h3 className="mb-1 font-semibold text-white">
                  {t(`packName.${pack.key}`)}
                </h3>
                <p className="mb-4 font-mono text-sm text-grand-400">
                  {pack.diamonds.toLocaleString()} {t("diamondsLabel")}
                </p>
                <p className="mb-1 text-2xl font-bold text-grand-gold">
                  ${pack.price}
                </p>
                {pack.discount > 0 ? (
                  <p className="text-xs text-grand-300">
                    −{pack.discount}% {t("discountLabel")}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500">{t("storePrice")}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card border-grand-gold/20 p-6">
          <h2 className="mb-3 text-lg font-semibold">{t("buybackTitle")}</h2>
          <p className="mb-5 text-sm leading-relaxed text-gray-400">
            {t("buybackDesc")}
          </p>
          <p className="mb-4 text-sm font-medium text-grand-300">{t("orderCta")}</p>
          <ContactButtons />
        </div>
      </section>
    </>
  );
}
