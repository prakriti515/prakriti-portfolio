/**
 * Projects
 *
 * Add one entry per project. Set featured: true for homepage display (3 recommended).
 *
 * Description structure (keep under ~280 characters):
 *   [Problem/context] → [What you built/automated] → [Stack] → [Outcome if measurable]
 *
 * Replace image paths under public/images/projects/.
 * Remove entries you do not want published. Delete this comment block when done.
 */

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  caseStudyUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "replace-project-slug-1",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Context, infrastructure or automation scope, primary technologies, and outcome. Example: Standardized VPC and compute provisioning with Terraform modules and CI validation, reducing manual setup and deployment variance.",
    image: "/images/projects/iac-platform.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudyUrl: "/projects/replace-project-slug-1",
    featured: true,
  },
  {
    id: "replace-project-slug-2",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Context, infrastructure or automation scope, primary technologies, and outcome.",
    image: "/images/projects/k8s-gitops.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudyUrl: "/projects/replace-project-slug-2",
    featured: true,
  },
  {
    id: "replace-project-slug-3",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Context, infrastructure or automation scope, primary technologies, and outcome.",
    image: "/images/projects/observability.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudyUrl: "/projects/replace-project-slug-3",
    featured: true,
  },
  {
    id: "replace-project-slug-4",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Context, infrastructure or automation scope, primary technologies, and outcome.",
    image: "/images/projects/cicd-platform.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudyUrl: "/projects/replace-project-slug-4",
  },
  {
    id: "replace-project-slug-5",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Context, infrastructure or automation scope, primary technologies, and outcome.",
    image: "/images/projects/disaster-recovery.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudyUrl: "/projects/replace-project-slug-5",
  },
  {
    id: "replace-project-slug-6",
    title: "REPLACE: Project Title",
    description:
      "REPLACE: Context, infrastructure or automation scope, primary technologies, and outcome.",
    image: "/images/projects/network-security.svg",
    technologies: ["REPLACE", "Tech", "Stack"],
    githubUrl: "REPLACE_GITHUB_REPO_URL",
    caseStudyUrl: "/projects/replace-project-slug-6",
  },
];
