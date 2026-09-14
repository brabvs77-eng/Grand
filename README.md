# PPPoker77 — Grand Club Website

Mobile-first, multilingual website for the Grand PPPoker club with agent cashier.

**Production domain:** [pppoker77.com](https://pppoker77.com)

## Stack

- **Next.js 15** (App Router, fully static export of 180+ pages)
- **Tailwind CSS 4**
- **next-intl** — 6 languages: `pt`, `es`, `en`, `uz`, `ru`, `fil`

## Pages

| Route | Description |
|-------|-------------|
| `/[locale]` | Homepage — hero, Club ID, features, steps |
| `/[locale]/join` | Onboarding wizard |
| `/[locale]/deposit` | Payment methods by region |
| `/[locale]/withdraw` | Withdrawal guide |
| `/[locale]/rakeback` | VIP table + rakeback calculator |
| `/[locale]/vip` | Tier perks + interactive progress bar |
| `/[locale]/bonuses` | 10 promotions with terms |
| `/[locale]/diamonds` | Packs, usage and buyback |
| `/[locale]/tools` | Rakeback, bankroll and pot odds calculators |
| `/[locale]/download` | App download links |
| `/[locale]/faq` | FAQ accordion |
| `/[locale]/blog` | Articles with full localized bodies |

## Content system

The editorial plan lives in `src/lib/blog.ts` as 50 planned articles. A post is
listed on the blog, prerendered and added to the sitemap only when
`published: true`, which requires a full body in **every** locale under
`src/content/articles/<locale>.ts`.

To publish a new article:

1. Add the body to all six files in `src/content/articles/`.
2. Add `title` and `excerpt` under `blog.posts.<slug>` in every `src/messages/<locale>.json`.
3. Flip `published` to `true` in `src/lib/blog.ts`.

Article pages emit `Article` and `FAQPage` JSON-LD automatically.

## SEO

- Per-locale canonical URLs and `hreflang` with `x-default`
- `sitemap.xml` with language alternates, `robots.txt`
- Open Graph images generated per locale at build time
- `Organization` JSON-LD on every page

## PWA

Web manifest, generated icons (no binary assets in the repo), a service worker
with an offline fallback page, and `standalone` display mode.

## Configuration

Edit `src/lib/constants.ts` to set the real Club ID, Referral ID and contacts:

```ts
export const CLUB_ID = "8888888";
export const REFERRAL_ID = "9999999";
export const CONTACT = {
  telegram: "https://t.me/pppoker77",
  whatsapp: "https://wa.me/5511999999999",
};
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en`.

## Build

```bash
npm run build
npm start
```

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://pppoker77.com
```
