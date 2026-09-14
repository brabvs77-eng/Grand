import { getTranslations } from "next-intl/server";

export async function ArticleFaq({ items }: { items: { q: string; a: string }[] }) {
  const t = await getTranslations("faq");

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">{t("title")}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details key={item.q} className="card group px-5 py-4">
            <summary className="cursor-pointer list-none font-medium text-white marker:hidden">
              {item.q}
            </summary>
            <p className="mt-3 border-t border-grand-700/50 pt-3 text-sm leading-relaxed text-gray-400">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
