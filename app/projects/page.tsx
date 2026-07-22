import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/projects/ProjectsPageContent";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { projectsPageMeta } from "@/data/projectsPage";

export const metadata: Metadata = {
  title: projectsPageMeta.title,
  description: projectsPageMeta.description,
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Projects"
        title={projectsPageMeta.title}
        description={projectsPageMeta.description}
      />
      <ProjectsPageContent />
    </PageShell>
  );
}
