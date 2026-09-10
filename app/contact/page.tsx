import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for Cloud & DevOps engineering opportunities, infrastructure consulting, and architecture inquiries.`,
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        label="GET IN TOUCH"
        title="Contact Me"
        description="Have a question, an infrastructure challenge to solve, or an exciting opportunity? Send a message directly or connect via email and LinkedIn."
      />
      <ContactPageContent />
    </PageShell>
  );
}
