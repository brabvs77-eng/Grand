"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { OFFICE } from "@/lib/about";
import { GAMING_LABS_CERT_URL, TRUSTPILOT_URL } from "@/lib/legal";
import { ClubLogo } from "./ClubLogo";

const columns = [
  { heading: "cashier", links: ["deposit", "withdraw", "rakeback", "vip"] },
  { heading: "rewards", links: ["bonuses", "diamonds", "tools"] },
  { heading: "help", links: ["about", "join", "download", "faq", "blog"] },
] as const;

const hrefs: Record<
  string,
  | "/about"
  | "/join"
  | "/deposit"
  | "/withdraw"
  | "/rakeback"
  | "/vip"
  | "/bonuses"
  | "/diamonds"
  | "/tools"
  | "/download"
  | "/faq"
  | "/blog"
  | "/privacy"
  | "/data-policy"
> = {
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
  privacy: "/privacy",
  dataPolicy: "/data-policy",
};

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const address = OFFICE.operational;

  return (
    <footer className="border-t border-grand-700/50 bg-grand-900 pb-24 md:pb-8">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3">
              <ClubLogo variant="mark" className="h-12 w-auto" />
            </div>
            <p className="mb-3 font-mono text-xs text-grand-400">pppoker77.com</p>
            <address className="not-italic text-xs leading-relaxed text-gray-500">
              <span className="font-medium text-gray-400">{OFFICE.legalName}</span>
              <br />
              {address.street}
              <br />
              {address.district}, {address.city} — {address.state}
              <br />
              CEP {address.cep}, {address.country}
            </address>
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

        <div className="mb-6 flex flex-wrap items-center justify-center gap-6 border-t border-grand-700/50 pt-8">
          <a
            href={GAMING_LABS_CERT_URL}
            target="_blank"
            rel="nofollow noreferrer"
            className="opacity-90 transition hover:opacity-100"
          >
            <img
              src="/footer/gaming-labs-certified.svg"
              alt={t("gamingLabsAlt")}
              width={160}
              height={45}
              className="h-11 w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#00b67a]/30 bg-[#00b67a]/10 px-4 py-2.5 text-sm transition hover:bg-[#00b67a]/20"
          >
            <span className="text-[#00b67a]" aria-hidden>★★★★★</span>
            <span className="font-medium text-gray-300">{t("trustpilot")}</span>
          </a>
        </div>

        <div className="border-t border-grand-700/50 pt-5">
          <div className="grid gap-4 text-[11px] leading-snug text-gray-500 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-start lg:gap-5">
            <p>{t("disclaimer")}</p>
            <p>{t("responsibleGaming")}</p>
            <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1 sm:justify-start lg:flex-col lg:items-end lg:gap-1.5 lg:text-right">
              <Link href="/privacy" className="whitespace-nowrap hover:text-grand-400">
                {t("privacy")}
              </Link>
              <Link href="/data-policy" className="whitespace-nowrap hover:text-grand-400">
                {t("dataPolicy")}
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] text-gray-600">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
