"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#preise", label: "Preise" },
    { href: "#ueber-mich", label: "Über mich" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="36" height="36" rx="9" fill="#6B5CE7" />
            <text x="18" y="24" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" fill="white" letterSpacing="-0.5">JH</text>
          </svg>
          <span className="font-bold text-[#1a1a2e] text-sm leading-tight">
            J.Huser
            <br />
            <span className="font-normal text-gray-400 text-xs tracking-wide">IT-Services</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#6B5CE7] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA — always visible */}
          <a
            href="#kontakt"
            className="bg-[#6B5CE7] hover:bg-[#4A3DC7] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            onClick={() => setOpen(false)}
          >
            Jetzt anfragen
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          >
            <span className={`block w-5 h-0.5 bg-[#1a1a2e] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a1a2e] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a1a2e] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 font-medium hover:text-[#6B5CE7] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
