const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/faridakkbar/" },
  { name: "Facebook", url: "https://www.facebook.com/farid.352299" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/faridakbar11/" },
  { name: "X", url: "https://x.com/faridakbbr" },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between bg-[var(--color-primary)] px-8 py-12 text-white md:flex-row max-w-7xl mx-auto md:max-w-none md:px-16">
      <a href="#" className="mb-6 text-2xl font-black text-white md:mb-0">
        Farid.dev
      </a>
      <p className="mb-6 text-neutral-400 md:mb-0">
        © 2024 Farid.dev. All rights reserved.
      </p>
      <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            className="text-neutral-400 transition-colors duration-300 hover:text-white hover:opacity-80"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </footer>
  );
}
