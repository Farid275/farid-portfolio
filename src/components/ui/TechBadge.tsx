type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#F3F4F6] px-2.5 py-1 text-xs font-semibold text-[#1E293B] shadow-sm ring-1 ring-inset ring-[#E5E7EB] transition-colors hover:bg-[#E2E8F0] hover:text-[#1E293B] hover:ring-[#CBD5E1]">
      {label}
    </span>
  );
}