"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const t = useTranslations("blog");

  return (
    <Link href={`/blog/${post.slug}`} className="card block p-5 transition hover:border-grand-500/30">
      <span className="mb-2 inline-block rounded-full bg-grand-700/50 px-2.5 py-0.5 text-xs text-grand-300">
        {t(`categories.${post.category}`)}
      </span>
      <h3 className="mb-2 font-semibold leading-snug text-white">
        {t(`posts.${post.slug}.title`)}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-gray-400">
        {t(`posts.${post.slug}.excerpt`)}
      </p>
      <span className="text-xs text-grand-400">
        {post.readMinutes} {t("minRead")} →
      </span>
    </Link>
  );
}
