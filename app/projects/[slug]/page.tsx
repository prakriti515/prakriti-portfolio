import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPageContent } from "@/components/projects/CaseStudyPageContent";
import { PageShell } from "@/components/layout/PageShell";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectUrl,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: getProjectUrl(project.id),
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <CaseStudyPageContent project={project} />
    </PageShell>
  );
}
