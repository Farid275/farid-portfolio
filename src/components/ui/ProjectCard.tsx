import { MotionCard } from "@/components/animation/MotionCard";
import { TechBadge } from "@/components/ui/TechBadge";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export function ProjectCard({
  title,
  description,
  stack,
  features,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <MotionCard className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-xl hover:shadow-[#334155]/5">
      <div className="flex h-full flex-col">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E293B]">
            Featured Project
          </p>

          <h3 className="text-3xl font-bold tracking-tight text-[#1E293B]">
            {title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-[#64748B]">
            {description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        <ul className="mt-6 flex-grow space-y-3 text-sm text-[#64748B]">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#1E293B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center justify-center rounded-full bg-[#334155] px-6 text-sm font-bold text-[#FFFFFF] transition-all hover:bg-[#475569] hover:shadow-md hover:shadow-[#334155]/20"
            >
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#FFFFFF] px-6 text-sm font-bold text-[#1E293B] transition-all hover:border-[#CBD5E1] hover:bg-[#F8F5F2]"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </MotionCard>
  );
}