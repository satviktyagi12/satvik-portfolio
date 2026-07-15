"use client";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          Satvik Tyagi
        </a>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}