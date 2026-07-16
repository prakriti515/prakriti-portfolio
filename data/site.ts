export const siteConfig = {
  name: "Prakriti Sharma",
  title: "Cloud & DevOps Engineer",
  email: "prakriti.sharma@email.com",
  location: "Kathmandu, Nepal",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/profile.svg",
  description:
    "Cloud & DevOps Engineer specializing in Linux, AWS, Azure, Docker, Infrastructure Automation, Networking, Security, Monitoring, CI/CD and Production Operations.",
  headline: {
    line1: "Building Reliable Cloud Infrastructure,",
    line2: "Automating Operations,",
    line3: "and Solving Production Challenges.",
  },
  about: {
    intro:
      "I'm a Cloud & DevOps Engineer with a passion for building resilient, scalable infrastructure that keeps production systems running smoothly. With hands-on experience across AWS, Azure, and on-premises environments, I bridge the gap between development and operations.",
    points: [
      "Engineering mindset focused on reliability, observability, and automation",
      "Passionate about Infrastructure as Code and eliminating manual toil",
      "Committed to continuous learning and staying current with cloud-native practices",
      "Strong advocate for security-first infrastructure design",
      "Experience managing production systems at scale with 99.9%+ uptime targets",
    ],
  },
  social: {
    github: "https://github.com/prakritisharma",
    linkedin: "https://linkedin.com/in/prakritisharma",
    twitter: "https://twitter.com/prakritisharma",
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
