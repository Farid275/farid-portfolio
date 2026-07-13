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
        <p className="mb-4 inline-block rounded-full bg-[#F3F4F6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1E293B] shadow-sm ring-1 ring-[#E5E7EB]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[#1E293B] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-[#64748B]">
          {description}
        </p>
      )}
    </div>
  );
}