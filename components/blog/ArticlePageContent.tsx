import Link from "next/link";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticlePager } from "@/components/blog/ArticlePager";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { Badge } from "@/components/ui/Badge";
import { ContentSection } from "@/components/ui/ContentSection";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Article } from "@/data/articles";
import {
  extractHeadings,
  getAdjacentArticles,
  getReadingTimeLabel,
  getRelatedArticles,
} from "@/lib/articles";

type ArticlePageContentProps = {
  article: Article;
};

export async function ArticlePageContent({ article }: ArticlePageContentProps) {
  const headings = extractHeadings(article.content).map((heading) => ({
    id: heading.id,
    text: heading.text,
    level: heading.level,
  }));
  const { previous, next } = getAdjacentArticles(article.slug);
  const related = getRelatedArticles(article.slug);
  const readTime = getReadingTimeLabel(article);

  return (
    <>
      <ReadingProgressBar />

      <div className="border-b border-border bg-card pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
          >
            <ArrowRightIcon className="rotate-180" />
            All Articles
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
              <Badge variant="primary">{article.category}</Badge>
              <time dateTime={article.date}>{article.date}</time>
              <span aria-hidden="true">·</span>
              <span>{readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {article.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <ShareButtons title={article.title} className="mt-8" />
          </div>
        </div>
      </div>

      <ContentSection containerClassName="max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-4">
              <TableOfContents headings={headings} />
            </div>
          </aside>

          <article id="article-content" className="min-w-0 max-w-3xl">
            <ArticleBody content={article.content} />
            <div className="mt-12 border-t border-border pt-8 lg:hidden">
              <TableOfContents headings={headings} />
            </div>
            <div className="mt-10">
              <ShareButtons title={article.title} />
            </div>
            <RelatedArticles articles={related} />
            <ArticlePager previous={previous} next={next} />
          </article>
        </div>
      </ContentSection>
    </>
  );
}
