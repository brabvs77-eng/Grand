"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COOKIE_CONSENT_KEY } from "@/lib/legal";

export function CookieConsent() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed bottom-20 left-4 right-4 z-[60] md:bottom-6 md:left-auto md:right-6 md:max-w-md"
    >
      <div className="card border-grand-500/30 p-5 shadow-2xl shadow-black/50">
        <p id="cookie-title" className="mb-2 text-sm font-semibold text-white">
          {t("title")}
        </p>
        <p className="mb-4 text-xs leading-relaxed text-gray-400">{t("text")}</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={accept}
            className="inline-flex min-h-10 items-center justify-center rounded-xl bg-grand-gold px-4 py-2 text-xs font-bold text-grand-950 transition hover:brightness-110"
          >
            {t("accept")}
          </button>
          <Link href="/data-policy" className="text-xs text-grand-400 hover:underline">
            {t("dataPolicy")}
          </Link>
          <Link href="/privacy" className="text-xs text-grand-400 hover:underline">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </div>
  );
}
