import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { LinkedinIcon, ExternalLinkIcon } from "@/components/ui/icons";
import type { BehindProductionPost } from "@/data/behindProduction";
import { cn } from "@/lib/utils";

type BehindProductionCardProps = {
  post: BehindProductionPost;
  className?: string;
};

export function BehindProductionCard({
  post,
  className,
}: BehindProductionCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-secondary/30 hover:shadow-md hover:shadow-secondary/5",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2]/10">
            <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
          </div>
          <span className="text-sm font-medium text-[#0A66C2]">
            {post.series}
          </span>
        </div>
        <span className="text-sm text-text-secondary">{post.date}</span>
      </div>

      <h3 className="text-lg font-semibold leading-snug text-text-primary transition-colors group-hover:text-secondary">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {post.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm text-text-secondary">{post.readTime}</span>
        <Link
          href={post.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
        >
          Read on LinkedIn
          <ExternalLinkIcon />
        </Link>
      </div>
    </article>
  );
}
