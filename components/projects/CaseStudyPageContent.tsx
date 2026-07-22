import Image from "next/image";
import Link from "next/link";
import { CaseStudyBlock } from "@/components/projects/CaseStudyBlock";
import { CaseStudyGallery } from "@/components/projects/CaseStudyGallery";
import { InfrastructureDiagramSection } from "@/components/projects/InfrastructureDiagramSection";
import { ProjectPager } from "@/components/projects/ProjectPager";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { TechnologyStackSection } from "@/components/projects/TechnologyStackSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContentSection } from "@/components/ui/ContentSection";
import { GithubIcon, ArrowRightIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";
import {
  getAdjacentProjects,
  getRelatedProjects,
  isValidGithubUrl,
} from "@/lib/projects";

const caseStudyNavItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "technology-stack", label: "Stack" },
  { id: "implementation", label: "Implementation" },
  { id: "infrastructure-diagram", label: "Diagram" },
  { id: "security", label: "Security" },
  { id: "monitoring", label: "Monitoring" },
  { id: "backup-disaster-recovery", label: "Backup & DR" },
  { id: "challenges", label: "Challenges" },
  { id: "lessons-learned", label: "Lessons" },
  { id: "future-improvements", label: "Future" },
  { id: "gallery", label: "Gallery" },
] as const;

type CaseStudyPageContentProps = {
  project: Project;
};

export function CaseStudyPageContent({ project }: CaseStudyPageContentProps) {
  const { caseStudy } = project;
  const { previous, next } = getAdjacentProjects(project.id);
  const related = getRelatedProjects(project.id);
  const showGithub = isValidGithubUrl(project.githubUrl);

  return (
    <>
      <div className="border-b border-border bg-card pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
          >
            <ArrowRightIcon className="rotate-180" />
            All Projects
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Case Study
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {showGithub && (
                <div className="mt-8">
                  <Button href={project.githubUrl} variant="outline" external>
                    <GithubIcon />
                    View on GitHub
                  </Button>
                </div>
              )}
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-white shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </div>

      <ContentSection containerClassName="max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <nav
              className="sticky top-24 rounded-xl border border-border bg-card p-4"
              aria-label="Case study sections"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                On this page
              </p>
              <ul className="space-y-1">
                {caseStudyNavItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-md px-2 py-1.5 text-sm text-text-secondary transition-colors hover:bg-white hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 space-y-12">
            <CaseStudyBlock
              id="overview"
              title="Overview"
              items={caseStudy.overview}
            />
            <CaseStudyBlock
              id="problem"
              title="Problem Statement"
              items={caseStudy.problem}
            />
            <CaseStudyBlock
              id="architecture"
              title="Architecture"
              items={caseStudy.architecture}
            />
            <TechnologyStackSection groups={caseStudy.technologyStack} />
            <CaseStudyBlock
              id="implementation"
              title="Implementation"
              items={caseStudy.implementation}
            />
            <InfrastructureDiagramSection
              diagram={caseStudy.infrastructureDiagram}
            />
            <CaseStudyBlock
              id="security"
              title="Security Considerations"
              items={caseStudy.security}
            />
            <CaseStudyBlock
              id="monitoring"
              title="Monitoring"
              items={caseStudy.monitoring}
            />
            <CaseStudyBlock
              id="backup-disaster-recovery"
              title="Backup & Disaster Recovery"
              items={caseStudy.backupAndDisasterRecovery}
            />
            <CaseStudyBlock
              id="challenges"
              title="Challenges"
              items={caseStudy.challenges}
            />
            <CaseStudyBlock
              id="lessons-learned"
              title="Lessons Learned"
              items={caseStudy.lessonsLearned}
            />
            <CaseStudyBlock
              id="future-improvements"
              title="Future Improvements"
              items={caseStudy.futureImprovements}
            />
            <CaseStudyGallery items={caseStudy.gallery} />
            <RelatedProjects projects={related} />
            <ProjectPager previous={previous} next={next} />
          </article>
        </div>
      </ContentSection>
    </>
  );
}
