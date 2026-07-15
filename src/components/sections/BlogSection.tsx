import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { MotionCard } from "@/components/animation/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const notes = [
  {
    title: "Software Engineering Notes",
    description: "Personal notes and concepts on architectural patterns and system design.",
    date: "Coming Soon",
  },
  {
    title: "Full-Stack Development Learning",
    description: "Explorations into new frameworks, state management, and database optimizations.",
    date: "Coming Soon",
  },
  {
    title: "Project Documentation",
    description: "Deep dives into how specific features were built and decisions made along the way.",
    date: "Coming Soon",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="w-full bg-[#FAF9F6]">
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeader
          eyebrow="Blog"
          title="Notes & Learnings"
          description="A collection of thoughts, technical notes, and upcoming articles on software engineering."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {notes.map((note) => (
            <MotionCard
              key={note.title}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#E2E0DA] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4B5563] hover:shadow-xl hover:shadow-[#252525]/5"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#4A4A4A]">
                {note.date}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#181818]">
                {note.title}
              </h3>
              <p className="flex-1 text-base leading-relaxed text-[#4A4A4A]">
                {note.description}
              </p>
            </MotionCard>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
