"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const VIDEO_SRC = "/video/pppoker-promo.mp4?v=2";
const POSTER_SRC = "/video/pppoker-promo-poster.jpg?v=2";

export function DownloadReel() {
  const t = useTranslations("download");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      void video.play().catch(() => setNeedsTap(true));
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("error", () => setFailed(true));
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("error", () => setFailed(true));
    };
  }, []);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().then(() => {
      setNeedsTap(false);
      setFailed(false);
    });
  };

  return (
    <section className="mb-10">
      <div className="mb-4 text-center">
        <h2 className="mb-1 text-xl font-bold md:text-2xl">{t("videoSectionTitle")}</h2>
        <p className="text-sm text-gray-400">{t("videoSectionSubtitle")}</p>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-grand-500/40 bg-black shadow-2xl shadow-black/50 ring-1 ring-grand-400/20">
          {failed ? (
            <img
              src={POSTER_SRC}
              alt={t("videoAlt")}
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full object-contain bg-black"
              poster={POSTER_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls
              aria-label={t("videoAlt")}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          )}

          {(needsTap || failed) && (
            <button
              type="button"
              onClick={play}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/55 transition hover:bg-black/45"
              aria-label={t("videoPlay")}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-grand-gold/90 text-2xl text-grand-950 shadow-lg">
                ▶
              </span>
              <span className="text-sm font-medium text-white">{t("videoPlay")}</span>
            </button>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-gray-500">{t("videoLabel")}</p>
      </div>
    </section>
  );
}
