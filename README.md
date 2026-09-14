# Grand Club — PPPoker Website MVP

Mobile-first, multilingual website for the Grand PPPoker club with agent cashier.

## Stack

- **Next.js 15** (App Router, SSG)
- **Tailwind CSS 4**
- **next-intl** — 6 languages: `pt`, `es`, `en`, `uz`, `ru`, `fil`

## Pages

| Route | Description |
|-------|-------------|
| `/[locale]` | Homepage — hero, Club ID, features, steps |
| `/[locale]/join` | Onboarding wizard |
| `/[locale]/deposit` | Payment methods |
| `/[locale]/withdraw` | Withdrawal guide |
| `/[locale]/rakeback` | VIP table + calculator |
| `/[locale]/download` | App download links |
| `/[locale]/faq` | FAQ accordion |
| `/[locale]/blog` | Blog listing (10 starter articles) |

## Configuration

Edit `src/lib/constants.ts` to set real Club ID, Referral ID and contact links:

```ts
export const CLUB_ID = "8888888";
export const REFERRAL_ID = "9999999";
export const CONTACT = {
  telegram: "https://t.me/grand_pppoker",
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
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
