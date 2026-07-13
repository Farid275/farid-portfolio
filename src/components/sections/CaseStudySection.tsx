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
    <section id="case-study" className="w-full overflow-hidden bg-[#FCFBFA]">
      <AnimatedSection className="relative mx-auto max-w-6xl px-6 py-28 z-10">
        <SectionHeader
          eyebrow="Case Study"
          title="EduManage course management system"
          description="A concise case study showing how the project is structured and what problem it tries to solve."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudyItems.map((item, index) => (
            <MotionCard
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-xl hover:shadow-[#334155]/5"
            >
              <div className="absolute right-0 top-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.05] text-[8rem] font-bold leading-none select-none text-[#1E293B] -mt-6 -mr-4">
                0{index + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#1E293B]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </MotionCard>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}