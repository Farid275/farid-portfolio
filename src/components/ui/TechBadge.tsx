type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#F1F0EC] px-2.5 py-1 text-xs font-semibold text-[#181818] shadow-sm ring-1 ring-inset ring-[#E2E0DA] transition-colors hover:bg-[#E2E0DA] hover:text-[#181818] hover:ring-[#4B5563]">
      {label}
    </span>
  );
}