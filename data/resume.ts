/**
 * Resume page content
 *
 * Replace every REPLACE_* value with verified information.
 * Projects and certifications are sourced from data/projects.ts and data/certifications.ts.
 */

export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
};

export type SkillCategory = {
  id: string;
  category: string;
  skills: string[];
};

export const resumeData = {
  page: {
    title: "Resume",
    description:
      "Professional summary, experience, technical skills, and credentials.",
  },
  header: {
    headline: "Cloud & DevOps Engineer",
    tagline:
      "Building secure, automated, and highly available production infrastructure — working toward Cloud Infrastructure Architecture and Platform Engineering.",
  },
  summary:
    "Cloud & DevOps Engineer with hands-on production experience designing and operating virtualized infrastructure, containerized workloads, and observability platforms across hybrid environments. Skilled in AWS and Azure fundamentals, Linux systems administration, Docker, CI/CD automation, and security hardening, with research experience applying multi-agent reinforcement learning to distributed systems problems. Focused on building reliable, scalable, and secure infrastructure, with a long-term goal of growing into cloud architecture and platform engineering leadership roles.",
  experience: [
    {
      id: "experience-1",
      title: "Cloud DevOps Engineer",
      company: "Gorkha Soft Pvt. Ltd.",
      location: "Kathmandu, Nepal",
      period: "Jan 2026 – Present",
      responsibilities: [
        "Designed, deployed, and manage a 4-node Proxmox virtualization environment supporting isolated production workloads for applications, databases, and monitoring services.",
        "Manage 15+ Docker containers via Docker Compose, ensuring consistent deployments and simplified operational management.",
        "Built and maintain a centralized monitoring and observability platform using Prometheus, Grafana, Loki, and Alertmanager.",
        "Implemented infrastructure security (Cloudflare WAF, UFW, Fail2ban, SSL/TLS, JWT authentication, SSH hardening) and automated backup/disaster-recovery workflows to AWS S3.",
        "Configured secure remote administration via Tailscale VPN and manage Linux server administration, storage provisioning, and network segmentation.",
      ],
      technologies: [
        "Proxmox VE",
        "Docker",
        "Nginx",
        "Prometheus",
        "Grafana",
        "Loki",
        "Alertmanager",
        "Cloudflare",
        "AWS S3",
        "Tailscale",
      ],
    },
    {
      id: "experience-2",
      title: "Teaching Assistant, Computing (CSE & CSDF)",
      company: "ISMT College",
      location: "Kathmandu, Nepal",
      period: "Apr 2025 – Jan 2026",
      responsibilities: [
        "Conducted hands-on laboratory sessions covering programming, networking, Linux administration, databases, and system troubleshooting.",
        "Guided students through network configuration, firewall concepts, encryption fundamentals, and Python programming exercises.",
        "Assisted students with academic projects while promoting technical documentation and structured problem-solving practices.",
      ],
      technologies: ["Linux", "Networking", "Python", "Databases"],
    },
    {
      id: "experience-3",
      title: "Cloud Apprenticeship",
      company: "Adex International",
      location: "Kathmandu, Nepal",
      period: "May 2025 – Aug 2025",
      responsibilities: [
        "Designed and deployed cloud resources using EC2, S3, RDS, VPC, IAM, and CloudFront, following security and cost-optimization principles.",
        "Practiced Infrastructure as Code concepts and CI workflows using GitHub for version control.",
        "Built sample architectures implementing Auto Scaling, load balancing, and secure networking, aligned with the AWS Well-Architected Framework.",
      ],
      technologies: ["AWS EC2", "S3", "RDS", "VPC", "IAM", "CloudFront", "Auto Scaling"],
    },
    {
      id: "experience-4",
      title: "DevOps Engineer",
      company: "IronRim, LLC",
      location: "Columbus, OH (Remote)",
      period: "Jan 2024",
      responsibilities: [
        "Built and optimized CI/CD pipelines using Jenkins and GitHub Actions to automate build, test, and deployment workflows.",
        "Assisted in optimizing development environments and improving deployment reliability through automation.",
        "Collaborated with engineering teams on release planning and sprint demos.",
      ],
      technologies: ["Jenkins", "GitHub Actions", "CI/CD"],
    },
    {
      id: "experience-5",
      title: "Technical Support",
      company: "Jamun Tek",
      location: "Kathmandu, Nepal",
      period: "Jun 2023 – Oct 2023",
      responsibilities: [
        "Provided technical support and troubleshooting for software, networking, and client-facing systems while maintaining service continuity.",
        "Collaborated across teams to resolve problems efficiently.",
      ],
      technologies: ["Networking", "Technical Support"],
    },
    {
      id: "experience-6",
      title: "Enumerator, National Agriculture Census",
      company: "Central Bureau of Statistics, Nepal",
      location: "Nepal",
      period: "Apr 2022 – Jun 2022",
      responsibilities: [
        "Collected and validated field data as part of Nepal's National Agriculture Census (Rastriya Krishi Gadana 2078).",
        "Contributed structured datasets used for national agricultural policy planning.",
      ],
      technologies: ["Data Collection", "Field Research"],
    },
    {
      id: "experience-7",
      title: "Science & Math Teacher",
      company: "Galkot Secondary School",
      location: "Galkot, Nepal",
      period: "Sep 2021 – Dec 2021",
      responsibilities: [
        "Taught science and mathematics to secondary-level students, building foundational concepts and problem-solving skills.",
        "Adapted instruction to different learning paces and classroom needs.",
      ],
      technologies: ["Teaching", "Curriculum Delivery"],
    },
  ] as ExperienceEntry[],
  technicalSkills: [
    {
      id: "skills-cloud",
      category: "Cloud & Infrastructure",
      skills: [
        "AWS (EC2, VPC, IAM, S3, RDS, CloudFront, Auto Scaling, Route 53)",
        "Azure (VNets, VMs, ARM templates, Key Vault)",
        "Proxmox VE",
        "Linux Administration",
      ],
    },
    {
      id: "skills-containers",
      category: "Containers & CI/CD",
      skills: ["Docker", "Docker Compose", "Kubernetes", "Jenkins", "GitHub Actions"],
    },
    {
      id: "skills-ops",
      category: "Operations & Security",
      skills: [
        "Prometheus & Grafana",
        "Loki & Alertmanager",
        "Cloudflare WAF",
        "UFW / Fail2ban / SSH Hardening",
        "Backup & Disaster Recovery",
        "Tailscale VPN",
      ],
    },
    {
      id: "skills-scripting",
      category: "Scripting & Automation",
      skills: ["Bash", "Python", "Terraform", "Ansible"],
    },
  ],
  education: [
    {
      id: "education-1",
      degree: "BSc (Hons) Computer Systems Engineering",
      institution: "University of Sunderland (in partnership with ISMT College)",
      location: "Kathmandu, Nepal",
      period: "2022 – 2025",
    },
    {
      id: "education-2",
      degree: "BTEC HND in Computing",
      institution: "ISMT College",
      location: "Kathmandu, Nepal",
      period: "2024",
    },
  ] as EducationEntry[],
  professionalInterests: [
    "Cloud infrastructure architecture and platform engineering",
    "Infrastructure automation and Infrastructure as Code",
    "Production reliability, observability, and incident response",
    "Cloud security and DevSecOps practices",
  ],
} as const;