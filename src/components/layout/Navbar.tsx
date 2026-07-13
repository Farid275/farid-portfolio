export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#EFEBE9] bg-white/70 backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-base font-bold tracking-tight text-slate-800 transition hover:text-slate-400">
          Farid<span className="text-slate-400">.dev</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          {["About", "Tech Stack", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative transition-colors hover:text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-400 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 pb-1"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}