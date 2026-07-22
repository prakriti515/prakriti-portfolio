"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Badge } from "@/components/ui/Badge";
import { ContentSection } from "@/components/ui/ContentSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Article } from "@/data/articles";
import { filterArticles } from "@/lib/articles";
import { cn } from "@/lib/utils";

type BlogPageContentProps = {
  articles: Article[];
  categories: string[];
  tags: string[];
};

export function BlogPageContent({
  articles,
  categories,
  tags,
}: BlogPageContentProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filterArticles(articles, {
        search,
        category: category ?? undefined,
        tag: tag ?? undefined,
      }),
    [articles, search, category, tag],
  );

  return (
    <ContentSection>
      <SectionHeading
        label="Engineering Notes"
        title="Blog"
        description="Infrastructure, DevOps, and production operations — structured notes and walkthroughs."
        className="mb-10"
      />

      <div className="mb-8 space-y-4 rounded-xl border border-border bg-card p-5">
        <label className="block">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title, excerpt, category, or tag…"
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Categories
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm transition-colors",
                category === null
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-white text-text-secondary hover:border-primary/30",
              )}
            >
              All
            </button>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setCategory((current) => (current === item ? null : item))
                }
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm transition-colors",
                  category === item
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-white text-text-secondary hover:border-primary/30",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setTag((current) => (current === item ? null : item))
                }
                aria-pressed={tag === item}
              >
                <Badge
                  variant={tag === item ? "primary" : "default"}
                  className="cursor-pointer"
                >
                  {item}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-border bg-white p-8 text-center text-sm text-text-secondary">
          No articles match your filters. Clear search, category, or tag to see
          all posts.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      <p className="mt-8 text-center text-sm text-text-secondary">
        Showing {filtered.length} of {articles.length} articles
      </p>
    </ContentSection>
  );
}
