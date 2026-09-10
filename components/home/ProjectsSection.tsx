import Link from "next/link";
import { FeaturedProjectCard } from "@/components/home/FeaturedProjectCard";
import { ArrowRightIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="relative py-20 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-600/5 blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
          <div>
            <div className="mb-2.5 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Real-world projects solving infrastructure challenges
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            View All Projects
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* 3-Column Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
