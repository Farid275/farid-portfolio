import AnimatedSection from "../AnimatedSection";
import MotionCard from "../MotionCard";

const blogPosts = [
  {
    title: "Software Engineering Notes",
    description: "Reflections on architecture, clean code, and building scalable systems.",
  },
  {
    title: "Full-Stack Learning Journal",
    description: "Documenting the journey of learning new frameworks and tools.",
  },
  {
    title: "Project Documentation",
    description: "Deep dives into the technical challenges and solutions of my projects.",
  },
];

export default function BlogSection() {
  return (
    <AnimatedSection id="blog">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8">
        <div className="flex items-end justify-between border-b border-[var(--color-border)] pb-2">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            Notes & Writing
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:underline"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <MotionCard key={index} className="flex h-full flex-col justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div>
                <span className="mb-4 inline-block rounded bg-[var(--color-tag)] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Coming Soon
                </span>
                <h3 className="mb-2 text-xl font-semibold text-[var(--color-primary)]">
                  {post.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-[var(--color-secondary)]">
                {post.description}
              </p>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
