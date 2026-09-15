import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { TelegramBotBlock } from "@/components/TelegramBotBlock";
import { ContactButtons } from "@/components/ContactButtons";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "withdraw" });
  return buildPageMetadata({
    locale,
    path: "/withdraw",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function WithdrawPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("withdraw");
  const howSteps = [t("how1"), t("how2"), t("how3"), t("how4")];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-8">
          <TelegramBotBlock compact />
        </div>
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="card p-5 text-center">
            <p className="text-sm text-gray-400">{t("min")}</p>
          </div>
          <div className="card p-5 text-center">
            <p className="text-sm text-gray-400">{t("max")}</p>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="mb-4 text-lg font-semibold">{t("howTitle")}</h2>
          <ol className="space-y-3">
            {howSteps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-grand-600 text-xs font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <ContactButtons />
          </div>
        </div>
      </section>
    </>
  );
}
