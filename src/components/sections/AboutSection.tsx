import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow="About"
        title="Building practical and structured web applications"
        description="My work focuses on full-stack implementation, dashboard interfaces, CRUD systems, and database-driven application development."
      />

      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-base leading-8 text-slate-600">
          I focus on building practical web applications with structured
          interfaces, database integration, and maintainable feature flows. My
          development approach emphasizes clear components, organized data, and
          user-focused functionality.
        </p>
      </div>
    </AnimatedSection>
  );
}