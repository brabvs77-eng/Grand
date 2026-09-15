export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pppoker77.com";
export const SITE_NAME = "PPPoker77 — Grand Club";

/** Bump when favicon assets change to bust browser/CDN caches. */
export const FAVICON_VERSION = "6";

export const CLUB_NAME = "GrandPoker";
export const CLUB_ID = "1074072";
export const REFERRAL_ID = "9999999";

/** 1 club chip equals 1 USD at the cashier. */
export const CHIP_USD_RATE = 1;

export const TELEGRAM_BOT = {
  handle: "@grandppuzbot",
  url: "https://t.me/grandppuzbot",
};

export const TELEGRAM_SUPPORT = {
  handle: "@Grand_Poker_Reception",
  url: "https://t.me/Grand_Poker_Reception",
};

export const CONTACT = {
  /** Automated cashier bot for deposits and withdrawals. */
  telegram: TELEGRAM_BOT.url,
  /** 24/7 player support desk in Telegram. */
  support: TELEGRAM_SUPPORT.url,
};

/** Blog posts that should surface the Telegram bot callout. */
export const BOT_CALLOUT_SLUGS = new Set([
  "pppoker-guide-2026",
  "join-grand-club",
  "club-id-explained",
  "deposit-methods",
  "withdraw-guide",
  "welcome-bonus-terms",
  "rakeback-explained",
  "diamonds-guide",
  "choose-reliable-agent",
  "usdt-deposits-guide",
  "referral-program-guide",
  "pppoker-uzbekistan",
  "local-payments-guide",
  "pppoker-brazil",
  "pppoker-latam",
  "pppoker-russia-cis",
  "pppoker-philippines",
  "grand-payout-guarantee",
  "rakeback-comparison",
  "first-session-checklist",
  "rake-structure-explained",
  "mtt-strategy-grand",
  "become-grand-agent",
]);

export const VIP_LEVELS = [
  { key: "bronze", rake: 0, rb: 45 },
  { key: "silver", rake: 200, rb: 50 },
  { key: "gold", rake: 1000, rb: 55 },
  { key: "platinum", rake: 3000, rb: 58 },
  { key: "diamond", rake: 10000, rb: 60 },
] as const;

export const DIAMOND_PACKS = [
  { key: "starter", diamonds: 780, price: 12.99, discount: 0 },
  { key: "standard", diamonds: 3900, price: 59.99, discount: 5 },
  { key: "pro", diamonds: 7800, price: 109.99, discount: 10 },
  { key: "clubOwner", diamonds: 48000, price: 649, discount: 15 },
] as const;

export const BONUSES = [
  { key: "welcome", highlight: "100%" },
  { key: "reload", highlight: "25%" },
  { key: "rbLadder", highlight: "60%" },
  { key: "referral", highlight: "30%" },
  { key: "badBeat", highlight: "1 BB" },
  { key: "freeroll", highlight: "$500" },
  { key: "leaderboard", highlight: "$3,000" },
  { key: "firstWithdrawal", highlight: "+5%" },
  { key: "birthday", highlight: "20%" },
  { key: "agentPack", highlight: "40%" },
] as const;
