import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#FAF9F6]">
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeader
          eyebrow="About"
          title="Building practical and structured web applications"
          description="My work focuses on full-stack implementation, dashboard interfaces, CRUD systems, and database-driven application development."
        />

        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-[#E2E0DA] bg-[#FFFFFF] p-10 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#E2E0DA]/50">
          <p className="text-lg leading-relaxed text-[#4A4A4A] text-center">
            I focus on building practical web applications with structured
            interfaces, database integration, and maintainable feature flows. My
            development approach emphasizes clear components, organized data, and
            user-focused functionality.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}