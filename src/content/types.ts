export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleBody = {
  intro: string;
  sections: ArticleSection[];
  faq?: { q: string; a: string }[];
};

export type ArticleCollection = Record<string, ArticleBody>;
