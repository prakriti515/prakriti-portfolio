import Link from "next/link";
import { BehindProductionCard } from "@/components/ui/BehindProductionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkedinIcon, ArrowRightIcon } from "@/components/ui/icons";
import { behindProductionPosts } from "@/data/behindProduction";
import { siteConfig } from "@/data/site";

export function BehindProductionSection() {
  return (
    <section id="behind-production" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Behind Production"
            title="Engineering Insights from the Field"
            description="A LinkedIn engineering series sharing real-world lessons from operating production systems at scale."
            className="mb-0"
          />
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-[#0A66C2]/30 hover:text-[#0A66C2]"
          >
            <LinkedinIcon className="h-4 w-4" />
            Follow on LinkedIn
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {behindProductionPosts.map((post) => (
            <BehindProductionCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
          >
            View all posts on LinkedIn
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
