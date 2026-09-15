"use client";

import { useTranslations } from "next-intl";
import { CLUB_ID, CLUB_NAME, CHIP_USD_RATE, TELEGRAM_BOT } from "@/lib/constants";

export function ArticleBotCallout() {
  const t = useTranslations("telegramBot");

  return (
    <aside className="mb-10 rounded-2xl border border-[#2AABEE]/30 bg-gradient-to-br from-[#2AABEE]/10 to-grand-900/60 p-5 md:p-6">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#2AABEE]">
        {t("badge")}
      </p>
      <h2 className="mb-2 text-lg font-bold text-white">{t("articleTitle")}</h2>
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        {t("articleText", {
          clubName: CLUB_NAME,
          clubId: CLUB_ID,
          rate: CHIP_USD_RATE,
          bot: TELEGRAM_BOT.handle,
        })}
      </p>
      <a
        href={TELEGRAM_BOT.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#2AABEE] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
      >
        {t("cta", { bot: TELEGRAM_BOT.handle })}
      </a>
    </aside>
  );
}
