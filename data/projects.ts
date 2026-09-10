/**
 * Projects & case studies
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

function createCaseStudy(
  title: string,
  slug: string,
  diagramSrc: string,
  overviewText: string,
  techs: string[],
): ProjectCaseStudy {
  return {
    overview: [
      overviewText,
      "Designed, provisioned, and continuously maintained for maximum uptime, reliability, and security standards.",
    ],
    problem: [
      "Needed a secure, automated, and observable production-grade setup with zero single points of failure.",
      "Manual deployment steps and unmonitored services introduced risk and high mean-time-to-recovery (MTTR).",
    ],
    architecture: [
      "Multi-layer architecture with strict network isolation, automated health checks, and redundant service paths.",
      "Comprehensive telemetry tracking system metrics, application logs, and instant alert routing.",
    ],
    technologyStack: [
      {
        category: "Infrastructure & Platform",
        items: techs,
      },
      {
        category: "Automation & Security",
        items: ["CI/CD", "SSL/TLS", "Firewall", "Fail2ban"],
      },
    ],
    implementation: [
      "Provisioned infrastructure layers with standardized configurations and automated scripts.",
      "Configured secure network segmentation, routing, and access control policies.",
      "Integrated automated backup pipelines and disaster recovery validation schedules.",
    ],
    infrastructureDiagram: {
      src: diagramSrc,
      alt: `Architecture diagram for ${title}`,
      caption: `High-level architecture and data flow for ${title}.`,
    },
    security: [
      "Network isolation with VLANs, firewall policies, and least-privilege access rules.",
      "Encrypted communications with automated SSL/TLS certificates and hardened SSH configurations.",
    ],
    monitoring: [
      "Continuous health and performance metrics collection with automated alerts.",
      "Visual dashboards tracking system load, latency, error rates, and storage capacity.",
    ],
    backupAndDisasterRecovery: [
      "Automated incremental snapshots and offsite replication.",
      "Tested recovery procedures ensuring low RTO and RPO benchmarks.",
    ],
    challenges: [
      "Ensuring zero service disruption during configuration rollouts and container updates.",
      "Optimizing resource allocation and memory usage across multi-tenant workloads.",
    ],
    lessonsLearned: [
      "Infrastructure automation and early monitoring integration dramatically reduce debugging time.",
      "Consistent tagging, logging, and documentation simplify long-term cluster maintenance.",
    ],
    futureImprovements: [
      "Further automate self-healing nodes and expand automated integration tests.",
      "Implement advanced platform engineering features for developer self-service.",
    ],
    gallery: [],
  };
}

export const projects: Project[] = [
  {
    id: "production-infrastructure-platform",
    title: "Production Infrastructure Platform",
    description:
      "Multi-tier infrastructure on Proxmox with isolated networks, high availability and automated backups.",
    image: "/images/projects/proxmox-platform.svg",
    architecturePreview: "/images/projects/proxmox-platform.svg",
    technologies: ["Proxmox", "Linux", "Networking", "Backup"],
    githubUrl: "https://github.com/prakriti515",
    featured: true,
    caseStudy: createCaseStudy(
      "Production Infrastructure Platform",
      "production-infrastructure-platform",
      "/images/projects/proxmox-platform.svg",
      "Multi-tier virtualized infrastructure on a 4-node Proxmox cluster with VLAN segmentation and automated backups.",
      ["Proxmox VE", "Linux", "VLAN / Networking", "PBS Backup", "AWS S3"],
    ),
  },
  {
    id: "containerized-application-platform",
    title: "Containerized Application Platform",
    description:
      "Dockerized applications with Nginx reverse proxy, SSL/TLS, and CI/CD deployment pipeline.",
    image: "/images/projects/docker-platform.svg",
    architecturePreview: "/images/projects/docker-platform.svg",
    technologies: ["Docker", "Nginx", "SSL", "CI/CD"],
    githubUrl: "https://github.com/prakriti515",
    featured: true,
    caseStudy: createCaseStudy(
      "Containerized Application Platform",
      "containerized-application-platform",
      "/images/projects/docker-platform.svg",
      "Production containerized environment running 15+ Docker services behind Nginx reverse proxy with automated SSL and CI/CD.",
      ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "SSL / TLS", "Cloudflare"],
    ),
  },
  {
    id: "observability-monitoring-stack",
    title: "Observability & Monitoring Stack",
    description:
      "Centralized monitoring with Prometheus, Grafana and Loki for metrics, logs and alerting.",
    image: "/images/projects/observability-stack.svg",
    architecturePreview: "/images/projects/observability-stack.svg",
    technologies: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
    githubUrl: "https://github.com/prakriti515",
    featured: true,
    caseStudy: createCaseStudy(
      "Observability & Monitoring Stack",
      "observability-monitoring-stack",
      "/images/projects/observability-stack.svg",
      "Centralized observability infrastructure collecting cluster metrics and logs with Grafana dashboards and instant alert channels.",
      ["Prometheus", "Grafana", "Loki", "Promtail", "Alertmanager", "Node Exporter"],
    ),
  },
];
