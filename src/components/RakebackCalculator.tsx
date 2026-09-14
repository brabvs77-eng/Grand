"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { VIP_LEVELS } from "@/lib/constants";

export function RakebackCalculator() {
  const t = useTranslations("rakeback");
  const tv = useTranslations("vip");
  const [rake, setRake] = useState(500);

  const level = useMemo(() => {
    const sorted = [...VIP_LEVELS].reverse();
    return sorted.find((l) => rake >= l.rake) ?? VIP_LEVELS[0];
  }, [rake]);

  const savings = (rake * level.rb) / 100;

  return (
    <div className="card mx-auto max-w-lg p-6">
      <h3 className="mb-4 text-lg font-semibold">{t("calculatorTitle")}</h3>
      <label className="mb-2 block text-sm text-gray-400">{t("monthlyRakeInput")}</label>
      <input
        type="number"
        min={0}
        value={rake}
        onChange={(e) => setRake(Number(e.target.value) || 0)}
        className="mb-4 w-full rounded-xl border border-grand-600 bg-grand-900 px-4 py-3 text-lg font-mono text-white focus:border-grand-400 focus:outline-none"
      />
      <div className="space-y-2 rounded-xl bg-grand-900/80 p-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{t("yourRb")}</span>
          <span className="font-semibold text-grand-400">
            {tv(level.key)} — {level.rb}%
          </span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span className="text-gray-300">{t("youSave")}</span>
          <span className="gold-text">${savings.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
