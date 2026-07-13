import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="About"
        title="Building practical and structured web applications"
        description="My work focuses on full-stack implementation, dashboard interfaces, CRUD systems, and database-driven application development."
      />

      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-[#EFEBE9] bg-white p-10 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#EFEBE9]/50">
        <p className="text-lg leading-relaxed text-slate-500 text-center">
          I focus on building practical web applications with structured
          interfaces, database integration, and maintainable feature flows. My
          development approach emphasizes clear components, organized data, and
          user-focused functionality.
        </p>
      </div>
    </AnimatedSection>
  );
}