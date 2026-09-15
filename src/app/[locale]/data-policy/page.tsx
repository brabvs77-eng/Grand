import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { LegalDocument } from "@/components/LegalDocument";
import { SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.dataPolicy" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: { canonical: `${SITE_URL}/${locale}/data-policy` },
    robots: { index: true, follow: true },
  };
}

export default async function DataPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.dataPolicy");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <LegalDocument
        updated={t("updated")}
        sections={t.raw("sections") as { heading: string; paragraphs: string[]; bullets?: string[] }[]}
      />
    </>
  );
}
