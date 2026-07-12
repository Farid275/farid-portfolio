import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { MotionCard } from "@/components/animation/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStacks } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <AnimatedSection id="tech" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools and technologies I use"
          description="A focused set of technologies for building structured web applications and database-driven systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {techStacks.map((group) => (
            <MotionCard
              key={group.category}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {group.category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
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