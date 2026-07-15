import { AnimatedSection } from "@/components/animation/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-[#FAF9F6]">
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeader
          eyebrow="Projects"
          title="Featured project work"
          description="Selected project work focused on structured application development, dashboard design, and database integration."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}