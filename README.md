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

Open [http://localhost:3000/en](http://localhost:3000/en). In `next dev` the bare
`/` has no handler — locale negotiation is done by the Cloudflare Pages Function,
so use `npm run preview` to exercise it.

## Build

```bash
npm run build     # static export into ./out
```

## Deployment — Cloudflare Pages

The site is a static export (`output: "export"`), so there is no Next.js
middleware. Everything that middleware used to do is handled at the edge by
Cloudflare Pages.

### Dashboard settings

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

Environment variables (Production **and** Preview):

```bash
NODE_VERSION=22
NEXT_PUBLIC_SITE_URL=https://pppoker77.com
```

### Edge configuration

| File | Purpose |
|------|---------|
| `functions/index.ts` | Handles `/` only: negotiates a locale from the `NEXT_LOCALE` cookie, then `Accept-Language`, then `CF-IPCountry`, and 302s to `/{locale}` |
| `public/_routes.json` | Restricts Function invocations to `/`, so every other request is served as a free static asset |
| `public/_headers` | Security headers, immutable caching for `/_next/static/*`, `no-cache` for `sw.js` |
| `public/_redirects` | `favicon.ico`, locale-less deep links (`/vip` → `/en/vip`) and legacy aliases (`/pt-br/*` → `/pt/*`) |

Files in `public/` are copied verbatim into `out/`, which is where Cloudflare
expects them.

### Local preview

```bash
npm run preview   # builds, then serves ./out through wrangler with Functions
```

```bash
curl -sI http://localhost:8788/ -H 'Accept-Language: pt-BR'   # → 302 /pt
curl -sI http://localhost:8788/ -H 'CF-IPCountry: PH'         # → 302 /fil
```

### Deploy from the CLI

```bash
npx wrangler login
npm run deploy
```

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://pppoker77.com
```
