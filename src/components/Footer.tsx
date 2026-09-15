"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ClubLogo } from "./ClubLogo";

const columns = [
  { heading: "cashier", links: ["deposit", "withdraw", "rakeback", "vip"] },
  { heading: "rewards", links: ["bonuses", "diamonds", "tools"] },
  { heading: "help", links: ["about", "join", "download", "faq", "blog"] },
] as const;

const hrefs: Record<string, "/about" | "/join" | "/deposit" | "/withdraw" | "/rakeback" | "/vip" | "/bonuses" | "/diamonds" | "/tools" | "/download" | "/faq" | "/blog"> = {
  about: "/about",
  join: "/join",
  deposit: "/deposit",
  withdraw: "/withdraw",
  rakeback: "/rakeback",
  vip: "/vip",
  bonuses: "/bonuses",
  diamonds: "/diamonds",
  tools: "/tools",
  download: "/download",
  faq: "/faq",
  blog: "/blog",
};

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-grand-700/50 bg-grand-900 pb-24 md:pb-8">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3">
              <ClubLogo variant="mark" className="h-12 w-auto" />
            </div>
            <p className="mb-3 font-mono text-xs text-grand-400">pppoker77.com</p>
            <p className="text-sm leading-relaxed text-gray-400">{t("disclaimer")}</p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="mb-3 text-sm font-semibold text-gray-300">
                {t(`columns.${column.heading}`)}
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                {column.links.map((key) => (
                  <Link key={key} href={hrefs[key]} className="hover:text-grand-400">
                    {nav(key)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500">{t("rights")}</p>
      </div>
    </footer>
  );
}
