import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { BehindProductionSection } from "@/components/home/BehindProductionSection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <BehindProductionSection />
        <ArticlesSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
