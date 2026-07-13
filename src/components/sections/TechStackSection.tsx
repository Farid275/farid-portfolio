import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { MotionCard } from "@/components/animation/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStacks } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <section id="skills" className="w-full bg-[#FCFBFA]">
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeader
          eyebrow="Skills"
          title="Tools and technologies"
          description="A focused set of technologies for building structured web applications and database-driven systems."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStacks.map((category) => (
            <MotionCard
              key={category.category}
              className="group overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-xl hover:shadow-[#334155]/5"
            >
              <h3 className="mb-6 text-xl font-bold text-[#1E293B]">
                {category.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}