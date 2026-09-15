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

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-grand-700/50 bg-grand-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 md:py-3">
        <Link href="/" className="flex shrink-0 items-center py-1">
          <ClubLogo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-grand-800 hover:text-white"
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            href="/download"
            className="ml-1 inline-flex min-h-9 items-center rounded-lg bg-gradient-to-r from-grand-gold to-grand-gold-light px-4 py-2 text-sm font-bold text-grand-950 transition hover:brightness-110"
          >
            {t("downloadPppoker")}
          </Link>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/download"
            className="inline-flex min-h-9 items-center rounded-lg bg-gradient-to-r from-grand-gold to-grand-gold-light px-3 py-2 text-xs font-bold text-grand-950 transition hover:brightness-110"
          >
            {t("downloadPppoker")}
          </Link>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-300 hover:bg-grand-800"
            aria-label="Menu"
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
        <nav className="border-t border-grand-700/50 px-4 py-3 md:hidden">
          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="mb-2 flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-grand-gold to-grand-gold-light px-4 py-3 text-sm font-bold text-grand-950"
          >
            {t("downloadPppoker")}
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-grand-800"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
