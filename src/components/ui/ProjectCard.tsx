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
    <MotionCard className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#EFEBE9] bg-white p-8 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-300/5">
      <div className="flex h-full flex-col">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Featured Project
          </p>

          <h3 className="text-3xl font-bold tracking-tight text-slate-800 transition-colors group-hover:text-slate-700">
            {title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-slate-500">
            {description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        <ul className="mt-6 flex-grow space-y-3 text-sm text-slate-500">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
              className="flex h-10 items-center justify-center rounded-full bg-slate-400 px-6 text-sm font-semibold text-white transition-all hover:bg-slate-500 hover:shadow-md"
            >
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center justify-center rounded-full border border-[#EFEBE9] bg-white px-6 text-sm font-semibold text-slate-800 transition-all hover:border-violet-300 hover:bg-[#F8F5F2]"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </MotionCard>
  );
}