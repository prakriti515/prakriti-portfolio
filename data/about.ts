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
      "I'm a Cloud & DevOps Engineer based in Kathmandu, working toward becoming a Cloud Infrastructure Architect and Platform Engineer — someone who designs and operates highly available, secure, and automated production systems, not just someone who holds certifications. Currently at Gorkha Soft Pvt. Ltd., I design and operate virtualized production infrastructure — a 4-node Proxmox environment running 15+ containerized services, backed by centralized monitoring and automated disaster recovery.",
      "My path into infrastructure engineering wasn't a straight line — I started in agricultural science, taught secondary-level science and math, and worked as a field enumerator for Nepal's National Agriculture Census before pivoting into computer systems engineering. That background shaped how I work now: methodical, data-driven, and comfortable building systems from the ground up rather than assuming shortcuts.",
    ],
  },
  engineeringPhilosophy: {
    intro:
      "I approach infrastructure work as a discipline built on repeatability, security, and visibility — every system I run should be observable, recoverable, and predictable.",
    principles: [
      {
        id: "reliability",
        title: "Reliability over novelty",
        description:
          "I prioritize stable, well-understood production systems over chasing the newest tool. At Gorkha Soft, that means structured backup and disaster-recovery workflows to AWS S3, and deliberate change control across a 4-node Proxmox environment supporting live workloads.",
      },
      {
        id: "automation",
        title: "Automate repeatable work",
        description:
          "I reduce manual toil wherever it recurs — from CI/CD pipelines built with Jenkins and GitHub Actions to Ansible-based configuration management — so the same task never has to be done by hand twice.",
      },
      {
        id: "security",
        title: "Security by design",
        description:
          "Security is built into the infrastructure layer from the start: Cloudflare WAF, Fail2ban, UFW, SSL/TLS, SSH hardening, and JWT authentication are standard practice across the systems I run, not an afterthought.",
      },
      {
        id: "observability",
        title: "Observable systems",
        description:
          "I treat monitoring as core infrastructure, not an add-on. Prometheus, Grafana, Loki, and Alertmanager give me the visibility to catch issues before they become incidents and to make informed capacity decisions.",
      },
    ],
  },
  careerTimeline: [
    {
      id: "timeline-entry-1",
      period: "May 2026",
      title: "NCE Research Grant Presentation",
      organization: "National College of Engineering, Tribhuvan University",
      description:
        "Presented a multi-agent reinforcement learning framework for adaptive, fault-tolerant IoT load balancing, built on NS-3 simulations across five experimental scenarios.",
      type: "milestone",
    },
    {
      id: "timeline-entry-2",
      period: "Jan 2026 – Present",
      title: "Cloud DevOps Engineer",
      organization: "Gorkha Soft Pvt. Ltd.",
      description:
        "Design and manage a 4-node Proxmox virtualization environment supporting 15+ Docker containers, centralized monitoring (Prometheus, Grafana, Loki, Alertmanager), automated backup/DR to AWS S3, and security hardening via Cloudflare WAF, UFW, and Fail2ban.",
      type: "work",
    },
    {
      id: "timeline-entry-3",
      period: "Apr 2025 – Jan 2026",
      title: "Teaching Assistant, Computing (CSE & CSDF)",
      organization: "ISMT College",
      description:
        "Led hands-on labs in programming, networking, Linux administration, and databases; guided students through firewall configuration, encryption fundamentals, and system troubleshooting.",
      type: "work",
    },
    {
      id: "timeline-entry-4",
      period: "May 2025 – Aug 2025",
      title: "Cloud Apprenticeship",
      organization: "Adex International",
      description:
        "Designed and deployed AWS architectures using EC2, S3, RDS, VPC, IAM, and CloudFront, implementing Auto Scaling, load balancing, and AWS Well-Architected Framework practices.",
      type: "work",
    },
    {
      id: "timeline-entry-5",
      period: "2022 – 2025",
      title: "BSc (Hons) Computer Systems Engineering",
      organization: "University of Sunderland / ISMT College",
      description:
        "Graduated with a 2:1, alongside a funded research project applying multi-agent reinforcement learning to IoT network load balancing.",
      type: "education",
    },
    {
      id: "timeline-entry-6",
      period: "Jan 2024",
      title: "DevOps Engineer",
      organization: "IronRim, LLC",
      description:
        "Built CI/CD pipelines with Jenkins and GitHub Actions to automate build, test, and deployment workflows for a Columbus, OH-based engineering team.",
      type: "work",
    },
    {
      id: "timeline-entry-7",
      period: "Jun 2023 – Oct 2023",
      title: "Technical Support",
      organization: "Jamun Tek",
      description:
        "Provided technical support and troubleshooting for software, networking, and client-facing systems while maintaining service continuity.",
      type: "work",
    },
    {
      id: "timeline-entry-8",
      period: "Apr 2022 – Jun 2022",
      title: "Enumerator, National Agriculture Census",
      organization: "Central Bureau of Statistics, Nepal",
      description:
        "Collected and validated field data for Nepal's National Agriculture Census (Rastriya Krishi Gadana 2078), contributing structured datasets used for national agricultural policy planning.",
      type: "work",
    },
    {
      id: "timeline-entry-9",
      period: "Sep 2021 – Dec 2021",
      title: "Science & Math Teacher",
      organization: "Galkot Secondary School",
      description:
        "Taught science and mathematics to secondary-level students, building foundational problem-solving skills before transitioning into technology.",
      type: "work",
    },
  ],
  currentRole: {
    title: "Cloud DevOps Engineer",
    organization: "Gorkha Soft Pvt. Ltd.",
    period: "Jan 2026 – Present",
    location: "Kathmandu, Nepal",
    responsibilities: [
      "Design, deploy, and manage a 4-node Proxmox virtualization environment supporting isolated production workloads for applications, databases, and monitoring services.",
      "Maintain 15+ Docker containers via Docker Compose, ensuring consistent deployments and simplified operational management.",
      "Build and maintain a centralized monitoring and observability platform using Prometheus, Grafana, Loki, and Alertmanager.",
      "Implement infrastructure security (Cloudflare WAF, UFW, Fail2ban, SSL/TLS, JWT authentication, SSH hardening) and design automated backup/disaster-recovery workflows to AWS S3.",
    ],
  },
  coreTechnologies: {
    intro:
      "I apply these technologies daily across hybrid infrastructure — from Proxmox-virtualized production servers to AWS-based backup and recovery workflows.",
    categories: [
      {
        id: "cloud-platforms",
        name: "Cloud Platforms",
        technologies: ["AWS", "Azure", "Proxmox VE"],
      },
      {
        id: "linux-automation",
        name: "Linux & Automation",
        technologies: ["Linux", "Bash", "Ansible", "Tailscale VPN"],
      },
      {
        id: "containers-cicd",
        name: "Containers & CI/CD",
        technologies: ["Docker", "Docker Compose", "Jenkins", "GitHub Actions", "Kubernetes"],
      },
      {
        id: "iac-observability",
        name: "IaC & Observability",
        technologies: ["Terraform", "Prometheus", "Grafana", "Loki", "Alertmanager"],
      },
    ],
  },
  learningRoadmap: {
    intro:
      "Alongside my day-to-day infrastructure work, I'm deepening my expertise in the areas that matter most as I move toward platform and cloud architecture roles.",
    items: [
      {
        id: "learning-1",
        topic: "Kubernetes administration & GitOps (Argo CD)",
        status: "in-progress",
        focus:
          "Cluster operations, workload orchestration, and GitOps-based deployment workflows, extending beyond Docker Compose.",
      },
      {
        id: "learning-2",
        topic: "Terraform module design",
        status: "in-progress",
        focus:
          "Writing reusable, production-grade Terraform modules for AWS and Azure provisioning.",
      },
      {
        id: "learning-3",
        topic: "Platform Engineering & Internal Developer Platforms",
        status: "in-progress",
        focus:
          "Studying how to design self-service infrastructure platforms — golden paths, internal tooling, and developer experience patterns that scale beyond single-team operations.",
      },
    ],
  },
  careerGoals: {
    intro:
      "My path is toward becoming a technical leader in cloud infrastructure — combining hands-on operational depth with architecture-level thinking.",
    goals: [
      "Short-term: deepen Linux, AWS, and Azure operations while mastering automation and building a public technical portfolio.",
      "Mid-term: grow into a Senior Cloud/Infrastructure Engineer role — leading system design initiatives and mentoring other engineers.",
      "Long-term: become a Cloud Infrastructure Architect, driving scalable platform design and cloud migration strategy.",
    ],
  },
  frequentlyUsedTools: [
    {
      id: "tools-iac",
      category: "Infrastructure as Code",
      tools: ["Terraform", "Ansible", "Proxmox VE"],
    },
    {
      id: "tools-cicd",
      category: "CI/CD & Version Control",
      tools: ["Git", "GitHub Actions", "Jenkins"],
    },
    {
      id: "tools-cloud",
      category: "Cloud & Compute",
      tools: ["AWS Console", "EC2", "S3", "RDS", "VPC", "IAM"],
    },
    {
      id: "tools-ops",
      category: "Operations & Monitoring",
      tools: ["Linux CLI", "Grafana", "Prometheus", "Loki", "Alertmanager", "Cloudflare"],
    },
  ],
} as const;