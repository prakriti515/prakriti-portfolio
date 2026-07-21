/**
 * Blog articles (homepage preview)
 *
 * Add entries only for articles you have written or will publish.
 * Remove unused slots. Slug must match the future route: /blog/[slug]
 *
 * Excerpt structure:
 *   What the reader learns + primary systems or practices covered.
 */

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    id: "replace-article-slug-1",
    title: "REPLACE: Article Title",
    excerpt:
      "REPLACE: Summary of the problem, approach, and systems discussed. State what a reader will take away — not generic advice.",
    date: "REPLACE: Mon YYYY",
    readTime: "REPLACE: N min read",
    category: "REPLACE: Category", // e.g. Cloud | CI/CD | SRE | Security
    slug: "replace-article-slug-1",
    tags: ["REPLACE", "Tags"],
  },
  {
    id: "replace-article-slug-2",
    title: "REPLACE: Article Title",
    excerpt:
      "REPLACE: Summary of the problem, approach, and systems discussed.",
    date: "REPLACE: Mon YYYY",
    readTime: "REPLACE: N min read",
    category: "REPLACE: Category",
    slug: "replace-article-slug-2",
    tags: ["REPLACE", "Tags"],
  },
  {
    id: "replace-article-slug-3",
    title: "REPLACE: Article Title",
    excerpt:
      "REPLACE: Summary of the problem, approach, and systems discussed.",
    date: "REPLACE: Mon YYYY",
    readTime: "REPLACE: N min read",
    category: "REPLACE: Category",
    slug: "replace-article-slug-3",
    tags: ["REPLACE", "Tags"],
  },
];
