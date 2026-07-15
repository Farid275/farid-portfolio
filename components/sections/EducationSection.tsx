import AnimatedSection from "../AnimatedSection";
import MotionCard from "../MotionCard";

const educationDetails = [
  {
    degree: "Master of Engineering in Information Technology",
    institution: "Universitas Gadjah Mada",
    status: "ONGOING",
    period: "2024 – Present",
    statusColor: "bg-[var(--color-primary)] text-white",
  },
  {
    degree: "Bachelor of Science in Informatics",
    institution: "University of Muhammadiyah Malang",
    status: "COMPLETED",
    period: "2019 – 2023",
    statusColor: "bg-[var(--color-border)] text-[var(--color-primary)]",
  },
];

export default function EducationSection() {
  return (
    <AnimatedSection id="education">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8">
        <h2 className="border-b border-[var(--color-border)] pb-2 text-3xl font-bold text-[var(--color-primary)]">
          Education
        </h2>
        <div className="flex flex-col gap-4">
          {educationDetails.map((edu, index) => (
            <MotionCard
              key={index}
              className="flex flex-col justify-between gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:bg-[var(--color-soft)] md:flex-row md:items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {edu.degree}
                </h3>
                <p className="text-[var(--color-secondary)]">
                  {edu.institution}
                </p>
              </div>
              <div className="text-left md:text-right">
                <span
                  className={`mb-1 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${edu.statusColor}`}
                >
                  {edu.status}
                </span>
                <p className="text-sm font-medium text-[var(--color-muted)]">
                  {edu.period}
                </p>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
