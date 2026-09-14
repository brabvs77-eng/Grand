"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { VIP_LEVELS } from "@/lib/constants";

export function VipProgress() {
  const t = useTranslations("vipPage");
  const tv = useTranslations("vip");
  const tr = useTranslations("rakeback");
  const [rake, setRake] = useState(750);

  const { current, next, progress } = useMemo(() => {
    const currentIndex = VIP_LEVELS.reduce(
      (acc, level, i) => (rake >= level.rake ? i : acc),
      0
    );
    const currentLevel = VIP_LEVELS[currentIndex];
    const nextLevel = VIP_LEVELS[currentIndex + 1];

    if (!nextLevel) {
      return { current: currentLevel, next: null, progress: 100 };
    }

    const span = nextLevel.rake - currentLevel.rake;
    const done = rake - currentLevel.rake;
    return {
      current: currentLevel,
      next: nextLevel,
      progress: Math.min(100, Math.max(0, (done / span) * 100)),
    };
  }, [rake]);

  return (
    <div className="card p-6">
      <h2 className="mb-4 text-lg font-semibold">{t("progressTitle")}</h2>

      <label htmlFor="vip-rake" className="mb-2 block text-sm text-gray-400">
        {tr("monthlyRakeInput")}
      </label>
      <input
        id="vip-rake"
        type="number"
        min={0}
        value={rake}
        onChange={(e) => setRake(Math.max(0, Number(e.target.value) || 0))}
        className="mb-6 w-full rounded-xl border border-grand-600 bg-grand-900 px-4 py-3 font-mono text-lg text-white focus:border-grand-400 focus:outline-none"
      />

      <div className="mb-3 flex items-center justify-between text-sm">
        <span>
          <span className="text-gray-400">{t("currentLevel")}: </span>
          <span className="font-semibold text-grand-gold">{tv(current.key)}</span>
        </span>
        <span className="font-mono text-grand-400">{current.rb}%</span>
      </div>

      <div
        className="mb-3 h-2.5 overflow-hidden rounded-full bg-grand-900"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-grand-500 to-grand-gold transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-400">
        {next
          ? `${t("nextLevel")}: ${tv(next.key)} — ${t("needMore", {
              amount: `$${(next.rake - rake).toLocaleString()}`,
            })}`
          : t("maxLevel")}
      </p>
    </div>
  );
}
