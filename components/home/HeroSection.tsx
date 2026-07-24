import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DownloadIcon, ArrowRightIcon } from "@/components/ui/icons";
import { homeData } from "@/data/home";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  const { hero } = homeData;

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="hero-grid absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-0 -z-10">
        <div className="animate-float absolute left-[5%] top-[10%] h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="animate-float-delayed absolute right-[5%] top-[20%] h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              {hero.tag}
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
              {hero.headline.prefix}{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-400 to-secondary bg-clip-text text-transparent">
                {hero.headline.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/projects" variant="gradient" size="lg">
                View My Work
                <ArrowRightIcon />
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

            <div className="mt-10">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap gap-2.5">
                {hero.technologies.map((tech) => (
                  <span
                    key={tech.id}
                    title={tech.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-[10px] font-bold text-text-primary transition-transform hover:scale-105"
                    style={{ boxShadow: `0 0 0 1px ${tech.color}22 inset` }}
                  >
                    <span style={{ color: tech.color }}>{tech.name.slice(0, 2).toUpperCase()}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 blur-2xl" />
              <div className="absolute -right-4 top-8 h-24 w-24 rounded-full border border-primary/20 bg-primary/5" />
              <div className="absolute -left-2 bottom-24 h-16 w-16 rotate-45 border border-secondary/20 bg-secondary/5" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-2xl shadow-primary/10">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 left-1/2 w-[calc(100%+1rem)] -translate-x-1/2 rounded-2xl border border-border bg-card/95 px-4 py-4 shadow-xl backdrop-blur-md sm:px-5">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-lg font-bold text-text-primary sm:text-xl">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-text-secondary sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
