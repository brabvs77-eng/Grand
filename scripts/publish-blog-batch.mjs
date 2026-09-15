/**
 * Publishes a batch of blog articles:
 * - Appends article bodies to src/content/articles/{locale}.ts
 * - Adds title/excerpt to src/messages/{locale}.json
 * - Sets published: true in src/lib/blog.ts
 *
 * Usage: node scripts/publish-blog-batch.mjs scripts/blog-batch-3-content.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const contentPath = process.argv[2];
if (!contentPath) {
  console.error("Usage: node scripts/publish-blog-batch.mjs <content-module.mjs>");
  process.exit(1);
}

const { SLUGS, META, ARTICLES, READ_MINUTES = {} } = await import(
  join(process.cwd(), contentPath)
);

const LOCALES = ["en", "ru", "pt", "es", "uz", "fil"];
const ARTICLES_DIR = "src/content/articles";
const BLOG_TS = "src/lib/blog.ts";

function escapeTs(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatParagraphs(paragraphs) {
  return paragraphs.map((p) => `          "${escapeTs(p)}",`).join("\n");
}

function formatBullets(bullets) {
  if (!bullets?.length) return "";
  const items = bullets.map((b) => `            "${escapeTs(b)}",`).join("\n");
  return `,
        bullets: [
${items}
        ]`;
}

function formatSection(section) {
  return `      {
        heading: "${escapeTs(section.heading)}",
        paragraphs: [
${formatParagraphs(section.paragraphs)}
        ]${formatBullets(section.bullets)}
      }`;
}

function formatFaq(faq) {
  const items = faq
    .map(
      (item) => `      {
        q: "${escapeTs(item.q)}",
        a: "${escapeTs(item.a)}",
      }`
    )
    .join(",\n");
  return `    faq: [
${items}
    ],`;
}

function formatArticle(slug, body) {
  const sections = body.sections.map(formatSection).join(",\n");
  return `
  "${slug}": {
    intro:
      "${escapeTs(body.intro)}",
    sections: [
${sections}
    ],
${formatFaq(body.faq)}
  },`;
}

function appendArticles(locale) {
  const file = join(ARTICLES_DIR, `${locale}.ts`);
  let content = readFileSync(file, "utf8");
  const marker = "\n};\n\nexport default articles;";
  if (!content.includes(marker)) {
    throw new Error(`Unexpected end of ${file}`);
  }

  const additions = SLUGS.map((slug) => {
    const body = ARTICLES[slug]?.[locale];
    if (!body) throw new Error(`Missing ${slug} for locale ${locale}`);
    if (content.includes(`"${slug}": {`)) {
      console.warn(`  [${locale}] "${slug}" already exists — skipped`);
      return "";
    }
    return formatArticle(slug, body);
  }).join("");

  if (!additions.trim()) return;

  content = content.replace(marker, `${additions}\n};\n\nexport default articles;`);
  writeFileSync(file, content);
  console.log(`  [${locale}] appended ${SLUGS.length} article(s)`);
}

function updateMessages(locale) {
  const file = join("src/messages", `${locale}.json`);
  const json = JSON.parse(readFileSync(file, "utf8"));
  for (const slug of SLUGS) {
    const meta = META[slug]?.[locale];
    if (!meta) throw new Error(`Missing meta for ${slug}/${locale}`);
    json.blog.posts[slug] = meta;
  }
  writeFileSync(file, JSON.stringify(json, null, 2) + "\n");
  console.log(`  [${locale}] messages updated`);
}

function updateBlogTs() {
  let content = readFileSync(BLOG_TS, "utf8");
  for (const slug of SLUGS) {
    const minutes = READ_MINUTES[slug];
    const re = new RegExp(
      `(\\{ slug: "${slug}", category: "[^"]+", readMinutes: )\\d+(, published: )false`
    );
    if (!re.test(content)) {
      console.warn(`  blog.ts: "${slug}" not found or already published`);
      continue;
    }
    content = content.replace(re, `$1${minutes ?? 8}$2true`);
  }
  writeFileSync(BLOG_TS, content);
  console.log("  blog.ts published flags updated");
}

console.log("Publishing blog batch…");
for (const locale of LOCALES) {
  appendArticles(locale);
  updateMessages(locale);
}
updateBlogTs();
console.log("Done.");
