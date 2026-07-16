import Link from "next/link";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Certifications"
            title="Professional Credentials"
            description="Industry-recognized certifications validating expertise across cloud platforms, containers, and infrastructure."
            className="mb-0"
          />
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-primary/30 hover:text-primary"
          >
            View All
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
