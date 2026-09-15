type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export function LegalDocument({
  sections,
  updated,
}: {
  sections: Section[];
  updated: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="mb-10 text-sm text-gray-500">{updated}</p>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 text-xl font-bold text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-3 leading-relaxed text-gray-400">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 space-y-2">
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
    </article>
  );
}
