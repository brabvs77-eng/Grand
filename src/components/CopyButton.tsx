"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function CopyButton({ value }: { value: string }) {
  const t = useTranslations("club");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-lg bg-grand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-grand-500 active:scale-95"
      aria-label={t("copy")}
    >
      {copied ? t("copied") : t("copy")}
    </button>
  );
}
