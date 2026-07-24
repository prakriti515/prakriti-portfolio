/**
 * Site configuration
 *
 * Replace every REPLACE_* value before publishing.
 * Keep language factual — describe work you have done, systems you have operated,
 * and outcomes you can substantiate in interviews.
 */

export const siteConfig = {
  name: "Prakriti Shrestha",
  title: "Cloud & DevOps Engineer", // e.g. Platform Engineer | SRE | DevSecOps Engineer
  email: "prakritishrestha515@gmail.com",
  location: "Koteshwor, Kathmandu",
  resumeUrl: "/resume.pdf", // add public/resume.pdf
  profileImage: "/images/profilephoto.png", 
  description:
    "Cloud & DevOps Engineer building secure, automated, and highly available production infrastructure across AWS, Azure, and self-hosted platforms.",
  headline: {
    line1: "Building Reliable Cloud Infrastructure,",
    line2: "Automating Operations,",
    line3: "and Solving Production Challenges.",
  },
  about: {
    intro:
      "I'm a Cloud & DevOps Engineer based in Kathmandu, working toward becoming a Cloud Infrastructure Architect and Platform Engineer. At Gorkha Soft, I design and operate a 4-node Proxmox production environment running containerized services, backed by centralized monitoring and automated disaster recovery.",
    points: [
      "Operating focus: virtualized infrastructure provisioning, container orchestration, and production monitoring across hybrid environments.",
      "Platform scope: AWS (EC2, VPC, IAM, S3, RDS, CloudFront), Azure fundamentals, Proxmox VE, and Linux fleet administration.",
      "Engineering practice: CI/CD automation with Jenkins and GitHub Actions, and Infrastructure-as-Code experimentation with Terraform and Ansible.",
      "Security and reliability practice: Cloudflare WAF, UFW, Fail2ban, SSH hardening, and automated backup/disaster-recovery workflows to AWS S3.",
      "Current specialization: deepening observability practices with Prometheus, Grafana, and Loki, and exploring platform engineering patterns for self-service infrastructure.",
    ],
    stats: [
      {
        value: "1+",
        label: "Years in Infrastructure / DevOps",
      },
      {
        value: "3",
        label: "Production Environments Supported",
      },
      {
        value: "[REPLACE — confirm count, your nav references 6 total projects]",
        label: "Infrastructure / Automation Projects",
      },
      {
        value: "[REPLACE — 24 total, or 6 if you show only the featured set]",
        label: "Professional Certifications",
      },
    ],
  },
  social: {
    github: "https://github.com/prakriti515",
    linkedin: "https://www.linkedin.com/in/prakriti-shrestha-7b6101241/",
    twitter: "REPLACE_TWITTER_OR_X_URL", // remove from Footer if unused
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Architecture", href: "/architecture" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;