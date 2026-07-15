export default function TechBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--color-tag)] px-3 py-1 text-xs font-semibold text-[var(--color-secondary)]">
      {text}
    </span>
  );
}
