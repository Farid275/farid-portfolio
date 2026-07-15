import MotionCard from "./MotionCard";
import TechBadge from "./TechBadge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  isPlaceholder?: boolean;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  link,
  isPlaceholder,
}: ProjectCardProps) {
  return (
    <MotionCard className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-[var(--color-primary)]">
            {title}
          </h3>
          {link && !isPlaceholder && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="mt-4 text-[var(--color-secondary)]">{description}</p>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <TechBadge key={tech} text={tech} />
        ))}
      </div>
    </MotionCard>
  );
}
