import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { MotionCard } from "@/components/animation/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const experiences = [
  {
    role: "Full-Stack Development Focus",
    company: "Self-Directed & Academic Projects",
    duration: "2023 - Present",
    description:
      "Built structured web applications, implemented secure dashboard interfaces, and managed database-driven features using Next.js and Supabase.",
  },
  {
    role: "Information Technology Implementations",
    company: "Practical Learning",
    duration: "2021 - 2023",
    description:
      "Focused on understanding complex system design, architectural patterns, and practical software engineering principles during academic and personal projects.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-[#FCFBFA]">
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeader
          eyebrow="Experience"
          title="Practical Experience"
          description="A summary of my hands-on software development and project implementation experience."
        />

        <div className="mx-auto max-w-4xl space-y-8">
          {experiences.map((exp, index) => (
            <MotionCard
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-xl hover:shadow-[#334155]/5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#1E293B]">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 text-sm font-medium text-[#64748B] md:mt-0">
                  {exp.duration}
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                {exp.description}
              </p>
            </MotionCard>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
