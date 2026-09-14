import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { ContactButtons } from "@/components/ContactButtons";
import { BONUSES } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bonusesPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function BonusesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("bonusesPage");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {BONUSES.map((bonus) => (
            <article key={bonus.key} className="card flex flex-col p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h2 className="font-semibold leading-snug text-white">
                  {t(`items.${bonus.key}.name`)}
                </h2>
                <span className="shrink-0 rounded-lg bg-grand-gold/15 px-2.5 py-1 font-mono text-sm font-bold text-grand-gold">
                  {bonus.highlight}
                </span>
              </div>
              <p className="mb-4 grow text-sm leading-relaxed text-gray-400">
                {t(`items.${bonus.key}.desc`)}
              </p>
              <p className="border-t border-grand-700/50 pt-3 text-xs text-gray-500">
                <span className="font-medium text-gray-400">{t("termsLabel")}: </span>
                {t(`items.${bonus.key}.terms`)}
              </p>
            </article>
          ))}
        </div>
        <div className="text-center">
          <ContactButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
