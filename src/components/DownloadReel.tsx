"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const VIDEO_SRC = "/video/pppoker-promo.mp4";
const POSTER_SRC = "/video/pppoker-promo-poster.jpg";

export function DownloadReel() {
  const t = useTranslations("download");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      void video.play().catch(() => setNeedsTap(true));
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, []);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().then(() => setNeedsTap(false));
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full max-w-[280px] overflow-hidden rounded-[2rem] border-2 border-grand-500/40 bg-grand-900 shadow-2xl shadow-black/60 ring-1 ring-grand-400/20"
        style={{ aspectRatio: "9 / 16" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={t("videoAlt")}
          onClick={play}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {needsTap && (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 transition hover:bg-black/40"
            aria-label={t("videoPlay")}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-grand-gold/90 text-2xl text-grand-950 shadow-lg">
              ▶
            </span>
            <span className="text-xs font-medium text-white">{t("videoPlay")}</span>
          </button>
        )}

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
