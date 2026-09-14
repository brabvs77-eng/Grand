export type BlogPost = {
  slug: string;
  category: "onboarding" | "money" | "game" | "tools" | "safety";
  readMinutes: number;
};

export const blogPosts: BlogPost[] = [
  { slug: "pppoker-guide-2026", category: "onboarding", readMinutes: 8 },
  { slug: "how-to-download-pppoker", category: "onboarding", readMinutes: 5 },
  { slug: "join-grand-club", category: "onboarding", readMinutes: 4 },
  { slug: "club-id-explained", category: "onboarding", readMinutes: 3 },
  { slug: "deposit-methods", category: "money", readMinutes: 6 },
  { slug: "withdraw-guide", category: "money", readMinutes: 5 },
  { slug: "rakeback-explained", category: "money", readMinutes: 7 },
  { slug: "welcome-bonus-terms", category: "money", readMinutes: 4 },
  { slug: "vip-program-guide", category: "money", readMinutes: 6 },
  { slug: "diamonds-guide", category: "tools", readMinutes: 5 },
];
