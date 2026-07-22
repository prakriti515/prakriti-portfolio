import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Article } from "@/data/articles";
import { getArticleUrl, getReadingTimeLabel } from "@/lib/articles";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  className?: string;
};

export function ArticleCard({ article, className }: ArticleCardProps) {
  const readTime = getReadingTimeLabel(article);

  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5",
        className,
      )}
    >
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary">
        <Badge variant="primary">{article.category}</Badge>
        <time dateTime={article.date}>{article.date}</time>
        <span aria-hidden="true">·</span>
        <span>{readTime}</span>
      </div>

      <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-primary">
        <Link href={getArticleUrl(article.slug)}>{article.title}</Link>
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {article.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <Link
        href={getArticleUrl(article.slug)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        Read Article
        <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
