"use client";

import { useTranslations } from "next-intl";
import { VIP_LEVELS } from "@/lib/constants";

export function VipTable() {
  const t = useTranslations("rakeback");
  const tv = useTranslations("vip");

  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-grand-700 bg-grand-900/80">
            <th className="px-4 py-3 text-left font-semibold text-gray-300">{t("level")}</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-300">{t("monthlyRake")}</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-300">{t("rbPercent")}</th>
          </tr>
        </thead>
        <tbody>
          {VIP_LEVELS.map((level) => (
            <tr key={level.key} className="border-b border-grand-700/50">
              <td className="px-4 py-3 font-medium">{tv(level.key)}</td>
              <td className="px-4 py-3 text-gray-400">
                {level.rake === 0 ? "—" : `$${level.rake.toLocaleString()}+`}
              </td>
              <td className="px-4 py-3 text-right font-bold text-grand-gold">{level.rb}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
