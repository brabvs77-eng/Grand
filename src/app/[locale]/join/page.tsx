import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { ClubIdBanner } from "@/components/ClubIdBanner";
import { TelegramBotBlock } from "@/components/TelegramBotBlock";
import { ContactButtons } from "@/components/ContactButtons";
import { CLUB_ID, REFERRAL_ID } from "@/lib/constants";

export default async function JoinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("join");

  const steps = [
    { title: t("stepDownload"), desc: t("downloadDesc"), num: 1 },
    { title: t("stepRegister"), desc: t("registerDesc"), num: 2 },
    {
      title: t("stepApply"),
      desc: t("applyDesc", { clubId: CLUB_ID, referralId: REFERRAL_ID }),
      num: 3,
    },
    { title: t("stepDeposit"), desc: t("depositDesc"), num: 4 },
  ];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-10">
        {steps.map((step) => (
          <div key={step.num} className="card flex gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-grand-600 text-lg font-bold">
              {step.num}
            </span>
            <div>
              <h2 className="mb-1 font-semibold text-white">{step.title}</h2>
              <p className="text-sm leading-relaxed text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
        <ClubIdBanner />
        <TelegramBotBlock compact />
        <div className="text-center">
          <ContactButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
