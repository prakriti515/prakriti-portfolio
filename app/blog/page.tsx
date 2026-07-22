import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/BlogPageContent";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPageMeta } from "@/data/blogPage";
import {
  getAllArticles,
  getAllArticleTags,
  getArticleCategories,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: blogPageMeta.title,
  description: blogPageMeta.description,
};

export default function BlogPage() {
  const articles = getAllArticles();
  const categories = getArticleCategories();
  const tags = getAllArticleTags();

  return (
    <PageShell>
      <PageHeader
        label="Blog"
        title={blogPageMeta.title}
        description={blogPageMeta.description}
      />
      <BlogPageContent
        articles={articles}
        categories={categories}
        tags={tags}
      />
    </PageShell>
  );
}
