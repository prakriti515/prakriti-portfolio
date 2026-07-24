/**
 * Homepage content — hero, services, stats, CTA, and tech stack bar.
 */

export type HomeStat = {
  value: string;
  label: string;
};

export type HomeService = {
  id: string;
  title: string;
  description: string;
  icon: "cloud" | "pipeline" | "shield" | "monitor" | "database";
};

export type HomeTech = {
  id: string;
  name: string;
  color: string;
};

export const homeData = {
  hero: {
    tag: "Cloud • DevOps • Infrastructure",
    headline: {
      prefix: "Building Secure, Scalable &",
      highlight: "Reliable Cloud Infrastructure",
    },
    subheadline:
      "I design, deploy, and operate production-grade infrastructure — from virtualized platforms and containers to monitoring, security, and disaster recovery.",
    stats: [
      { value: "1+", label: "Years Experience" },
      { value: "15+", label: "Docker Services in Production" },
      { value: "99.9%", label: "Uptime Focus" },
      { value: "24/7", label: "Monitoring" },
    ] satisfies HomeStat[],
    technologies: [
      { id: "aws", name: "AWS", color: "#FF9900" },
      { id: "azure", name: "Azure", color: "#0078D4" },
      { id: "linux", name: "Linux", color: "#FCC624" },
      { id: "docker", name: "Docker", color: "#2496ED" },
      { id: "k8s", name: "K8s", color: "#326CE5" },
      { id: "terraform", name: "TF", color: "#7B42BC" },
      { id: "ansible", name: "Ansible", color: "#EE0000" },
      { id: "prometheus", name: "Prom", color: "#E6522C" },
      { id: "grafana", name: "Grafana", color: "#F46800" },
      { id: "proxmox", name: "Proxmox", color: "#E57000" },
    ] satisfies HomeTech[],
  },
  services: {
    title: "What I Do",
    description:
      "End-to-end infrastructure engineering with a DevOps mindset.",
    items: [
      {
        id: "cloud",
        title: "Cloud Infrastructure",
        description:
          "Design and operate virtualized and cloud environments — compute, networking, storage, and platform services.",
        icon: "cloud",
      },
      {
        id: "devops",
        title: "DevOps & Automation",
        description:
          "CI/CD pipelines, Infrastructure as Code, and workflow automation to reduce manual toil and deployment risk.",
        icon: "pipeline",
      },
      {
        id: "security",
        title: "Security & Compliance",
        description:
          "Hardening, access control, WAF, secrets handling, and security layers aligned with production requirements.",
        icon: "shield",
      },
      {
        id: "monitoring",
        title: "Monitoring & Observability",
        description:
          "Metrics, logs, dashboards, and alerting with Prometheus, Grafana, and centralized operational visibility.",
        icon: "monitor",
      },
      {
        id: "backup",
        title: "Backup & DR",
        description:
          "Backup strategies, off-site replication, and disaster recovery workflows with tested restore paths.",
        icon: "database",
      },
    ] satisfies HomeService[],
  },
  cta: {
    title: "Let's build something amazing together",
    description:
      "Open to infrastructure, DevOps, and platform engineering opportunities.",
    buttonLabel: "Contact Me",
    href: "/#contact",
  },
  techStackBar: [
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Linux",
    "Grafana",
    "Prometheus",
    "Proxmox",
  ],
} as const;
