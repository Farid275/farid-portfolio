import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { MotionCard } from "@/components/animation/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const caseStudyItems = [
  {
    title: "Problem",
    description:
      "Academic data can become difficult to manage when course information, users, and learning activities are scattered across manual workflows.",
  },
  {
    title: "Goal",
    description:
      "Build a structured course management system with clear modules, dashboard navigation, and database-driven features.",
  },
  {
    title: "Solution",
    description:
      "Develop a web-based dashboard that organizes academic data through reusable components, CRUD operations, and clean interface structure.",
  },
  {
    title: "What I Learned",
    description:
      "This project strengthened my understanding of full-stack structure, database integration, reusable components, and feature organization.",
  },
];

export function CaseStudySection() {
  return (
    <AnimatedSection className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Case Study"
          title="EduManage course management system"
          description="A concise case study showing how the project is structured and what problem it tries to solve."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudyItems.map((item) => (
            <MotionCard
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}