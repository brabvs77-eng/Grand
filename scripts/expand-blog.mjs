/**
 * Inserts two new sections before `faq:` in each published blog article
 * across all locale files. Idempotent — skips sections whose heading
 * already exists in the slug block.
 *
 * Run: node scripts/expand-blog.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { EXPANSIONS, SLUGS } from "./expand-blog-content.mjs";

const LOCALES = ["en", "ru", "pt", "es", "uz", "fil"];
const ARTICLES_DIR = "src/content/articles";
const BLOG_TS = "src/lib/blog.ts";
const READ_MINUTES_DELTA = 3;

function escapeTs(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatSection(section) {
  const paragraphs = section.paragraphs
    .map((p) => `          "${escapeTs(p)}",`)
    .join("\n");
  return `      {
        heading: "${escapeTs(section.heading)}",
        paragraphs: [
${paragraphs}
        ],
      }`;
}

/** Find the character range of a top-level slug object in the file. */
function findSlugBlock(content, slug) {
  const marker = `"${slug}": {`;
  const start = content.indexOf(marker);
  if (start === -1) return null;

  let pos = start + marker.length;
  let depth = 1;
  while (pos < content.length && depth > 0) {
    const ch = content[pos];
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
    pos++;
  }
  return { start, end: pos, block: content.slice(start, pos) };
}

function insertSections(content, slug, sections, locale) {
  const found = findSlugBlock(content, slug);
  if (!found) {
    console.warn(`  [${locale}] slug "${slug}" not found — skipped`);
    return { content, inserted: 0 };
  }

  const faqMarker = "\n    ],\n    faq:";
  const faqIdx = found.block.lastIndexOf(faqMarker);
  if (faqIdx === -1) {
    console.warn(`  [${locale}] "${slug}": no sections→faq boundary — skipped`);
    return { content, inserted: 0 };
  }

  const toInsert = sections.filter((s) => {
    const headingMarker = `heading: "${escapeTs(s.heading)}"`;
    return !found.block.includes(headingMarker);
  });

  if (toInsert.length === 0) {
    return { content, inserted: 0 };
  }

  const insertion = toInsert.map(formatSection).join(",\n") + ",";
  const absInsertAt = found.start + faqIdx;
  const newContent =
    content.slice(0, absInsertAt) + "\n" + insertion + content.slice(absInsertAt);

  return { content: newContent, inserted: toInsert.length };
}

function patchLocale(locale) {
  const filePath = join(ARTICLES_DIR, `${locale}.ts`);
  let content = readFileSync(filePath, "utf8");
  let totalInserted = 0;
  const details = [];

  for (const slug of SLUGS) {
    const expansion = EXPANSIONS[slug];
    if (!expansion) {
      console.warn(`  No expansion data for "${slug}"`);
      continue;
    }

    const sections = expansion.map((entry) => entry[locale]);
    const { content: updated, inserted } = insertSections(content, slug, sections, locale);
    content = updated;

    if (inserted > 0) {
      totalInserted += inserted;
      const headings = sections
        .filter((s) => updated.includes(`heading: "${escapeTs(s.heading)}"`))
        .map((s) => s.heading);
      details.push({ slug, inserted, headings });
    }
  }

  if (totalInserted > 0) {
    writeFileSync(filePath, content, "utf8");
  }

  return { locale, totalInserted, details };
}

/** Bump readMinutes only for slugs that received new sections this run. */
function patchReadMinutes(slugsWithInserts) {
  if (slugsWithInserts.size === 0) return 0;

  let content = readFileSync(BLOG_TS, "utf8");
  let updated = 0;

  for (const slug of slugsWithInserts) {
    const re = new RegExp(
      `(\\{\\s*slug:\\s*"${slug}"[^}]*readMinutes:\\s*)(\\d+)([^}]*published:\\s*true)`,
    );
    const match = content.match(re);
    if (!match) {
      console.warn(`  blog.ts: published post "${slug}" not found`);
      continue;
    }

    const current = parseInt(match[2], 10);
    const next = current + READ_MINUTES_DELTA;
    content = content.replace(re, `$1${next}$3`);
    updated++;
  }

  if (updated > 0) {
    writeFileSync(BLOG_TS, content, "utf8");
  }

  return updated;
}

// --- run ---
console.log("Expanding blog articles …\n");

const summary = [];
const slugsWithInserts = new Set();

for (const locale of LOCALES) {
  const result = patchLocale(locale);
  summary.push(result);
  console.log(
    `  ${locale}.ts — ${result.totalInserted} section(s) inserted` +
      (result.details.length ? "" : " (already up to date)"),
  );
  for (const d of result.details) {
    slugsWithInserts.add(d.slug);
    console.log(`    · ${d.slug}: ${d.inserted} → ${d.headings.join(" | ")}`);
  }
}

const minutesUpdated = patchReadMinutes(slugsWithInserts);
console.log(`\nblog.ts — readMinutes +${READ_MINUTES_DELTA} for ${minutesUpdated} published post(s)`);

const totalSections = summary.reduce((n, r) => n + r.totalInserted, 0);
console.log(`\nDone. ${totalSections} section block(s) written across ${LOCALES.length} locale files.`);
