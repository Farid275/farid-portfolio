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
    <MotionCard className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex h-full flex-col">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Featured Project
          </p>

          <h3 className="text-2xl font-bold text-slate-950">{title}</h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        <ul className="mt-6 space-y-2 text-sm text-slate-600">
          {features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-amber-400"
            >
              GitHub
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </MotionCard>
  );
}