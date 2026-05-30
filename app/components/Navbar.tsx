export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-wide">
          ROHAN THAKUR
        </h1>

        <div className="flex gap-8 text-sm">

          <a
            href="#about"
            className="text-zinc-400 hover:text-white transition"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-zinc-400 hover:text-white transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-zinc-400 hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}