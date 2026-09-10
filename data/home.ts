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
  id:
    | "aws"
    | "azure"
    | "linux"
    | "docker"
    | "k8s"
    | "terraform"
    | "ansible"
    | "prometheus"
    | "grafana"
    | "proxmox";
  name: string;
};

export const homeData = {
  hero: {
    tag: "CLOUD • DEVOPS • INFRASTRUCTURE",
    headline: {
      line1: "Building Secure,",
      line2Prefix: "Scalable &",
      highlight1: "Reliable",
      highlight2: "Cloud Infrastructure",
    },
    subheadline:
      "I design, automate, and operate production-grade infrastructure that empowers applications to scale, stay secure, and remain highly available.",
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "15+", label: "Docker Services in Production" },
      { value: "99.9%", label: "Uptime Focus" },
      { value: "24/7", label: "Monitoring" },
    ] satisfies HomeStat[],
    technologies: [
      { id: "aws", name: "AWS" },
      { id: "linux", name: "Linux" },
      { id: "docker", name: "Docker" },
      { id: "k8s", name: "Kubernetes" },
      { id: "terraform", name: "Terraform" },
      { id: "ansible", name: "Ansible" },
      { id: "grafana", name: "Grafana" },
      { id: "prometheus", name: "Prometheus" },
      { id: "proxmox", name: "Proxmox" },
    ] satisfies HomeTech[],
  },
  services: {
    title: "What I Do",
    description:
      "End-to-end infrastructure engineering with a DevOps mindset",
    items: [
      {
        id: "cloud",
        title: "Cloud Infrastructure",
        description:
          "Designing scalable, highly available and cost-optimized cloud environments on AWS.",
        icon: "cloud",
      },
      {
        id: "devops",
        title: "DevOps & Automation",
        description:
          "Automating workflows, CI/CD pipelines and infrastructure with IaC and best practices.",
        icon: "pipeline",
      },
      {
        id: "security",
        title: "Security & Compliance",
        description:
          "Implementing defense in depth security, hardening systems and ensuring compliance.",
        icon: "shield",
      },
      {
        id: "monitoring",
        title: "Monitoring & Observability",
        description:
          "Building observability stacks for metrics, logs, alerts and proactive incident response.",
        icon: "monitor",
      },
      {
        id: "backup",
        title: "Backup & DR",
        description:
          "Implementing reliable backup strategies and disaster recovery solutions.",
        icon: "database",
      },
    ] satisfies HomeService[],
  },
  cta: {
    title: "Let's build something amazing together",
    description:
      "I'm open to exciting opportunities in Cloud, DevOps and Platform Engineering.",
    buttonLabel: "Contact Me",
    href: "/contact",
  },
} as const;
