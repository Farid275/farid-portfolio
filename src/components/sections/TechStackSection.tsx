import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { MotionCard } from "@/components/animation/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStacks } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <AnimatedSection id="tech" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools and technologies"
          description="A focused set of technologies for building structured web applications and database-driven systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {techStacks.map((group) => (
            <MotionCard
              key={group.category}
              className="group overflow-hidden rounded-[2rem] border border-[#EFEBE9] bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-400/5"
            >
              <h3 className="text-xl font-bold text-slate-800">
                {group.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}