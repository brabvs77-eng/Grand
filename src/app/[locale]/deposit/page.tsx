import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { TelegramBotBlock } from "@/components/TelegramBotBlock";
import { ContactButtons } from "@/components/ContactButtons";
import { buildPageMetadata } from "@/lib/metadata";

const methodKeys = ["usdt", "pix", "gcash", "sbp", "uzcard", "bank"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "deposit" });
  return buildPageMetadata({
    locale,
    path: "/deposit",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function DepositPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("deposit");
  const howSteps = [t("how1"), t("how2"), t("how3"), t("how4")];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <TelegramBotBlock compact />
      </section>
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methodKeys.map((key) => (
            <div key={key} className="card p-5">
              <h3 className="mb-2 font-semibold">{t(`methods.${key}.name`)}</h3>
              <p className="text-sm text-gray-400">
                ⏱ {t(`methods.${key}.time`)} · Min {t(`methods.${key}.min`)}
              </p>
            </div>
          ))}
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
