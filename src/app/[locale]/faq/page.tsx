import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { FaqAccordion } from "@/components/FaqAccordion";
import { buildPageMetadata } from "@/lib/metadata";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  return buildPageMetadata({
    locale,
    path: "/faq",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faq");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqKeys.map((key) => ({
      "@type": "Question",
      name: t(`items.${key}`),
      acceptedAnswer: { "@type": "Answer", text: t(`items.a${key.slice(1)}`) },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="px-4 py-10">
        <FaqAccordion />
      </section>
    </>
  );
}
