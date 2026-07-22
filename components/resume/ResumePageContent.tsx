import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContentSection } from "@/components/ui/ContentSection";
import { PrintButton } from "@/components/ui/PrintButton";
import { DownloadIcon, ExternalLinkIcon } from "@/components/ui/icons";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { resumeData } from "@/data/resume";
import { siteConfig } from "@/data/site";

function ResumeBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-block border-b border-border pb-8 last:border-b-0 last:pb-0">
      <h2 className="text-lg font-bold uppercase tracking-wide text-text-primary">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function ResumePageContent() {
  const {
    header,
    summary,
    experience,
    technicalSkills,
    education,
    professionalInterests,
  } = resumeData;

  return (
    <>
      <div className="no-print border-b border-border bg-card pt-24 pb-10 lg:pt-28 lg:pb-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 lg:px-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Resume
            </p>
            <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg text-text-secondary">{header.headline}</p>
            <p className="mt-1 text-sm text-text-secondary">
              {siteConfig.location} ·{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={siteConfig.resumeUrl} size="md" external>
              <DownloadIcon />
              Download PDF
            </Button>
            <PrintButton />
          </div>
        </div>
      </div>

      <ContentSection containerClassName="max-w-4xl">
        <article className="resume-document space-y-8 rounded-xl border border-border bg-white p-6 sm:p-10">
          <header className="resume-header border-b border-border pb-6">
            <h1 className="hidden print:block text-2xl font-bold text-text-primary">
              {siteConfig.name}
            </h1>
            <p className="hidden print:block text-sm text-text-secondary">
              {header.headline} · {siteConfig.email} · {siteConfig.location}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary print:mt-4">
              {header.tagline}
            </p>
          </header>

          <ResumeBlock title="Summary">
            <p className="text-sm leading-relaxed text-text-secondary">
              {summary}
            </p>
          </ResumeBlock>

          <ResumeBlock title="Experience">
            <div className="space-y-6">
              {experience.map((job) => (
                <article key={job.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        {job.title}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {job.period} · {job.location}
                    </p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5">
                    {job.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Technical Skills">
            <div className="grid gap-4 sm:grid-cols-2">
              {technicalSkills.map((group) => (
                <div key={group.id}>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {group.category}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {group.skills.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Projects">
            <div className="space-y-5">
              {projects.map((project) => (
                <article key={project.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    {project.githubUrl.startsWith("http") && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-print inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        GitHub
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Education">
            <div className="space-y-5">
              {education.map((entry) => (
                <article key={entry.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        {entry.degree}
                      </h3>
                      <p className="text-sm text-primary">{entry.institution}</p>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {entry.period} · {entry.location}
                    </p>
                  </div>
                  {entry.details && entry.details.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {entry.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm text-text-secondary"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Certifications">
            <div className="space-y-4">
              {certifications.map((cert) => (
                <article key={cert.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="text-sm text-text-secondary">{cert.date}</p>
                  </div>
                  <p className="mt-1 font-mono text-xs text-text-secondary">
                    {cert.credentialId}
                  </p>
                  {cert.verifyUrl.startsWith("http") && (
                    <Link
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-print mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Verify
                      <ExternalLinkIcon />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Professional Interests">
            <ul className="grid gap-2 sm:grid-cols-2">
              {professionalInterests.map((interest) => (
                <li
                  key={interest}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  {interest}
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <footer className="hidden print:block border-t border-border pt-4 text-xs text-text-secondary">
            <p>
              {siteConfig.name} · {siteConfig.email} ·{" "}
              {siteConfig.social.linkedin}
            </p>
          </footer>
        </article>
      </ContentSection>
    </>
  );
}
