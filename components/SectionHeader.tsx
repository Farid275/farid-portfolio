export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-secondary)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
