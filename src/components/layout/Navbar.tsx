export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-bold tracking-tight text-slate-950">
          Farid.dev
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-slate-950">
            About
          </a>
          <a href="#tech" className="transition hover:text-slate-950">
            Tech Stack
          </a>
          <a href="#projects" className="transition hover:text-slate-950">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-slate-950">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}