export type BlogCategory =
  | "onboarding"
  | "money"
  | "game"
  | "tools"
  | "safety"
  | "regional";

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  readMinutes: number;
  /** Only posts with a full translated body are listed and indexed. */
  published: boolean;
};

/**
 * Editorial plan of 50 articles. Posts flip to `published` once the full body
 * exists in every locale under src/content/articles.
 */
export const blogPosts: BlogPost[] = [
  // A — Onboarding
  { slug: "pppoker-guide-2026", category: "onboarding", readMinutes: 10, published: true },
  { slug: "how-to-download-pppoker", category: "onboarding", readMinutes: 11, published: true },
  { slug: "join-grand-club", category: "onboarding", readMinutes: 9, published: true },
  { slug: "club-id-explained", category: "onboarding", readMinutes: 10, published: true },
  { slug: "pppoker-interface-guide", category: "onboarding", readMinutes: 9, published: true },
  { slug: "first-session-checklist", category: "onboarding", readMinutes: 9, published: true },
  { slug: "pppoker-account-settings", category: "onboarding", readMinutes: 4, published: false },
  { slug: "union-vs-club", category: "onboarding", readMinutes: 6, published: false },
  { slug: "club-rules-and-etiquette", category: "onboarding", readMinutes: 5, published: false },
  { slug: "common-join-errors", category: "onboarding", readMinutes: 4, published: false },

  // B — Money & bonuses
  { slug: "rakeback-explained", category: "money", readMinutes: 10, published: true },
  { slug: "deposit-methods", category: "money", readMinutes: 10, published: true },
  { slug: "withdraw-guide", category: "money", readMinutes: 10, published: true },
  { slug: "welcome-bonus-terms", category: "money", readMinutes: 10, published: true },
  { slug: "vip-program-guide", category: "money", readMinutes: 12, published: true },
  { slug: "usdt-deposits-guide", category: "money", readMinutes: 9, published: true },
  { slug: "rakeback-comparison", category: "money", readMinutes: 9, published: true },
  { slug: "referral-program-guide", category: "money", readMinutes: 8, published: true },
  { slug: "local-payments-guide", category: "money", readMinutes: 10, published: true },
  { slug: "rake-structure-explained", category: "money", readMinutes: 9, published: true },

  // C — Game & formats
  { slug: "nlh-cash-basics", category: "game", readMinutes: 9, published: true },
  { slug: "plo5-guide", category: "game", readMinutes: 9, published: true },
  { slug: "mtt-strategy-grand", category: "game", readMinutes: 9, published: true },
  { slug: "sng-and-spins", category: "game", readMinutes: 9, published: true },
  { slug: "ofc-chinese-poker", category: "game", readMinutes: 9, published: true },
  { slug: "short-deck-guide", category: "game", readMinutes: 9, published: true },
  { slug: "all-in-or-fold", category: "game", readMinutes: 4, published: false },
  { slug: "multitabling-pppoker", category: "game", readMinutes: 5, published: false },
  { slug: "vpip-requirements", category: "game", readMinutes: 5, published: false },
  { slug: "tournament-series-2026", category: "game", readMinutes: 6, published: false },

  // D — Tools & software
  { slug: "hud-in-pppoker", category: "tools", readMinutes: 8, published: true },
  { slug: "vip-card-worth-it", category: "tools", readMinutes: 5, published: false },
  { slug: "diamonds-guide", category: "tools", readMinutes: 12, published: true },
  { slug: "hand-converters", category: "tools", readMinutes: 6, published: false },
  { slug: "poker-calculators", category: "tools", readMinutes: 6, published: false },
  { slug: "reading-poker-stats", category: "tools", readMinutes: 7, published: false },
  { slug: "bankroll-management", category: "tools", readMinutes: 9, published: true },
  { slug: "tilt-control", category: "tools", readMinutes: 6, published: false },

  // E — Safety & trust
  { slug: "choose-reliable-agent", category: "safety", readMinutes: 10, published: true },
  { slug: "scam-red-flags", category: "safety", readMinutes: 8, published: true },
  { slug: "grand-payout-guarantee", category: "safety", readMinutes: 8, published: true },
  { slug: "pppoker-vs-pokerbros-vs-clubgg", category: "safety", readMinutes: 9, published: true },
  { slug: "legality-by-country", category: "safety", readMinutes: 10, published: true },
  { slug: "rng-fair-play", category: "safety", readMinutes: 5, published: false },

  // F — Regional
  { slug: "pppoker-brazil", category: "regional", readMinutes: 9, published: true },
  { slug: "pppoker-latam", category: "regional", readMinutes: 9, published: true },
  { slug: "pppoker-russia-cis", category: "regional", readMinutes: 9, published: true },
  { slug: "pppoker-philippines", category: "regional", readMinutes: 9, published: true },
  { slug: "pppoker-uzbekistan", category: "regional", readMinutes: 8, published: true },
  { slug: "become-grand-agent", category: "regional", readMinutes: 8, published: true },
];

export const publishedPosts = blogPosts.filter((post) => post.published);

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const COVER_WIDTH = 1200;
export const COVER_HEIGHT = 675;

/**
 * Every published post ships a generated cover in public/covers, named after
 * the slug, in a full and a card-sized variant. They deliberately do not live
 * under /blog, which the locale-less redirect in public/_redirects claims.
 */
export function coverImage(slug: string) {
  return {
    src: `/covers/${slug}.webp`,
    srcSet: `/covers/${slug}-sm.webp 600w, /covers/${slug}.webp 1200w`,
    width: COVER_WIDTH,
    height: COVER_HEIGHT,
  };
}
