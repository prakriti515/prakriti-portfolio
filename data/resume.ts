/**
 * Resume page content
 *
 * Replace every REPLACE_* value with verified information.
 * Projects and certifications are sourced from data/projects.ts and data/certifications.ts.
 */

export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
};

export type SkillCategory = {
  id: string;
  category: string;
  skills: string[];
};

export const resumeData = {
  page: {
    title: "Resume",
    description:
      "Professional summary, experience, technical skills, and credentials.",
  },
  header: {
    headline: "Cloud & DevOps Engineer",
    tagline:
      "REPLACE: One-line professional positioning — infrastructure, automation, and production operations.",
  },
  summary:
    "REPLACE: 3–4 sentence professional summary. State your infrastructure focus, platforms and practices you work with, and the type of roles or problems you are best suited for. Avoid unverifiable metrics.",
  experience: [
    {
      id: "experience-1",
      title: "REPLACE: Job Title",
      company: "REPLACE: Company Name",
      location: "REPLACE: City, Country or Remote",
      period: "REPLACE: Mon YYYY – Present",
      responsibilities: [
        "REPLACE: Responsibility with context — what you built, operated, or automated",
        "REPLACE: Responsibility — tools, environments, or teams involved",
        "REPLACE: Responsibility — reliability, security, or delivery outcome if verified",
      ],
      technologies: ["REPLACE", "Tech", "Stack"],
    },
    {
      id: "experience-2",
      title: "REPLACE: Job Title",
      company: "REPLACE: Company Name",
      location: "REPLACE: City, Country or Remote",
      period: "REPLACE: Mon YYYY – Mon YYYY",
      responsibilities: [
        "REPLACE: Responsibility with context",
        "REPLACE: Responsibility with context",
      ],
      technologies: ["REPLACE", "Tech", "Stack"],
    },
  ],
  technicalSkills: [
    {
      id: "skills-cloud",
      category: "Cloud & Infrastructure",
      skills: ["REPLACE", "AWS", "Azure", "Terraform", "Linux"],
    },
    {
      id: "skills-containers",
      category: "Containers & CI/CD",
      skills: ["REPLACE", "Docker", "Kubernetes", "GitHub Actions"],
    },
    {
      id: "skills-ops",
      category: "Operations & Security",
      skills: ["REPLACE", "Monitoring", "IAM", "Backup/DR", "Networking"],
    },
    {
      id: "skills-scripting",
      category: "Scripting & Automation",
      skills: ["REPLACE", "Bash", "Python", "Ansible"],
    },
  ],
  education: [
    {
      id: "education-1",
      degree: "REPLACE: Degree or Program Name",
      institution: "REPLACE: Institution Name",
      location: "REPLACE: City, Country",
      period: "REPLACE: YYYY – YYYY",
      details: [
        "REPLACE: Relevant coursework, focus area, or honors — optional",
      ],
    },
  ],
  professionalInterests: [
    "REPLACE: Interest — e.g. infrastructure automation and GitOps workflows",
    "REPLACE: Interest — e.g. production reliability and incident response",
    "REPLACE: Interest — e.g. cloud security and compliance automation",
    "REPLACE: Interest — e.g. platform engineering and developer experience",
  ],
} as const;
