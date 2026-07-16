export type Article = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    id: "aws-cost-optimization",
    title: "AWS Cost Optimization Strategies That Actually Work",
    excerpt:
      "Practical techniques for reducing cloud spend without sacrificing performance — reserved instances, rightsizing, and automated cleanup policies.",
    date: "Jul 2026",
    readTime: "6 min read",
    category: "Cloud",
    slug: "aws-cost-optimization",
    tags: ["AWS", "FinOps", "Cost Management"],
  },
  {
    id: "docker-best-practices",
    title: "Docker Best Practices for Production Workloads",
    excerpt:
      "Security, performance, and maintainability patterns for building production-ready container images that deploy reliably every time.",
    date: "Jun 2026",
    readTime: "8 min read",
    category: "Containers",
    slug: "docker-best-practices",
    tags: ["Docker", "Containers", "DevOps"],
  },
  {
    id: "cicd-pipeline-design",
    title: "Designing CI/CD Pipelines for Microservices",
    excerpt:
      "Architecture patterns for building scalable CI/CD pipelines that handle independent deployments, feature flags, and rollback strategies.",
    date: "May 2026",
    readTime: "9 min read",
    category: "CI/CD",
    slug: "cicd-pipeline-design",
    tags: ["CI/CD", "Microservices", "GitOps"],
  },
];
