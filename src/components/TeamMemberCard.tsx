"use client";

import { useTranslations } from "next-intl";

export function TeamMemberCard({
  id,
  image,
}: {
  id: string;
  image: string;
}) {
  const t = useTranslations("aboutPage.team");

  return (
    <article className="card overflow-hidden">
      <img
        src={image}
        alt={t(`${id}.name`)}
        width={300}
        height={400}
        loading="lazy"
        decoding="async"
        className="aspect-[3/4] w-full object-cover object-top"
      />
      <div className="p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-grand-400">
          {t(`${id}.role`)}
        </p>
        <h3 className="mb-2 text-lg font-bold text-white">{t(`${id}.name`)}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{t(`${id}.bio`)}</p>
      </div>
    </article>
  );
}
