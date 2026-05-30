"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (section: string) =>
    active === section
      ? "text-white relative after:absolute after:left-0 after:-bottom-2 after:w-full after:h-px after:bg-white"
      : "text-zinc-400 hover:text-white transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          ROHAN THAKUR
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm">

          <a href="#about" className={linkClass("about")}>
            About
          </a>

          <a href="#experience" className={linkClass("experience")}>
            Experience
          </a>

          <a href="#skills" className={linkClass("skills")}>
            Skills
          </a>

          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>

          <a
            href="#certifications"
            className={linkClass("certifications")}
          >
            Certifications
          </a>

          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>

          <a
            href="/Rohan_Thakur_Resume.pdf"
            download
            className="
              px-5
              py-2
              rounded-full
              border
              border-zinc-700
              hover:border-white
              transition
            "
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            lg:hidden
            px-8
            pb-6
            flex
            flex-col
            gap-5
            bg-black/95
            border-t
            border-zinc-900
          "
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="/Rohan_Thakur_Resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="
              w-fit
              px-5
              py-2
              rounded-full
              border
              border-zinc-700
            "
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}