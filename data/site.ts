/**
 * Site configuration
 *
 * Replace every REPLACE_* value before publishing.
 * Keep language factual — describe work you have done, systems you have operated,
 * and outcomes you can substantiate in interviews.
 */

export const siteConfig = {
  name: "REPLACE_FULL_NAME",
  title: "Cloud & DevOps Engineer", // e.g. Platform Engineer | SRE | DevSecOps Engineer
  email: "REPLACE_EMAIL",
  location: "REPLACE_CITY, REPLACE_COUNTRY",
  resumeUrl: "/resume.pdf", // add public/resume.pdf
  profileImage: "/images/profile.svg", // replace with /images/profile.jpg
  description:
    "REPLACE: One-line summary of your infrastructure scope — platforms, automation, and production domains.",
  headline: {
    line1: "Building Reliable Cloud Infrastructure,",
    line2: "Automating Operations,",
    line3: "and Solving Production Challenges.",
  },
  about: {
    intro:
      "REPLACE: 2–3 sentences on your infrastructure background. State platforms operated, types of systems supported, and your role in delivery or operations. Do not include metrics unless verified.",
    points: [
      "REPLACE: Operating focus — e.g. infrastructure provisioning, release pipelines, or observability",
      "REPLACE: Platform scope — e.g. AWS/Azure, Kubernetes, Linux fleet management",
      "REPLACE: Engineering practice — e.g. IaC standards, change control, runbooks, post-incident review",
      "REPLACE: Security or reliability practice — e.g. least-privilege IAM, backup/DR, SLO definition",
      "REPLACE: Current learning or specialization — e.g. GitOps, service mesh, FinOps, compliance automation",
    ],
    stats: [
      {
        value: "REPLACE",
        label: "Years in Infrastructure / DevOps",
      },
      {
        value: "REPLACE",
        label: "Production Environments Supported",
      },
      {
        value: "REPLACE",
        label: "Infrastructure / Automation Projects",
      },
      {
        value: "REPLACE",
        label: "Professional Certifications",
      },
    ],
  },
  social: {
    github: "REPLACE_GITHUB_PROFILE_URL",
    linkedin: "REPLACE_LINKEDIN_PROFILE_URL",
    twitter: "REPLACE_TWITTER_OR_X_URL", // remove from Footer if unused
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;
