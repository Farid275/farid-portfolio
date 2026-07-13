type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-[#B2C2B3]/30 bg-[#B2C2B3]/20 px-3.5 py-1.5 text-sm font-medium text-slate-800 shadow-sm transition-all hover:border-violet-300 hover:bg-violet-300/20">
      {label}
    </span>
  );
}