"use client";

import { useTranslations } from "next-intl";
import { CLUB_ID, REFERRAL_ID } from "@/lib/constants";
import { CopyButton } from "./CopyButton";

export function ClubIdBanner() {
  const t = useTranslations("club");

  return (
    <div className="card mx-auto max-w-2xl p-5">
      <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-grand-400">
        {t("title")}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-grand-900/80 p-4 text-center">
          <p className="mb-1 text-xs text-gray-400">{t("clubId")}</p>
          <p className="mb-3 font-mono text-2xl font-bold text-grand-gold">{CLUB_ID}</p>
          <CopyButton value={CLUB_ID} />
        </div>
        <div className="rounded-xl bg-grand-900/80 p-4 text-center">
          <p className="mb-1 text-xs text-gray-400">{t("referralId")}</p>
          <p className="mb-3 font-mono text-2xl font-bold text-grand-gold">{REFERRAL_ID}</p>
          <CopyButton value={REFERRAL_ID} />
        </div>
      </div>
    </div>
  );
}
