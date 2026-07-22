import Link from "next/link";
import { ContentSection } from "@/components/ui/ContentSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export function ProjectsPageContent() {
  const allProjects = getAllProjects();

  return (
    <ContentSection>
      <SectionHeading
        label="Case Studies"
        title="Infrastructure & DevOps Projects"
        description="Production engineering work — architecture decisions, automation, security controls, and operational outcomes."
        className="mb-10"
      />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-text-secondary">
        {allProjects.length} project{allProjects.length === 1 ? "" : "s"} ·{" "}
        <Link href="/#contact" className="font-medium text-primary hover:underline">
          Discuss your infrastructure needs
        </Link>
      </p>
    </ContentSection>
  );
}
