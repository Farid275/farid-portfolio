export function Footer() {
  return (
    <footer className="border-t border-[#E2E0DA] bg-[#FAF9F6] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#7A7A7A] md:flex-row">
        <p className="font-medium text-[#7A7A7A]">© 2026 Farid. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="font-semibold text-[#7A7A7A]">Next.js</span>, <span className="font-semibold text-[#7A7A7A]">Tailwind</span>, & <span className="font-semibold text-[#7A7A7A]">Motion</span>.
        </p>
      </div>
    </footer>
  );
}