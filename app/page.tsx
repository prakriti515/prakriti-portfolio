import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatIDoSection } from "@/components/home/WhatIDoSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { HomeCTASection } from "@/components/home/HomeCTASection";
import { TechStackBar } from "@/components/home/TechStackBar";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <WhatIDoSection />
      <ProjectsSection />
      <HomeCTASection />
      <TechStackBar />
    </PageShell>
  );
}
