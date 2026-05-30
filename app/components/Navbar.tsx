"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

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
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (section: string) =>
    active === section
      ? "text-white border-b-2 border-white pb-1"
      : "text-zinc-400 hover:text-white transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          ROHAN THAKUR
        </a>

        <div className="flex gap-8 text-sm">

          <a href="#about" className={linkClass("about")}>
            About
          </a>

          <a href="#experience" className={linkClass("experience")}>
            Experience
          </a>

          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>

          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}