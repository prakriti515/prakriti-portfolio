import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="animate-float absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="animate-float-delayed absolute right-[15%] top-[30%] h-48 w-48 rounded-full bg-secondary/5 blur-3xl" />
        <div className="animate-pulse-subtle absolute left-1/2 top-[60%] h-32 w-32 -translate-x-1/2 rounded-full bg-primary/3 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              {siteConfig.title}
            </p>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
              {siteConfig.headline.line1}
              <br />
              <span className="text-primary">{siteConfig.headline.line2}</span>
              <br />
              {siteConfig.headline.line3}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/projects" size="lg">
                View Projects
              </Button>
              <Button
                href={siteConfig.resumeUrl}
                variant="outline"
                size="lg"
                external
              >
                <DownloadIcon />
                Download Resume
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button
                href={siteConfig.social.github}
                variant="ghost"
                size="sm"
                external
              >
                <GithubIcon />
                GitHub
              </Button>
              <Button
                href={siteConfig.social.linkedin}
                variant="ghost"
                size="sm"
                external
              >
                <LinkedinIcon />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-primary/10 sm:h-80 sm:w-80">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-xl border border-border bg-white px-4 py-2 shadow-lg">
                <p className="text-xs font-medium text-text-secondary">
                  Available for opportunities
                </p>
                <p className="text-sm font-semibold text-primary">
                  Cloud &amp; DevOps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
