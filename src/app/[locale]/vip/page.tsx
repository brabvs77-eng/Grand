import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { VipTable } from "@/components/VipTable";
import { VipProgress } from "@/components/VipProgress";
import { ContactButtons } from "@/components/ContactButtons";
import { VIP_LEVELS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "vipPage" });
  return buildPageMetadata({
    locale,
    path: "/vip",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function VipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("vipPage");
  const tv = await getTranslations("vip");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-5xl space-y-12 px-4 py-10">
        <VipTable />

        <div>
          <h2 className="mb-5 text-xl font-semibold">{t("perksTitle")}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VIP_LEVELS.map((level) => (
              <div key={level.key} className="card p-5">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="font-bold text-white">{tv(level.key)}</h3>
                  <span className="font-mono text-sm text-grand-gold">{level.rb}%</span>
                </div>
                <ul className="space-y-2">
                  {t.raw(`perks.${level.key}`).map((perk: string) => (
                    <li key={perk} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-grand-400">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <VipProgress />

        <div className="text-center">
          <ContactButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
