import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { getProjectUrl } from "@/lib/projects";

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Link
      href={getProjectUrl(project.id)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c1020]/90 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:bg-[#10152b] hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      {/* Diagram / Architecture Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-[#070b16]">
        <Image
          src={project.architecturePreview}
          alt={`Architecture for ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1020]/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-indigo-200">
          {project.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-white/5 bg-[#141a30] px-3 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-indigo-500/20 group-hover:text-indigo-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
