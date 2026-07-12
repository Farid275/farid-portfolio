import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EducationSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow="Education"
        title="Academic background"
        description="Education and learning background that supports my work in software engineering and information technology."
      />

      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-slate-950">
          Master of Information Technology
        </h3>

        <p className="mt-2 text-slate-600">
          Focused on software engineering, data analysis, and information
          technology implementation.
        </p>
      </div>
    </AnimatedSection>
  );
}