import AnimatedSection from "../AnimatedSection";
import MotionCard from "../MotionCard";

const aboutItems = [
  {
    number: "01",
    title: "Full-Stack Development",
    description: "End-to-end application development using modern frameworks and standard methodologies.",
  },
  {
    number: "02",
    title: "Database Integration",
    description: "Designing structured schemas, optimizing queries, and managing data pipelines securely.",
  },
  {
    number: "03",
    title: "Dashboard Systems",
    description: "Creating comprehensive admin panels and data visualization interfaces for complex management systems.",
  },
  {
    number: "04",
    title: "Software Architecture",
    description: "Planning scalable, maintainable application structures with clear separation of concerns.",
  },
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-8 lg:grid-cols-12">
        <MotionCard isInteractive={false} className="flex flex-col justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-soft)] p-8 lg:col-span-4">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-primary)]">
            About Me
          </h2>
          <p className="mb-4 text-[var(--color-secondary)]">
            I am a dedicated software engineer focusing on building robust, scalable full-stack applications. My approach is rooted in clean code principles, effective database design, and creating seamless user experiences.
          </p>
          <p className="text-[var(--color-secondary)]">
            With a strong foundation in modern web technologies, I bridge the gap between complex backend architecture and intuitive frontend interfaces.
          </p>
        </MotionCard>
        
        <div className="grid grid-cols-1 gap-4 lg:col-span-8 md:grid-cols-2">
          {aboutItems.map((item) => (
            <MotionCard key={item.number} className="flex flex-col gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  {item.number}
                </span>
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-secondary)]">
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
