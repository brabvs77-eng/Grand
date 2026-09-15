import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { VipTable } from "@/components/VipTable";
import { RakebackCalculator } from "@/components/RakebackCalculator";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rakeback" });
  return buildPageMetadata({
    locale,
    path: "/rakeback",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function RakebackPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("rakeback");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-4xl space-y-10 px-4 py-10">
        <div>
          <h2 className="mb-4 text-xl font-semibold">{t("vipTitle")}</h2>
          <VipTable />
        </div>
        <RakebackCalculator />
      </section>
    </>
  );
}
