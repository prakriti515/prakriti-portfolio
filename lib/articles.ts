import {
  articles,
  type Article,
  type ArticleBlock,
  type ArticleHeadingBlock,
} from "@/data/articles";

export function getArticleUrl(slug: string): string {
  return `/blog/${slug}`;
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function getArticleCategories(): string[] {
  return [...new Set(articles.map((article) => article.category))].sort();
}

export function getAllArticleTags(): string[] {
  const tags = new Set<string>();
  for (const article of articles) {
    for (const tag of article.tags) {
      tags.add(tag);
    }
  }
  return [...tags].sort();
}

export function estimateReadingTimeMinutes(content: ArticleBlock[]): number {
  let words = 0;

  for (const block of content) {
    switch (block.type) {
      case "paragraph":
      case "callout":
        words += block.text.split(/\s+/).filter(Boolean).length;
        break;
      case "heading":
        words += block.text.split(/\s+/).filter(Boolean).length;
        break;
      case "list":
        words += block.items.join(" ").split(/\s+/).filter(Boolean).length;
        break;
      case "code":
        words += Math.ceil(block.code.split("\n").length * 1.5);
        break;
      default:
        break;
    }
  }

  return Math.max(1, Math.ceil(words / 200));
}

export function getReadingTimeLabel(article: Article): string {
  const minutes = estimateReadingTimeMinutes(article.content);
  return `${minutes} min read`;
}

export function extractHeadings(content: ArticleBlock[]): ArticleHeadingBlock[] {
  return content.filter(
    (block): block is ArticleHeadingBlock => block.type === "heading",
  );
}

export function getAdjacentArticles(slug: string): {
  previous: Article | null;
  next: Article | null;
} {
  const index = articles.findIndex((article) => article.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index < articles.length - 1 ? articles[index + 1] : null,
  };
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);

  if (!current) {
    return [];
  }

  const currentTags = new Set(current.tags);

  return articles
    .filter((article) => article.slug !== slug)
    .map((article) => {
      const tagOverlap = article.tags.filter((tag) => currentTags.has(tag))
        .length;
      const categoryBonus = article.category === current.category ? 2 : 0;
      return { article, score: tagOverlap + categoryBonus };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ article }) => article);
}

export function filterArticles(
  items: Article[],
  query: {
    search?: string;
    category?: string;
    tag?: string;
  },
): Article[] {
  const search = query.search?.trim().toLowerCase();

  return items.filter((article) => {
    if (query.category && article.category !== query.category) {
      return false;
    }

    if (query.tag && !article.tags.includes(query.tag)) {
      return false;
    }

    if (!search) {
      return true;
    }

    const haystack = [
      article.title,
      article.excerpt,
      article.category,
      ...article.tags,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(search);
  });
}
