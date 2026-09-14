"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";

const STYLES = [
  { key: "conservative", buyIns: 50 },
  { key: "standard", buyIns: 30 },
  { key: "aggressive", buyIns: 20 },
] as const;

const STAKES = [
  { label: "NL2", buyIn: 2 },
  { label: "NL5", buyIn: 5 },
  { label: "NL10", buyIn: 10 },
  { label: "NL25", buyIn: 25 },
  { label: "NL50", buyIn: 50 },
  { label: "NL100", buyIn: 100 },
  { label: "NL200", buyIn: 200 },
  { label: "NL500", buyIn: 500 },
  { label: "NL1000", buyIn: 1000 },
];

export function BankrollCalculator() {
  const t = useTranslations("toolsPage.bankroll");
  const [bankroll, setBankroll] = useState(1000);
  const [styleKey, setStyleKey] = useState<(typeof STYLES)[number]["key"]>("standard");

  const { stake, maxBuyIn } = useMemo(() => {
    const buyIns = STYLES.find((s) => s.key === styleKey)!.buyIns;
    const affordable = bankroll / buyIns;
    const match = [...STAKES].reverse().find((s) => s.buyIn <= affordable);
    return { stake: match?.label ?? "—", maxBuyIn: affordable };
  }, [bankroll, styleKey]);

  return (
    <div className="card p-6">
      <label htmlFor="bankroll" className="mb-2 block text-sm text-gray-400">
        {t("bankrollLabel")}
      </label>
      <input
        id="bankroll"
        type="number"
        min={0}
        value={bankroll}
        onChange={(e) => setBankroll(Math.max(0, Number(e.target.value) || 0))}
        className="mb-5 w-full rounded-xl border border-grand-600 bg-grand-900 px-4 py-3 font-mono text-lg text-white focus:border-grand-400 focus:outline-none"
      />

      <label htmlFor="style" className="mb-2 block text-sm text-gray-400">
        {t("styleLabel")}
      </label>
      <select
        id="style"
        value={styleKey}
        onChange={(e) => setStyleKey(e.target.value as typeof styleKey)}
        className="mb-5 w-full rounded-xl border border-grand-600 bg-grand-900 px-4 py-3 text-white focus:border-grand-400 focus:outline-none"
      >
        {STYLES.map((s) => (
          <option key={s.key} value={s.key}>
            {t(s.key)}
          </option>
        ))}
      </select>

      <div className="space-y-2 rounded-xl bg-grand-900/80 p-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{t("maxBuyIn")}</span>
          <span className="font-mono text-grand-400">${maxBuyIn.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span className="text-gray-300">{t("recommended")}</span>
          <span className="gold-text">{stake}</span>
        </div>
      </div>
    </div>
  );
}
