"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ClubLogo } from "./ClubLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
  { href: "/about" as const, key: "about" },
  { href: "/join" as const, key: "join" },
  { href: "/deposit" as const, key: "deposit" },
  { href: "/rakeback" as const, key: "rakeback" },
  { href: "/vip" as const, key: "vip" },
  { href: "/bonuses" as const, key: "bonuses" },
  { href: "/diamonds" as const, key: "diamonds" },
  { href: "/tools" as const, key: "tools" },
  { href: "/blog" as const, key: "blog" },
];

function DownloadCta({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("nav");

  return (
    <Link
      href="/download"
      className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-grand-gold to-grand-gold-light px-3 py-2 text-xs font-bold text-grand-950 shadow-md shadow-grand-gold/20 transition hover:brightness-110 sm:px-4 sm:text-sm"
    >
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l4-4m-4 4l-4-4M5 20h14" />
      </svg>
      <span className="whitespace-nowrap">{compact ? t("download") : t("downloadPppoker")}</span>
    </Link>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("meta");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-grand-700/50 bg-grand-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 lg:py-3">
        <Link href="/" className="flex shrink-0 items-center py-1">
          <ClubLogo alt={tMeta("logoAlt")} />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center gap-0.5 overflow-x-auto xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="shrink-0 rounded-lg px-2.5 py-2 text-sm text-gray-300 transition hover:bg-grand-800 hover:text-white"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <DownloadCta compact />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-300 hover:bg-grand-800 xl:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-grand-700/50 px-4 py-3 xl:hidden">
          <DownloadCta />
          <div className="mt-3 grid grid-cols-2 gap-1 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-grand-800"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
