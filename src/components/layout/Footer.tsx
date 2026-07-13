export function Footer() {
  return (
    <footer className="border-t border-[#EFEBE9] bg-[#F8F5F2] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p className="font-medium text-slate-800">© 2026 Farid. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="font-semibold text-slate-800">Next.js</span>, <span className="font-semibold text-slate-800">Tailwind</span>, & <span className="font-semibold text-slate-800">Motion</span>.
        </p>
      </div>
    </footer>
  );
}