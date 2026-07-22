import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContentSection } from "@/components/ui/ContentSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DownloadIcon } from "@/components/ui/icons";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const timelineTypeLabels = {
  work: "Work",
  education: "Education",
  certification: "Certification",
  milestone: "Milestone",
} as const;

const learningStatusLabels = {
  "in-progress": "In Progress",
  planned: "Planned",
  completed: "Completed",
} as const;

export function AboutPageContent() {
  const {
    introduction,
    engineeringPhilosophy,
    careerTimeline,
    currentRole,
    coreTechnologies,
    learningRoadmap,
    careerGoals,
    frequentlyUsedTools,
  } = aboutData;

  return (
    <>
      <ContentSection id="introduction">
        <SectionHeading
          label="Introduction"
          title="Professional Background"
          description="Infrastructure engineering focus and operating context."
        />
        <div className="max-w-3xl space-y-4">
          {introduction.paragraphs.map((paragraph, index) => (
            <p
              key={`intro-${index}`}
              className="text-lg leading-relaxed text-text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="philosophy" variant="muted">
        <SectionHeading
          label="Philosophy"
          title="Engineering Philosophy"
          description={engineeringPhilosophy.intro}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {engineeringPhilosophy.principles.map((principle) => (
            <article
              key={principle.id}
              className="rounded-xl border border-border bg-white p-6"
            >
              <h3 className="text-base font-semibold text-text-primary">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="current-role">
        <SectionHeading
          label="Current Role"
          title={currentRole.title}
          description={`${currentRole.organization} · ${currentRole.period} · ${currentRole.location}`}
        />
        <ul className="grid max-w-3xl gap-3">
          {currentRole.responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-text-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="timeline" variant="muted">
        <SectionHeading
          label="Timeline"
          title="Career Timeline"
          description="Professional milestones, roles, and education."
        />
        <ol className="relative max-w-3xl space-y-8 border-l border-border pl-8">
          {careerTimeline.map((entry) => (
            <li key={entry.id} className="relative">
              <span
                className="absolute -left-[2.375rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-white"
                aria-hidden="true"
              />
              <div className="rounded-xl border border-border bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">
                    {timelineTypeLabels[entry.type]}
                  </Badge>
                  <span className="text-sm text-text-secondary">
                    {entry.period}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-text-primary">
                  {entry.title}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {entry.organization}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {entry.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection id="technologies">
        <SectionHeading
          label="Technologies"
          title="Core Technologies"
          description={coreTechnologies.intro}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {coreTechnologies.categories.map((category) => (
            <article
              key={category.id}
              className="rounded-xl border border-border bg-white p-6"
            >
              <h3 className="font-semibold text-text-primary">
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="learning" variant="muted">
        <SectionHeading
          label="Learning"
          title="Current Learning Roadmap"
          description={learningRoadmap.intro}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {learningRoadmap.items.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-border bg-white p-6"
            >
              <Badge
                variant={
                  item.status === "in-progress" ? "secondary" : "default"
                }
              >
                {learningStatusLabels[item.status]}
              </Badge>
              <h3 className="mt-4 font-semibold text-text-primary">
                {item.topic}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.focus}
              </p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="goals">
        <SectionHeading
          label="Direction"
          title="Career Goals"
          description={careerGoals.intro}
        />
        <ul className="grid max-w-3xl gap-3">
          {careerGoals.goals.map((goal, index) => (
            <li
              key={goal}
              className="flex items-start gap-4 rounded-xl border border-border bg-white p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-text-secondary">
                {goal}
              </p>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="tools" variant="muted">
        <SectionHeading
          label="Toolkit"
          title="Frequently Used Tools"
          description="Day-to-day tools for infrastructure delivery and operations."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {frequentlyUsedTools.map((group) => (
            <article
              key={group.id}
              className="rounded-xl border border-border bg-white p-6"
            >
              <h3 className="font-semibold text-text-primary">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Badge key={tool} variant="primary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="resume-cta">
        <div
          className={cn(
            "rounded-2xl border border-border bg-white p-8 text-center sm:p-12",
            "bg-gradient-to-br from-primary/5 via-white to-secondary/5",
          )}
        >
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            View Full Resume
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">
            Download a PDF copy or review the full online resume with experience,
            skills, and credentials.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={siteConfig.resumeUrl} size="lg" external>
              <DownloadIcon />
              Download Resume
            </Button>
            <Button href="/resume" variant="outline" size="lg">
              Online Resume
            </Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
