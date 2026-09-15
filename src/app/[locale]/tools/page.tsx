import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { RakebackCalculator } from "@/components/RakebackCalculator";
import { BankrollCalculator } from "@/components/BankrollCalculator";
import { PotOddsCalculator } from "@/components/PotOddsCalculator";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "toolsPage" });
  return buildPageMetadata({
    locale,
    path: "/tools",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("toolsPage");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-5xl space-y-10 px-4 py-10">
        <div>
          <h2 className="mb-2 text-xl font-semibold">{t("items.rakeback.name")}</h2>
          <p className="mb-4 text-sm text-gray-400">{t("items.rakeback.desc")}</p>
          <RakebackCalculator />
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">{t("items.bankroll.name")}</h2>
          <p className="mb-4 text-sm text-gray-400">{t("items.bankroll.desc")}</p>
          <BankrollCalculator />
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">{t("items.potOdds.name")}</h2>
          <p className="mb-4 text-sm text-gray-400">{t("items.potOdds.desc")}</p>
          <PotOddsCalculator />
        </div>
      </section>
    </>
  );
}
