import { getTranslations } from "next-intl/server";

/**
 * Headings are localised into six scripts, so anchors are positional rather
 * than slugified — a Cyrillic or Uzbek heading would otherwise produce an
 * unreadable percent-encoded fragment.
 */
export const sectionId = (index: number) => `section-${index + 1}`;

export async function ArticleToc({ headings }: { headings: string[] }) {
  const t = await getTranslations("blog");

  return (
    <nav aria-label={t("toc")} className="card mb-10 p-5">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-grand-300">
        {t("toc")}
      </h2>
      <ol className="space-y-2">
        {headings.map((heading, index) => (
          <li key={heading} className="flex gap-3 text-sm leading-relaxed">
            <span className="shrink-0 tabular-nums text-grand-500">{index + 1}</span>
            <a href={`#${sectionId(index)}`} className="text-gray-400 hover:text-white">
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
