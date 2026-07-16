import Link from "next/link";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { articles } from "@/data/articles";

export function ArticlesSection() {
  return (
    <section id="articles" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Blog"
            title="Latest Articles"
            description="Technical writing on cloud infrastructure, DevOps practices, and production engineering."
            className="mb-0"
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-primary/30 hover:text-primary"
          >
            View All Articles
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
