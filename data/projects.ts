/**
 * Projects & case studies
 *
 * Add one entry per project. Set featured: true for homepage display (3 recommended).
 * caseStudyUrl is derived from id: /projects/[id]
 *
 * Replace every REPLACE_* value with verified project information.
 */

export type TechnologyStackGroup = {
  category: string;
  items: string[];
};

export type CaseStudyDiagram = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyGalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectCaseStudy = {
  overview: string[];
  problem: string[];
  architecture: string[];
  technologyStack: TechnologyStackGroup[];
  implementation: string[];
  infrastructureDiagram: CaseStudyDiagram;
  security: string[];
  monitoring: string[];
  backupAndDisasterRecovery: string[];
  challenges: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  gallery: CaseStudyGalleryItem[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  architecturePreview: string;
  technologies: string[];
  githubUrl: string;
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
};

const placeholderDiagram = (
  slug: string,
  title: string,
): CaseStudyDiagram => ({
  src: "/images/projects/diagram-placeholder.svg",
  alt: `REPLACE: Infrastructure diagram for ${title}`,
  caption:
    "REPLACE: Caption describing components, data flow, and environment boundaries.",
});

const placeholderGallery = (slug: string): CaseStudyGalleryItem[] => [
  {
    id: `${slug}-gallery-1`,
    src: "/images/projects/gallery-placeholder.svg",
    alt: "REPLACE: Gallery image description",
    caption:
      "REPLACE: Caption — e.g. CI pipeline, monitoring dashboard, or IaC module structure",
  },
  {
    id: `${slug}-gallery-2`,
    src: "/images/projects/gallery-placeholder.svg",
    alt: "REPLACE: Gallery image description",
    caption: "REPLACE: Caption for second screenshot or diagram",
  },
];

function createCaseStudyTemplate(title: string, slug: string): ProjectCaseStudy {
  return {
    overview: [
      "REPLACE: High-level summary — what was built, for which environment, and the operational outcome.",
      "REPLACE: Your role and scope — provisioning, automation, release engineering, observability, or production support.",
    ],
    problem: [
      "REPLACE: Problem or constraint before the project — manual processes, reliability gaps, security exposure, or scaling limits.",
      "REPLACE: Business or operational impact — deployment risk, incident frequency, recovery time, or compliance requirement.",
    ],
    architecture: [
      "REPLACE: Architecture overview — environments, network boundaries, compute model, and integration points.",
      "REPLACE: Key design decisions — HA approach, state management, secrets flow, or deployment model.",
    ],
    technologyStack: [
      {
        category: "REPLACE: Category — e.g. Cloud Platform",
        items: ["REPLACE", "Service", "Tool"],
      },
      {
        category: "REPLACE: Category — e.g. Automation & CI/CD",
        items: ["REPLACE", "Service", "Tool"],
      },
    ],
    implementation: [
      "REPLACE: Implementation step — e.g. module structure, pipeline stages, or provisioning workflow",
      "REPLACE: Implementation step — e.g. configuration management, validation gates, or rollout process",
      "REPLACE: Implementation step — e.g. documentation, access controls, or handoff to operations",
    ],
    infrastructureDiagram: placeholderDiagram(slug, title),
    security: [
      "REPLACE: Security control — e.g. IAM roles, network segmentation, or secrets management",
      "REPLACE: Security control — e.g. encryption, audit logging, or vulnerability scanning integration",
    ],
    monitoring: [
      "REPLACE: Monitoring approach — metrics collected, dashboards, and alert routing",
      "REPLACE: Operational signal — SLOs, log aggregation, or incident detection criteria",
    ],
    backupAndDisasterRecovery: [
      "REPLACE: Backup strategy — frequency, retention, and recovery scope",
      "REPLACE: DR consideration — RTO/RPO targets, failover process, or restore validation",
    ],
    challenges: [
      "REPLACE: Challenge encountered during delivery and how it was addressed",
      "REPLACE: Trade-off or constraint — time, tooling, legacy systems, or team coordination",
    ],
    lessonsLearned: [
      "REPLACE: Lesson — what you would repeat or standardize in future infrastructure work",
      "REPLACE: Lesson — process, tooling, or operational practice that improved outcomes",
    ],
    futureImprovements: [
      "REPLACE: Planned improvement — automation, resilience, cost optimization, or observability",
      "REPLACE: Planned improvement — security hardening, testing, or platform maturity step",
    ],
    gallery: placeholderGallery(slug),
  };
}

export const projects: Project[] = [
  {
    id: "replace-project-slug-1",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Short summary for cards — context, scope, stack, and outcome.",
    image: "/images/projects/iac-platform.svg",
    architecturePreview: "/images/projects/iac-platform.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    featured: true,
    caseStudy: createCaseStudyTemplate(
      "REPLACE: Project Title",
      "replace-project-slug-1",
    ),
  },
  {
    id: "replace-project-slug-2",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Short summary for cards — context, scope, stack, and outcome.",
    image: "/images/projects/k8s-gitops.svg",
    architecturePreview: "/images/projects/k8s-gitops.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    featured: true,
    caseStudy: createCaseStudyTemplate(
      "REPLACE: Project Title",
      "replace-project-slug-2",
    ),
  },
  {
    id: "replace-project-slug-3",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Short summary for cards — context, scope, stack, and outcome.",
    image: "/images/projects/observability.svg",
    architecturePreview: "/images/projects/observability.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    featured: true,
    caseStudy: createCaseStudyTemplate(
      "REPLACE: Project Title",
      "replace-project-slug-3",
    ),
  },
  {
    id: "replace-project-slug-4",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Short summary for cards — context, scope, stack, and outcome.",
    image: "/images/projects/cicd-platform.svg",
    architecturePreview: "/images/projects/cicd-platform.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudy: createCaseStudyTemplate(
      "REPLACE: Project Title",
      "replace-project-slug-4",
    ),
  },
  {
    id: "replace-project-slug-5",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Short summary for cards — context, scope, stack, and outcome.",
    image: "/images/projects/disaster-recovery.svg",
    architecturePreview: "/images/projects/disaster-recovery.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudy: createCaseStudyTemplate(
      "REPLACE: Project Title",
      "replace-project-slug-5",
    ),
  },
  {
    id: "replace-project-slug-6",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Short summary for cards — context, scope, stack, and outcome.",
    image: "/images/projects/network-security.svg",
    architecturePreview: "/images/projects/network-security.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudy: createCaseStudyTemplate(
      "REPLACE: Project Title",
      "replace-project-slug-6",
    ),
  },
];
