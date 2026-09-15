"use client";

import { useTranslations } from "next-intl";
import { DOWNLOAD_SCREENSHOTS } from "@/lib/download-gallery";

export function DownloadGallery() {
  const t = useTranslations("download");

  return (
    <section className="mb-10">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-xl font-bold md:text-2xl">{t("galleryTitle")}</h2>
        <p className="text-sm text-gray-400">{t("gallerySubtitle")}</p>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin]">
        <ul className="flex gap-4 snap-x snap-mandatory">
          {DOWNLOAD_SCREENSHOTS.map((shot) => (
            <li key={shot.id} className="w-[200px] shrink-0 snap-start sm:w-[220px]">
              <figure className="overflow-hidden rounded-2xl border border-grand-700/50 bg-grand-900/40">
                <img
                  src={shot.src}
                  alt={t(`screenshots.${shot.id}`)}
                  width={333}
                  height={592}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[333/592] w-full object-cover"
                />
                <figcaption className="px-3 py-3 text-center text-xs font-medium leading-snug text-gray-300">
                  {t(`screenshots.${shot.id}`)}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
