type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-24 ${className}`}>
      {eyebrow && (
        <p className="mb-4 inline-block rounded-full bg-[#F1F0EC] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#181818] shadow-sm ring-1 ring-[#E2E0DA]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[#181818] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-[#4A4A4A]">
          {description}
        </p>
      )}
    </div>
  );
}