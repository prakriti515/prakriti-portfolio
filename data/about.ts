/**
 * About page content
 *
 * Replace every REPLACE_* value with verified information.
 * Do not include employers, dates, or outcomes you cannot substantiate.
 */

export type TimelineEntryType =
  | "work"
  | "education"
  | "certification"
  | "milestone";

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: TimelineEntryType;
};

export type PhilosophyPrinciple = {
  id: string;
  title: string;
  description: string;
};

export type LearningItem = {
  id: string;
  topic: string;
  status: "in-progress" | "planned" | "completed";
  focus: string;
};

export type ToolCategory = {
  id: string;
  category: string;
  tools: string[];
};

export type TechnologyCategory = {
  id: string;
  name: string;
  technologies: string[];
};

export const aboutData = {
  page: {
    title: "About",
    description:
      "Infrastructure engineering background, operating philosophy, and professional focus areas.",
  },
  introduction: {
    paragraphs: [
      "REPLACE: Opening paragraph — your role in infrastructure, DevOps, or platform engineering, and the types of systems or environments you support.",
      "REPLACE: Second paragraph — how you approach delivery: automation, reliability practices, collaboration with development or operations teams, and production ownership.",
    ],
  },
  engineeringPhilosophy: {
    intro:
      "REPLACE: Short statement on how you approach infrastructure work — reliability, automation, security, and operational clarity.",
    principles: [
      {
        id: "reliability",
        title: "Reliability over novelty",
        description:
          "REPLACE: How you prioritize stable systems, change control, and measurable service behavior in production.",
      },
      {
        id: "automation",
        title: "Automate repeatable work",
        description:
          "REPLACE: Your approach to reducing manual toil through IaC, pipelines, and standardized runbooks.",
      },
      {
        id: "security",
        title: "Security by design",
        description:
          "REPLACE: How you apply least privilege, secrets handling, and hardening in infrastructure delivery.",
      },
      {
        id: "observability",
        title: "Observable systems",
        description:
          "REPLACE: How you use metrics, logs, and alerts to support incident response and capacity decisions.",
      },
    ],
  },
  careerTimeline: [
    {
      id: "timeline-entry-1",
      period: "REPLACE: YYYY – Present",
      title: "REPLACE: Role Title",
      organization: "REPLACE: Organization",
      description:
        "REPLACE: Scope of work — platforms supported, team context, and primary responsibilities.",
      type: "work",
    },
    {
      id: "timeline-entry-2",
      period: "REPLACE: YYYY – YYYY",
      title: "REPLACE: Role Title or Milestone",
      organization: "REPLACE: Organization or Program",
      description: "REPLACE: What you did and the systems or tools involved.",
      type: "work",
    },
    {
      id: "timeline-entry-3",
      period: "REPLACE: YYYY – YYYY",
      title: "REPLACE: Degree or Program",
      organization: "REPLACE: Institution",
      description: "REPLACE: Field of study or relevant coursework, if applicable.",
      type: "education",
    },
  ],
  currentRole: {
    title: "REPLACE: Current Role Title",
    organization: "REPLACE: Current Organization",
    period: "REPLACE: Start – Present",
    location: "REPLACE: Location or Remote",
    responsibilities: [
      "REPLACE: Primary responsibility — e.g. provisioning, CI/CD, monitoring, or incident support",
      "REPLACE: Secondary responsibility — e.g. documentation, access management, backup validation",
      "REPLACE: Collaboration or delivery responsibility — e.g. working with developers on releases",
      "REPLACE: Operational responsibility — e.g. on-call, patching, capacity review",
    ],
  },
  coreTechnologies: {
    intro:
      "REPLACE: Brief note on where you apply these technologies — cloud platforms, Linux environments, pipelines, or observability stacks.",
    categories: [
      {
        id: "cloud-platforms",
        name: "Cloud Platforms",
        technologies: ["REPLACE", "AWS", "Azure"],
      },
      {
        id: "linux-automation",
        name: "Linux & Automation",
        technologies: ["REPLACE", "Linux", "Bash", "Ansible"],
      },
      {
        id: "containers-cicd",
        name: "Containers & CI/CD",
        technologies: ["REPLACE", "Docker", "GitHub Actions"],
      },
      {
        id: "iac-observability",
        name: "IaC & Observability",
        technologies: ["REPLACE", "Terraform", "Prometheus"],
      },
    ],
  },
  learningRoadmap: {
    intro:
      "REPLACE: What you are actively building depth in and why it matters to your infrastructure work.",
    items: [
      {
        id: "learning-1",
        topic: "REPLACE: Topic — e.g. Kubernetes administration",
        status: "in-progress",
        focus:
          "REPLACE: Specific skills or outcomes you are targeting — cluster operations, networking, GitOps, etc.",
      },
      {
        id: "learning-2",
        topic: "REPLACE: Topic — e.g. Terraform module design",
        status: "in-progress",
        focus: "REPLACE: What you are practicing or studying.",
      },
      {
        id: "learning-3",
        topic: "REPLACE: Topic — e.g. SRE practices",
        status: "planned",
        focus: "REPLACE: Planned focus area.",
      },
    ],
  },
  careerGoals: {
    intro:
      "REPLACE: Direction you are working toward in infrastructure, platform, SRE, or DevSecOps roles.",
    goals: [
      "REPLACE: Near-term goal — e.g. deepen production operations experience on a specific platform",
      "REPLACE: Mid-term goal — e.g. lead infrastructure automation or reliability initiatives",
      "REPLACE: Long-term goal — e.g. platform engineering or SRE leadership scope",
    ],
  },
  frequentlyUsedTools: [
    {
      id: "tools-iac",
      category: "Infrastructure as Code",
      tools: ["REPLACE", "Terraform", "Ansible"],
    },
    {
      id: "tools-cicd",
      category: "CI/CD & Version Control",
      tools: ["REPLACE", "Git", "GitHub Actions"],
    },
    {
      id: "tools-cloud",
      category: "Cloud & Compute",
      tools: ["REPLACE", "AWS Console", "EC2", "S3"],
    },
    {
      id: "tools-ops",
      category: "Operations & Monitoring",
      tools: ["REPLACE", "Linux CLI", "Grafana", "CloudWatch"],
    },
  ],
} as const;
