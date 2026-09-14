"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

const items = [
  { href: "/" as const, key: "home", icon: "🏠" },
  { href: "/deposit" as const, key: "deposit", icon: "💰" },
  { href: "/bonuses" as const, key: "bonuses", icon: "🎁" },
  { href: "/rakeback" as const, key: "rakeback", icon: "📊" },
];

export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-grand-700/50 bg-grand-950/95 backdrop-blur-md md:hidden">
      <div className="flex items-stretch">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs transition ${
                active ? "text-grand-400" : "text-gray-400"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {t(item.key)}
            </Link>
          );
        })}
        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs text-grand-gold"
        >
          <span className="text-lg">💬</span>
          {t("play")}
        </a>
      </div>
    </nav>
  );
}
