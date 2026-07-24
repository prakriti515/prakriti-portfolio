import Link from "next/link";
import { FeaturedProjectCard } from "@/components/home/FeaturedProjectCard";
import { ArrowRightIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="border-y border-border bg-card/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-xl text-text-secondary">
              Production infrastructure work — architecture, automation, and
              operational outcomes.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-secondary"
          >
            View All Projects
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
