import { ContentSection } from "@/components/ui/ContentSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TechnologyDecision } from "@/data/architecture";

type TechnologyDecisionsSectionProps = {
  decisions: TechnologyDecision[];
};

export function TechnologyDecisionsSection({
  decisions,
}: TechnologyDecisionsSectionProps) {
  return (
    <ContentSection id="technology-decisions">
      <SectionHeading
        label="Decisions"
        title="Technology Decisions"
        description="Documented choices — context, rationale, and accepted trade-offs."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {decisions.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-xl border border-border bg-white p-6"
          >
            <h3 className="font-semibold text-text-primary">{item.decision}</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed">
              <div>
                <p className="font-medium text-text-primary">Context</p>
                <p className="mt-1 text-text-secondary">{item.context}</p>
              </div>
              <div>
                <p className="font-medium text-text-primary">Rationale</p>
                <p className="mt-1 text-text-secondary">{item.rationale}</p>
              </div>
              {item.tradeoffs && (
                <div>
                  <p className="font-medium text-text-primary">Trade-offs</p>
                  <p className="mt-1 text-text-secondary">{item.tradeoffs}</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </ContentSection>
  );
}
