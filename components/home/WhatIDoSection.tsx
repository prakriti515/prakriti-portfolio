import { ExpertiseIcon } from "@/components/ui/icons";
import { homeData } from "@/data/home";
import type { HomeService } from "@/data/home";

const iconColorVariants: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cloud: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    glow: "group-hover:border-blue-500/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]",
  },
  devops: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    glow: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]",
  },
  security: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-400",
    glow: "group-hover:border-indigo-500/40 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]",
  },
  monitoring: {
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    text: "text-sky-400",
    glow: "group-hover:border-sky-500/40 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]",
  },
  backup: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    glow: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]",
  },
};

function ServiceCard({ service }: { service: HomeService }) {
  const styling = iconColorVariants[service.id] || iconColorVariants.cloud;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/5 bg-[#0c1020]/90 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-[#10162c] hover:shadow-xl hover:shadow-indigo-500/10">
      {/* Icon Squircle */}
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${styling.bg} ${styling.border} ${styling.text} ${styling.glow}">
        <div className={`${styling.text}`}>
          <ExpertiseIcon name={service.icon} className="h-7 w-7" />
        </div>
      </div>

      <h3 className="text-base font-bold text-white transition-colors group-hover:text-indigo-200">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
        {service.description}
      </p>
    </article>
  );
}

export function WhatIDoSection() {
  const { services } = homeData;

  return (
    <section id="services" className="relative py-20 lg:py-28">
      {/* Background Subtle Light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[600px] rounded-full bg-blue-600/5 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Center Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mx-auto mb-3 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            {services.description}
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
