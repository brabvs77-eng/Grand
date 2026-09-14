"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function StepsGuide() {
  const t = useTranslations("steps");
  const nav = useTranslations("nav");

  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold">{t("title")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={i} className="card relative p-5">
            <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-grand-600 text-sm font-bold">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-gray-300">{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/join"
          className="inline-flex min-h-12 items-center rounded-xl bg-gradient-to-r from-grand-500 to-grand-400 px-8 py-3 font-semibold text-grand-950 transition hover:brightness-110"
        >
          {nav("join")}
        </Link>
      </div>
    </section>
  );
}
