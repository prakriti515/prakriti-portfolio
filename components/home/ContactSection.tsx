import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  DownloadIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "View repositories",
    href: siteConfig.social.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: siteConfig.resumeUrl,
    icon: DownloadIcon,
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Open to discussing infrastructure challenges, DevOps opportunities, and cloud architecture projects."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={"external" in link && link.external ? "_blank" : undefined}
              rel={
                "external" in link && link.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center gap-4 rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <link.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {link.label}
                </p>
                <p className="text-sm text-text-secondary">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={`mailto:${siteConfig.email}`} size="lg">
            <MailIcon />
            Send an Email
          </Button>
        </div>
      </div>
    </section>
  );
}
