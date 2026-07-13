export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FAF8F5] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#6B7280] md:flex-row">
        <p className="font-medium text-[#6B7280]">© 2026 Farid. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="font-semibold text-[#6B7280]">Next.js</span>, <span className="font-semibold text-[#6B7280]">Tailwind</span>, & <span className="font-semibold text-[#6B7280]">Motion</span>.
        </p>
      </div>
    </footer>
  );
}