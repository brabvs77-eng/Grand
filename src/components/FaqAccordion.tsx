"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export function FaqAccordion() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>("q1");

  return (
    <div className="mx-auto max-w-3xl space-y-2">
      {faqKeys.map((key) => {
        const isOpen = open === key;
        return (
          <div key={key} className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : key)}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium transition hover:bg-grand-800/50"
            >
              {t(`items.${key}`)}
              <span className="ml-4 text-grand-400">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="border-t border-grand-700/50 px-5 py-4 text-sm leading-relaxed text-gray-400">
                {t(`items.a${key.slice(1)}`)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
