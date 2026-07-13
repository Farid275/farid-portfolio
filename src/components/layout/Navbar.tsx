export function Navbar() {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#E5E7EB] bg-[#FFFFFF]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-base font-bold tracking-tight text-[#1E293B] transition hover:text-[#334155]">
          Farid<span className="text-[#334155]">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-semibold text-[#64748B] transition-colors hover:text-[#1E293B] active:text-[#334155] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#334155] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}