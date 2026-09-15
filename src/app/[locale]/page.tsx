import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { ClubIdBanner } from "@/components/ClubIdBanner";
import { TelegramBotBlock } from "@/components/TelegramBotBlock";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PaymentMethodsBlock } from "@/components/PaymentMethodsBlock";
import { StepsGuide } from "@/components/StepsGuide";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <section className="px-4 py-10">
        <ClubIdBanner />
      </section>
      <TelegramBotBlock />
      <FeatureGrid />
      <PaymentMethodsBlock />
      <StepsGuide />
    </>
  );
}
