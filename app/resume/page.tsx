import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ResumePageContent } from "@/components/resume/ResumePageContent";
import { resumeData } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: resumeData.page.description,
};

export default function ResumePage() {
  return (
    <PageShell>
      <ResumePageContent />
    </PageShell>
  );
}
