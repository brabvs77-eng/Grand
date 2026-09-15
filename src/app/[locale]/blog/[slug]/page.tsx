import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { publishedPosts, getPost, coverImage, COVER_WIDTH, COVER_HEIGHT } from "@/lib/blog";
import { getArticleBody } from "@/content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { ContactButtons } from "@/components/ContactButtons";
import { ArticleFaq } from "@/components/ArticleFaq";
import { ArticleToc, sectionId } from "@/components/ArticleToc";

export function generateStaticParams() {
  return publishedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post?.published) return {};

  const t = await getTranslations({ locale, namespace: "blog" });
  const title = t(`posts.${slug}.title`);
  const description = t(`posts.${slug}.excerpt`);
  const cover = {
    url: `${SITE_URL}${coverImage(slug).src}`,
    width: COVER_WIDTH,
    height: COVER_HEIGHT,
    alt: title,
  };

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${locale}/blog/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      images: [cover],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cover.url],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPost(slug);
  if (!post?.published) notFound();

  const [t, body] = await Promise.all([
    getTranslations("blog"),
    getArticleBody(locale, slug),
  ]);

  if (!body) notFound();

  const title = t(`posts.${slug}.title`);
  const excerpt = t(`posts.${slug}.excerpt`);
  const cover = coverImage(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    inLanguage: locale,
    image: `${SITE_URL}${cover.src}`,
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`,
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  const faqSchema = body.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: body.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Link href="/blog" className="mb-6 inline-block text-sm text-grand-400 hover:underline">
        ← {t("title")}
      </Link>

      <header className="mb-8">
        <span className="mb-3 inline-block rounded-full bg-grand-700/50 px-2.5 py-0.5 text-xs text-grand-300">
          {t(`categories.${post.category}`)}
        </span>
        <h1 className="mb-3 text-3xl font-extrabold leading-tight md:text-4xl">{title}</h1>
        <p className="text-sm text-gray-500">
          {post.readMinutes} {t("minRead")}
        </p>
      </header>

      <img
        src={cover.src}
        srcSet={cover.srcSet}
        sizes="(min-width: 768px) 768px, 100vw"
        width={cover.width}
        height={cover.height}
        alt={title}
        fetchPriority="high"
        decoding="async"
        className="mb-10 aspect-video w-full rounded-2xl object-cover"
      />

      <p className="mb-10 border-l-2 border-grand-500 pl-4 text-lg leading-relaxed text-gray-300">
        {body.intro}
      </p>

      {body.sections.length >= 5 && (
        <ArticleToc headings={body.sections.map((section) => section.heading)} />
      )}

      <div className="space-y-10">
        {body.sections.map((section, index) => (
          <section key={section.heading} id={sectionId(index)} className="scroll-mt-20">
            <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-3 leading-relaxed text-gray-400">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-gray-400">
                    <span className="text-grand-400">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {body.faq && <ArticleFaq items={body.faq} />}

      <div className="card mt-12 p-6 text-center">
        <p className="mb-4 text-sm text-gray-400">{excerpt}</p>
        <ContactButtons className="justify-center" />
      </div>
    </article>
  );
}
