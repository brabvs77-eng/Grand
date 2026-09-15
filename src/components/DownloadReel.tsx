"use client";

import { useTranslations } from "next-intl";

const VIDEO_SRC = "/video/pppoker-promo.mp4";

export function DownloadReel() {
  const t = useTranslations("download");

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-grand-500/20 bg-grand-950 shadow-2xl shadow-black/60 ring-1 ring-white/5"
        style={{ aspectRatio: "9 / 16" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={t("videoAlt")}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
          aria-hidden
        />
        <p className="pointer-events-none absolute bottom-4 left-4 right-4 text-center text-xs font-medium text-white/90">
          {t("videoLabel")}
        </p>
      </div>
    </div>
  );
}
