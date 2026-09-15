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
  { slug: "pppoker-guide-2026", category: "onboarding", readMinutes: 7, published: true },
  { slug: "how-to-download-pppoker", category: "onboarding", readMinutes: 8, published: true },
  { slug: "join-grand-club", category: "onboarding", readMinutes: 6, published: true },
  { slug: "club-id-explained", category: "onboarding", readMinutes: 7, published: true },
  { slug: "pppoker-interface-guide", category: "onboarding", readMinutes: 6, published: false },
  { slug: "first-session-checklist", category: "onboarding", readMinutes: 5, published: false },
  { slug: "pppoker-account-settings", category: "onboarding", readMinutes: 4, published: false },
  { slug: "union-vs-club", category: "onboarding", readMinutes: 6, published: false },
  { slug: "club-rules-and-etiquette", category: "onboarding", readMinutes: 5, published: false },
  { slug: "common-join-errors", category: "onboarding", readMinutes: 4, published: false },

  // B — Money & bonuses
  { slug: "rakeback-explained", category: "money", readMinutes: 7, published: true },
  { slug: "deposit-methods", category: "money", readMinutes: 7, published: true },
  { slug: "withdraw-guide", category: "money", readMinutes: 7, published: true },
  { slug: "welcome-bonus-terms", category: "money", readMinutes: 7, published: true },
  { slug: "vip-program-guide", category: "money", readMinutes: 9, published: true },
  { slug: "usdt-deposits-guide", category: "money", readMinutes: 6, published: false },
  { slug: "rakeback-comparison", category: "money", readMinutes: 6, published: false },
  { slug: "referral-program-guide", category: "money", readMinutes: 5, published: false },
  { slug: "local-payments-guide", category: "money", readMinutes: 7, published: false },
  { slug: "rake-structure-explained", category: "money", readMinutes: 6, published: false },

  // C — Game & formats
  { slug: "nlh-cash-basics", category: "game", readMinutes: 8, published: false },
  { slug: "plo5-guide", category: "game", readMinutes: 8, published: false },
  { slug: "mtt-strategy-grand", category: "game", readMinutes: 9, published: false },
  { slug: "sng-and-spins", category: "game", readMinutes: 6, published: false },
  { slug: "ofc-chinese-poker", category: "game", readMinutes: 7, published: false },
  { slug: "short-deck-guide", category: "game", readMinutes: 7, published: false },
  { slug: "all-in-or-fold", category: "game", readMinutes: 4, published: false },
  { slug: "multitabling-pppoker", category: "game", readMinutes: 5, published: false },
  { slug: "vpip-requirements", category: "game", readMinutes: 5, published: false },
  { slug: "tournament-series-2026", category: "game", readMinutes: 6, published: false },

  // D — Tools & software
  { slug: "hud-in-pppoker", category: "tools", readMinutes: 7, published: false },
  { slug: "vip-card-worth-it", category: "tools", readMinutes: 5, published: false },
  { slug: "diamonds-guide", category: "tools", readMinutes: 9, published: true },
  { slug: "hand-converters", category: "tools", readMinutes: 6, published: false },
  { slug: "poker-calculators", category: "tools", readMinutes: 6, published: false },
  { slug: "reading-poker-stats", category: "tools", readMinutes: 7, published: false },
  { slug: "bankroll-management", category: "tools", readMinutes: 7, published: false },
  { slug: "tilt-control", category: "tools", readMinutes: 6, published: false },

  // E — Safety & trust
  { slug: "choose-reliable-agent", category: "safety", readMinutes: 7, published: true },
  { slug: "scam-red-flags", category: "safety", readMinutes: 6, published: false },
  { slug: "grand-payout-guarantee", category: "safety", readMinutes: 5, published: false },
  { slug: "pppoker-vs-pokerbros-vs-clubgg", category: "safety", readMinutes: 8, published: false },
  { slug: "legality-by-country", category: "safety", readMinutes: 8, published: false },
  { slug: "rng-fair-play", category: "safety", readMinutes: 5, published: false },

  // F — Regional
  { slug: "pppoker-brazil", category: "regional", readMinutes: 7, published: false },
  { slug: "pppoker-latam", category: "regional", readMinutes: 7, published: false },
  { slug: "pppoker-russia-cis", category: "regional", readMinutes: 7, published: false },
  { slug: "pppoker-philippines", category: "regional", readMinutes: 7, published: false },
  { slug: "pppoker-uzbekistan", category: "regional", readMinutes: 6, published: false },
  { slug: "become-grand-agent", category: "regional", readMinutes: 6, published: false },
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
