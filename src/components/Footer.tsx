"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-grand-700/50 bg-grand-900 pb-24 md:pb-8">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="mb-2 text-lg font-bold">
              Grand <span className="gold-text">Club</span>
            </p>
            <p className="text-sm text-gray-400">{t("disclaimer")}</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-gray-300">Links</p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/join" className="hover:text-grand-400">{nav("join")}</Link>
              <Link href="/deposit" className="hover:text-grand-400">{nav("deposit")}</Link>
              <Link href="/withdraw" className="hover:text-grand-400">{nav("withdraw")}</Link>
              <Link href="/rakeback" className="hover:text-grand-400">{nav("rakeback")}</Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-gray-300">More</p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/download" className="hover:text-grand-400">{nav("download")}</Link>
              <Link href="/faq" className="hover:text-grand-400">{nav("faq")}</Link>
              <Link href="/blog" className="hover:text-grand-400">{nav("blog")}</Link>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500">{t("rights")}</p>
      </div>
    </footer>
  );
}
