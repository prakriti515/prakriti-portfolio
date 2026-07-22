/**
 * Blog articles — structured content blocks (no MDX required).
 *
 * Replace REPLACE_* fields before publishing.
 * Slug must match route: /blog/[slug]
 * Add headings (level 2 or 3) for table of contents entries.
 */

export type ArticleHeadingBlock = {
  type: "heading";
  level: 2 | 3;
  id: string;
  text: string;
};

export type ArticleParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type ArticleCodeBlock = {
  type: "code";
  language: string;
  code: string;
  filename?: string;
};

export type ArticleCalloutBlock = {
  type: "callout";
  variant: "info" | "warning" | "tip";
  title?: string;
  text: string;
};

export type ArticleListBlock = {
  type: "list";
  ordered: boolean;
  items: string[];
};

export type ArticleBlock =
  | ArticleHeadingBlock
  | ArticleParagraphBlock
  | ArticleCodeBlock
  | ArticleCalloutBlock
  | ArticleListBlock;

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  content: ArticleBlock[];
};

function createArticleBody(slug: string): ArticleBlock[] {
  return [
    {
      type: "paragraph",
      text: "REPLACE: Introduce the operational or infrastructure problem this article addresses and who it is written for (platform, DevOps, or SRE readers).",
    },
    {
      type: "heading",
      level: 2,
      id: `${slug}-context`,
      text: "Context",
    },
    {
      type: "paragraph",
      text: "REPLACE: Environment, constraints, and baseline behavior before changes — stack, scale, and risk.",
    },
    {
      type: "callout",
      variant: "info",
      title: "Scope",
      text: "REPLACE: What this article covers and what it intentionally does not cover.",
    },
    {
      type: "heading",
      level: 2,
      id: `${slug}-approach`,
      text: "Approach",
    },
    {
      type: "paragraph",
      text: "REPLACE: Design or implementation approach — tools, control plane, and validation steps.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "REPLACE: Step or decision point one",
        "REPLACE: Step or decision point two",
        "REPLACE: Step or decision point three",
      ],
    },
    {
      type: "heading",
      level: 3,
      id: `${slug}-example-config`,
      text: "Example configuration",
    },
    {
      type: "paragraph",
      text: "REPLACE: Explain the snippet below — what it provisions, enforces, or automates.",
    },
    {
      type: "code",
      language: "hcl",
      filename: "REPLACE: main.tf",
      code: `# REPLACE: Example Terraform or pipeline snippet
resource "aws_s3_bucket" "example" {
  bucket = "REPLACE-bucket-name"

  tags = {
    Environment = "REPLACE"
    ManagedBy   = "terraform"
  }
}`,
    },
    {
      type: "heading",
      level: 2,
      id: `${slug}-operations`,
      text: "Operations",
    },
    {
      type: "paragraph",
      text: "REPLACE: How this is monitored, rolled back, or operated in production.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Operational note",
      text: "REPLACE: Runbook link, alert, or review practice worth documenting.",
    },
    {
      type: "heading",
      level: 2,
      id: `${slug}-summary`,
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "REPLACE: Closing takeaway — what to apply next and what to measure.",
    },
  ];
}

export const articles: Article[] = [
  {
    id: "replace-article-slug-1",
    slug: "replace-article-slug-1",
    title: "REPLACE: Article Title",
    excerpt:
      "REPLACE: Summary of the problem, approach, and systems discussed. State what a reader will take away.",
    date: "REPLACE: Mon YYYY",
    category: "REPLACE: Category",
    tags: ["REPLACE", "Tags"],
    content: createArticleBody("replace-article-slug-1"),
  },
  {
    id: "replace-article-slug-2",
    slug: "replace-article-slug-2",
    title: "REPLACE: Article Title",
    excerpt:
      "REPLACE: Summary of the problem, approach, and systems discussed.",
    date: "REPLACE: Mon YYYY",
    category: "REPLACE: Category",
    tags: ["REPLACE", "Tags"],
    content: createArticleBody("replace-article-slug-2"),
  },
  {
    id: "replace-article-slug-3",
    slug: "replace-article-slug-3",
    title: "REPLACE: Article Title",
    excerpt:
      "REPLACE: Summary of the problem, approach, and systems discussed.",
    date: "REPLACE: Mon YYYY",
    category: "REPLACE: Category",
    tags: ["REPLACE", "Tags"],
    content: createArticleBody("replace-article-slug-3"),
  },
];
