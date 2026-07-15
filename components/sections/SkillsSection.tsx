import AnimatedSection from "../AnimatedSection";
import MotionCard from "../MotionCard";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "C++", "Go"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma", "Linux"],
  },
];

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8">
        <h2 className="border-b border-[var(--color-border)] pb-2 text-3xl font-bold text-[var(--color-primary)]">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {skillCategories.map((category) => (
            <MotionCard key={category.title} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-4 text-xl font-semibold text-[var(--color-primary)]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-[var(--color-tag)] px-3 py-1 text-sm text-[var(--color-secondary)] rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
