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
    <nav className="fixed top-0 z-50 w-full border-b border-[#E2E0DA] bg-[#FFFFFF]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-base font-bold tracking-tight text-[#181818] transition hover:text-[#252525]">
          Farid<span className="text-[#252525]">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-semibold text-[#4A4A4A] transition-colors hover:text-[#181818] active:text-[#252525] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#252525] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}