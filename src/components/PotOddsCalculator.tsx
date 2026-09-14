"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";

export function PotOddsCalculator() {
  const t = useTranslations("toolsPage.potOdds");
  const [pot, setPot] = useState(100);
  const [bet, setBet] = useState(25);

  const { ratio, equity } = useMemo(() => {
    const total = pot + bet * 2;
    if (bet <= 0 || total <= 0) return { ratio: "—", equity: 0 };
    return {
      ratio: `${(( pot + bet) / bet).toFixed(2)} : 1`,
      equity: (bet / total) * 100,
    };
  }, [pot, bet]);

  return (
    <div className="card p-6">
      <label htmlFor="pot" className="mb-2 block text-sm text-gray-400">
        {t("potLabel")}
      </label>
      <input
        id="pot"
        type="number"
        min={0}
        value={pot}
        onChange={(e) => setPot(Math.max(0, Number(e.target.value) || 0))}
        className="mb-5 w-full rounded-xl border border-grand-600 bg-grand-900 px-4 py-3 font-mono text-lg text-white focus:border-grand-400 focus:outline-none"
      />

      <label htmlFor="bet" className="mb-2 block text-sm text-gray-400">
        {t("betLabel")}
      </label>
      <input
        id="bet"
        type="number"
        min={0}
        value={bet}
        onChange={(e) => setBet(Math.max(0, Number(e.target.value) || 0))}
        className="mb-5 w-full rounded-xl border border-grand-600 bg-grand-900 px-4 py-3 font-mono text-lg text-white focus:border-grand-400 focus:outline-none"
      />

      <div className="space-y-2 rounded-xl bg-grand-900/80 p-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{t("potOddsResult")}</span>
          <span className="font-mono text-grand-400">{ratio}</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span className="text-gray-300">{t("equityNeeded")}</span>
          <span className="gold-text">{equity.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
}
