export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h3 className="font-semibold text-lg">
            ROHAN THAKUR
          </h3>

          <p className="text-zinc-500 text-sm mt-1">
            Data Engineer & Automation Developer
          </p>
        </div>

        <div className="flex gap-8 text-zinc-400">

          <a
            href="https://github.com/RohanThakur1927"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/roha-nthakur/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rohanthakur2332@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>

      <div className="border-t border-zinc-900">

        <div className="max-w-7xl mx-auto px-8 py-6">

          <p className="text-zinc-600 text-sm text-center">
            © 2026 Rohan Thakur. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}