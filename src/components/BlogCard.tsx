"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { coverImage, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const t = useTranslations("blog");
  const cover = coverImage(post.slug);
  const title = t(`posts.${post.slug}.title`);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group block overflow-hidden transition hover:border-grand-500/30"
    >
      <img
        src={cover.src}
        srcSet={cover.srcSet}
        sizes="(min-width: 640px) 424px, 100vw"
        width={cover.width}
        height={cover.height}
        alt={title}
        loading="lazy"
        decoding="async"
        className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="p-5">
        <span className="mb-2 inline-block rounded-full bg-grand-700/50 px-2.5 py-0.5 text-xs text-grand-300">
          {t(`categories.${post.category}`)}
        </span>
        <h3 className="mb-2 font-semibold leading-snug text-white">{title}</h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-400">
          {t(`posts.${post.slug}.excerpt`)}
        </p>
        <span className="text-xs text-grand-400">
          {post.readMinutes} {t("minRead")} →
        </span>
      </div>
    </Link>
  );
}
