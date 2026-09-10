import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { TechLogo } from "@/components/ui/TechLogos";
import { DownloadIcon, ArrowRightIcon } from "@/components/ui/icons";
import { homeData } from "@/data/home";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  const { hero } = homeData;

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Grid & Glows */}
      <div className="hero-grid absolute inset-0 -z-20 bg-[#060913]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[10%] h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            {/* Tag Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-[#0d1222]/80 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
                {hero.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.headline.line1}
              <br />
              {hero.headline.line2Prefix}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {hero.headline.highlight1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {hero.headline.highlight2}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/projects"
                variant="gradient"
                size="lg"
                className="rounded-xl px-6 py-3 font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:shadow-indigo-600/35 hover:scale-[1.02]"
              >
                View My Work
                <ArrowRightIcon />
              </Button>
              <Button
                href={siteConfig.resumeUrl}
                variant="outline"
                size="lg"
                external
                className="rounded-xl border-white/10 bg-[#0d1222]/80 px-6 py-3 font-semibold text-white backdrop-blur-md hover:border-indigo-500/40 hover:bg-[#131930] hover:scale-[1.02]"
              >
                <DownloadIcon />
                Download Resume
              </Button>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-12">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                {hero.technologies.map((tech) => (
                  <span
                    key={tech.id}
                    title={tech.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 hover:scale-115"
                  >
                    <TechLogo id={tech.id} className="h-7 w-7 drop-shadow-md" />
                    <span className="sr-only">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Photo & Floating Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[400px]">
              
              {/* Background ambient lighting */}
              <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-600/40 via-indigo-600/35 to-purple-600/25 blur-3xl -z-10" />

              {/* Cloud / Network line deco */}
              <div className="pointer-events-none absolute -top-8 -right-4 -z-10 text-indigo-400/20">
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                  <path d="M20 50 Q 35 25 55 35 Q 75 25 85 45 Q 95 65 75 75 H 25 Q 10 75 10 60 Q 10 50 20 50 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
                  <circle cx="85" cy="45" r="3" fill="currentColor"/>
                  <circle cx="55" cy="35" r="3" fill="currentColor"/>
                </svg>
              </div>

              {/* Profile image with subtle gradient fading at bottom */}
              <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[360px] overflow-hidden rounded-3xl">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  priority
                  className="object-cover object-top scale-[1.03]"
                  sizes="(max-width: 768px) 90vw, 360px"
                />
                {/* Bottom soft gradient blend */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060913] via-[#060913]/60 to-transparent" />
              </div>

              {/* Floating Stats Bar docked at bottom */}
              <div className="relative z-10 -mt-8 w-full rounded-2xl border border-white/10 bg-[#0c1020]/95 px-4 py-4.5 shadow-2xl shadow-black/80 backdrop-blur-xl sm:px-5">
                <div className="grid grid-cols-4 gap-2 text-center divide-x divide-white/5">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="px-1.5 first:pl-0 last:pr-0">
                      <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] leading-tight font-medium text-slate-400 sm:text-[11px]">
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
