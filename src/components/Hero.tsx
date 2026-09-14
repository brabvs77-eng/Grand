"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ContactButtons } from "./ContactButtons";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="gradient-hero px-4 pb-16 pt-10 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full border border-grand-500/30 bg-grand-800/50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-grand-300">
          {t("badge")}
        </span>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
          {t("subtitle")}
        </p>
        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/join"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-grand-gold to-grand-gold-light px-8 py-3 font-bold text-grand-950 transition hover:brightness-110 sm:w-auto"
          >
            {t("ctaJoin")}
          </Link>
          <ContactButtons />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "3,000+", label: t("statsPlayers") },
            { value: "60%", label: t("statsRb") },
            { value: "24/7", label: t("statsSupport") },
          ].map((stat) => (
            <div key={stat.label} className="card p-4">
              <p className="text-xl font-bold text-grand-gold md:text-2xl">{stat.value}</p>
              <p className="text-xs text-gray-400 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
