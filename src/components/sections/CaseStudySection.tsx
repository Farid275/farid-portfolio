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
    <AnimatedSection className="px-6 py-28 bg-[#EFEBE9]/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Case Study"
          title="EduManage course management system"
          description="A concise case study showing how the project is structured and what problem it tries to solve."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudyItems.map((item, index) => (
            <MotionCard
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#EFEBE9] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-400/5"
            >
              <div className="absolute right-0 top-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10 text-[8rem] font-bold leading-none select-none text-slate-400 -mt-6 -mr-4">
                0{index + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}