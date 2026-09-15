"use client";

import { useTranslations } from "next-intl";
import { CLUB_ID, CLUB_NAME, CHIP_USD_RATE, TELEGRAM_BOT } from "@/lib/constants";
import { CopyButton } from "./CopyButton";

export function TelegramBotBlock({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("telegramBot");

  if (compact) {
    return (
      <div className="card border-[#2AABEE]/30 bg-gradient-to-br from-[#2AABEE]/10 to-grand-900/80 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#2AABEE]">
              {t("badge")}
            </p>
            <p className="font-semibold text-white">
              {CLUB_NAME} · {t("clubId")} {CLUB_ID}
            </p>
            <p className="text-sm text-gray-400">
              {t("rateValue", { rate: CHIP_USD_RATE })}
            </p>
          </div>
          <a
            href={TELEGRAM_BOT.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2AABEE] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {t("cta", { bot: TELEGRAM_BOT.handle })}
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div className="card overflow-hidden border-[#2AABEE]/25 bg-gradient-to-br from-[#2AABEE]/10 via-grand-900/90 to-grand-950 p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="mb-3 inline-block rounded-full border border-[#2AABEE]/40 bg-[#2AABEE]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2AABEE]">
              {t("badge")}
            </span>
            <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{t("title")}</h2>
            <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
              {t("subtitle")}
            </p>
          </div>
          <a
            href={TELEGRAM_BOT.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2AABEE] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#2AABEE]/20 transition hover:brightness-110"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            {t("cta", { bot: TELEGRAM_BOT.handle })}
          </a>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {[t("feature1"), t("feature2"), t("feature3")].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 rounded-xl bg-grand-900/60 px-4 py-3 text-sm text-gray-300"
            >
              <span className="text-[#2AABEE]">✓</span>
              {feature}
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-grand-900/80 p-4 text-center">
            <p className="mb-1 text-xs text-gray-400">{t("club")}</p>
            <p className="font-semibold text-white">{CLUB_NAME}</p>
          </div>
          <div className="rounded-xl bg-grand-900/80 p-4 text-center">
            <p className="mb-1 text-xs text-gray-400">{t("clubId")}</p>
            <p className="mb-2 font-mono text-xl font-bold text-grand-gold">{CLUB_ID}</p>
            <CopyButton value={CLUB_ID} />
          </div>
          <div className="rounded-xl bg-grand-900/80 p-4 text-center">
            <p className="mb-1 text-xs text-gray-400">{t("rate")}</p>
            <p className="font-mono text-xl font-bold text-grand-gold">
              {t("rateValue", { rate: CHIP_USD_RATE })}
            </p>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          <a
            href={TELEGRAM_BOT.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[#2AABEE] hover:underline"
          >
            {TELEGRAM_BOT.handle}
          </a>
        </p>
      </div>
    </section>
  );
}
