import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/data/projects";

type RelatedProjectsProps = {
  projects: Project[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="related-projects" className="scroll-mt-28 border-t border-border pt-12">
      <SectionHeading
        label="Related"
        title="Related Projects"
        description="Other work with overlapping technologies or infrastructure patterns."
        className="mb-8"
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            showArchitecturePreview={false}
          />
        ))}
      </div>
    </section>
  );
}
