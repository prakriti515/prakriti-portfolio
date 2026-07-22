import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";
import { getProjectUrl } from "@/lib/projects";

type ProjectPagerProps = {
  previous: Project | null;
  next: Project | null;
};

export function ProjectPager({ previous, next }: ProjectPagerProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
      aria-label="Project navigation"
    >
      {previous ? (
        <Link
          href={getProjectUrl(previous.id)}
          className="group rounded-xl border border-border bg-white p-5 transition-colors hover:border-primary/25 hover:bg-card"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Previous
          </p>
          <p className="mt-2 font-semibold text-text-primary group-hover:text-primary">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={getProjectUrl(next.id)}
          className="group rounded-xl border border-border bg-white p-5 text-right transition-colors hover:border-primary/25 hover:bg-card sm:col-start-2"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Next
          </p>
          <p className="mt-2 inline-flex items-center justify-end gap-1 font-semibold text-text-primary group-hover:text-primary">
            {next.title}
            <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
