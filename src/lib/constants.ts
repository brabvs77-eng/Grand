export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pppoker77.com";
export const SITE_NAME = "PPPoker77 — Grand Club";

export const CLUB_ID = "8888888";
export const REFERRAL_ID = "9999999";

export const CONTACT = {
  telegram: "https://t.me/pppoker77",
  whatsapp: "https://wa.me/5511999999999",
};

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
