import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon, ExternalLinkIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";
import { getProjectUrl, isValidGithubUrl } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  showArchitecturePreview?: boolean;
};

export function ProjectCard({
  project,
  className,
  showArchitecturePreview = true,
}: ProjectCardProps) {
  const caseStudyUrl = getProjectUrl(project.id);
  const showGithub = isValidGithubUrl(project.githubUrl);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-card">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {showArchitecturePreview && (
        <div className="border-y border-border bg-card px-4 py-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Architecture preview
          </p>
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg border border-border bg-background">
            <Image
              src={project.architecturePreview}
              alt={`Architecture preview for ${project.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-primary">
          <Link href={caseStudyUrl}>{project.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5">
          <Link
            href={caseStudyUrl}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View Case Study
            <ExternalLinkIcon />
          </Link>
          {showGithub && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              <GithubIcon />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
