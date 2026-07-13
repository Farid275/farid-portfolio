import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EducationSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Education"
        title="Academic background"
        description="Education and learning background that supports my work in software engineering and information technology."
      />

      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-[#EFEBE9] bg-white p-10 shadow-sm transition-all hover:border-slate-400 hover:shadow-xl hover:shadow-slate-400/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">
              Master of Information Technology
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-slate-500">
              Focused on software engineering, data analysis, and information
              technology implementation.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B2C2B3]/20 text-[#B2C2B3]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}