export type BehindProductionPost = {
  id: string;
  title: string;
  excerpt: string;
  series: string;
  date: string;
  readTime: string;
  linkedinUrl: string;
  tags: string[];
};

export const behindProductionPosts: BehindProductionPost[] = [
  {
    id: "incident-response",
    title: "How We Reduced MTTR by 60% with Structured Incident Response",
    excerpt:
      "A deep dive into building runbooks, on-call rotations, and post-mortem culture that transformed our production incident handling.",
    series: "Behind Production",
    date: "Jun 2026",
    readTime: "8 min read",
    linkedinUrl: "https://linkedin.com/in/prakritisharma",
    tags: ["Incident Response", "SRE", "On-Call"],
  },
  {
    id: "terraform-at-scale",
    title: "Managing Terraform at Scale: Lessons from 500+ Resources",
    excerpt:
      "Practical strategies for module design, state management, and team workflows when your infrastructure codebase grows beyond a single team.",
    series: "Behind Production",
    date: "May 2026",
    readTime: "10 min read",
    linkedinUrl: "https://linkedin.com/in/prakritisharma",
    tags: ["Terraform", "IaC", "DevOps"],
  },
  {
    id: "k8s-production",
    title: "Running Kubernetes in Production: What Nobody Tells You",
    excerpt:
      "Real-world challenges of operating Kubernetes clusters — from resource limits and networking quirks to upgrade strategies and cost optimization.",
    series: "Behind Production",
    date: "Apr 2026",
    readTime: "12 min read",
    linkedinUrl: "https://linkedin.com/in/prakritisharma",
    tags: ["Kubernetes", "Production", "Cloud Native"],
  },
  {
    id: "security-hardening",
    title: "Security Hardening Linux Servers: A Practical Checklist",
    excerpt:
      "Step-by-step guide to securing production Linux servers with CIS benchmarks, automated auditing, and continuous compliance monitoring.",
    series: "Behind Production",
    date: "Mar 2026",
    readTime: "7 min read",
    linkedinUrl: "https://linkedin.com/in/prakritisharma",
    tags: ["Security", "Linux", "Compliance"],
  },
];
