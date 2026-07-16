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
    id: "multi-cloud-iac",
    title: "Multi-Cloud IaC Platform",
    description:
      "Terraform-based infrastructure provisioning across AWS and Azure with modular, reusable modules, remote state management, and automated drift detection.",
    image: "/images/projects/iac-platform.svg",
    technologies: ["Terraform", "AWS", "Azure", "GitHub Actions"],
    githubUrl: "https://github.com/prakritisharma/multi-cloud-iac",
    caseStudyUrl: "/projects/multi-cloud-iac",
    featured: true,
  },
  {
    id: "k8s-gitops",
    title: "Kubernetes GitOps Pipeline",
    description:
      "End-to-end GitOps deployment pipeline using ArgoCD, Helm charts, and progressive delivery strategies for zero-downtime production releases.",
    image: "/images/projects/k8s-gitops.svg",
    technologies: ["Kubernetes", "ArgoCD", "Helm", "Docker"],
    githubUrl: "https://github.com/prakritisharma/k8s-gitops",
    caseStudyUrl: "/projects/k8s-gitops",
    featured: true,
  },
  {
    id: "observability-stack",
    title: "Production Observability Stack",
    description:
      "Centralized monitoring solution with Prometheus, Grafana, and Loki providing real-time metrics, logs, and alerting for distributed microservices.",
    image: "/images/projects/observability.svg",
    technologies: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
    githubUrl: "https://github.com/prakritisharma/observability-stack",
    caseStudyUrl: "/projects/observability-stack",
    featured: true,
  },
  {
    id: "cicd-platform",
    title: "Self-Hosted CI/CD Platform",
    description:
      "Scalable Jenkins-based CI/CD platform with dynamic agents, pipeline-as-code, and integrated security scanning for containerized workloads.",
    image: "/images/projects/cicd-platform.svg",
    technologies: ["Jenkins", "Docker", "SonarQube", "Nexus"],
    githubUrl: "https://github.com/prakritisharma/cicd-platform",
    caseStudyUrl: "/projects/cicd-platform",
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery Automation",
    description:
      "Automated backup and disaster recovery framework with cross-region replication, RTO/RPO monitoring, and scheduled failover testing.",
    image: "/images/projects/disaster-recovery.svg",
    technologies: ["AWS", "Terraform", "Python", "CloudWatch"],
    githubUrl: "https://github.com/prakritisharma/disaster-recovery",
    caseStudyUrl: "/projects/disaster-recovery",
  },
  {
    id: "network-security",
    title: "Zero-Trust Network Architecture",
    description:
      "Implementation of zero-trust networking with micro-segmentation, WAF rules, and automated security group management across hybrid cloud.",
    image: "/images/projects/network-security.svg",
    technologies: ["AWS WAF", "Terraform", "VPC", "IAM"],
    githubUrl: "https://github.com/prakritisharma/zero-trust-network",
    caseStudyUrl: "/projects/zero-trust-network",
  },
];
