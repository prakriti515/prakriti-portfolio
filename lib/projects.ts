import { projects, type Project } from "@/data/projects";

export function getProjectUrl(id: string): string {
  return `/projects/${id}`;
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.id);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.id === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);

  if (!current) {
    return [];
  }

  const currentTech = new Set(current.technologies);

  return projects
    .filter((project) => project.id !== slug)
    .map((project) => ({
      project,
      score: project.technologies.filter((tech) => currentTech.has(tech))
        .length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ project }) => project);
}

export function isValidGithubUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}
