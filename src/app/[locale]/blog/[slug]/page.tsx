import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/blog";
import { ContactButtons } from "@/components/ContactButtons";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations("blog");

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/blog" className="mb-6 inline-block text-sm text-grand-400 hover:underline">
        ← {t("title")}
      </Link>
      <span className="mb-3 inline-block rounded-full bg-grand-700/50 px-2.5 py-0.5 text-xs text-grand-300">
        {t(`categories.${post.category}`)}
      </span>
      <h1 className="mb-3 text-3xl font-extrabold leading-tight">
        {t(`posts.${slug}.title`)}
      </h1>
      <p className="mb-2 text-sm text-gray-500">
        {post.readMinutes} {t("minRead")}
      </p>
      <div className="mt-8 max-w-none">
        <p className="text-lg leading-relaxed text-gray-300">
          {t(`posts.${slug}.excerpt`)}
        </p>
        <div className="card mt-8 p-6">
          <p className="mb-4 text-sm text-gray-400">
            Full article coming soon. Contact our cashier to join Grand Club and start playing today.
          </p>
          <ContactButtons />
        </div>
      </div>
    </article>
  );
}
