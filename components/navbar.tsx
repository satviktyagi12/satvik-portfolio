"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Satvik Tyagi
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume/resume.pdf"
            className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume/resume.pdf"
            className="block px-6 py-4 text-white font-semibold"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}