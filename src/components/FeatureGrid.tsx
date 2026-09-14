"use client";

import { useTranslations } from "next-intl";

const features = ["cashier", "rakeback", "vip", "mobile"] as const;
const icons: Record<string, string> = {
  cashier: "🏦",
  rakeback: "💎",
  vip: "👑",
  mobile: "📱",
};

export function FeatureGrid() {
  const t = useTranslations("features");

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">{t("title")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((key) => (
          <div key={key} className="card p-5 transition hover:border-grand-500/30">
            <span className="mb-3 block text-3xl">{icons[key]}</span>
            <h3 className="mb-2 font-semibold text-white">{t(`${key}.title`)}</h3>
            <p className="text-sm leading-relaxed text-gray-400">{t(`${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
