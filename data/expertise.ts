export type ExpertiseIconName =
  | "cloud"
  | "terminal"
  | "container"
  | "pipeline"
  | "infrastructure"
  | "network"
  | "shield"
  | "monitor"
  | "database"
  | "automation";

export type ExpertiseCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: ExpertiseIconName;
};

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "cloud",
    title: "Cloud",
    description: "Multi-cloud architecture and managed services",
    skills: ["AWS", "Azure", "EC2", "S3", "Lambda", "CloudFormation"],
    icon: "cloud",
  },
  {
    id: "linux",
    title: "Linux",
    description: "System administration and server hardening",
    skills: ["Ubuntu", "RHEL", "Bash", "Systemd", "Kernel Tuning"],
    icon: "terminal",
  },
  {
    id: "containers",
    title: "Containers",
    description: "Containerization and orchestration at scale",
    skills: ["Docker", "Kubernetes", "Helm", "Container Registry"],
    icon: "container",
  },
  {
    id: "cicd",
    title: "CI/CD",
    description: "Automated pipelines and release engineering",
    skills: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"],
    icon: "pipeline",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "Infrastructure as Code and provisioning",
    skills: ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
    icon: "infrastructure",
  },
  {
    id: "networking",
    title: "Networking",
    description: "Cloud networking and connectivity",
    skills: ["VPC", "DNS", "Load Balancers", "CDN", "VPN"],
    icon: "network",
  },
  {
    id: "security",
    title: "Security",
    description: "Security hardening and compliance",
    skills: ["IAM", "Secrets Management", "WAF", "SSL/TLS", "CIS Benchmarks"],
    icon: "shield",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Observability and incident response",
    skills: ["Prometheus", "Grafana", "CloudWatch", "ELK Stack", "PagerDuty"],
    icon: "monitor",
  },
  {
    id: "databases",
    title: "Databases",
    description: "Database operations and high availability",
    skills: ["PostgreSQL", "MySQL", "Redis", "RDS", "Backup & Recovery"],
    icon: "database",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Scripting and workflow automation",
    skills: ["Python", "Bash", "PowerShell", "Cron", "Event-Driven"],
    icon: "automation",
  },
];
