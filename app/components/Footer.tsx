export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-8 py-16 border-t border-zinc-900">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h3 className="text-2xl font-bold">
            ROHAN THAKUR
          </h3>

          <p className="text-zinc-500 mt-3 max-w-md">
            Data Engineer • Automation Developer
            <br />
            Building scalable systems, enterprise automation
            and data-driven solutions.
          </p>
        </div>

        <div className="flex flex-col gap-3">

          <a
            href="mailto:rohanthakur2332@gmail.com"
            className="text-zinc-400 hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://github.com/RohanThakur1927"
            target="_blank"
            className="text-zinc-400 hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/roha-nthakur/"
            target="_blank"
            className="text-zinc-400 hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-zinc-900">

        <p className="text-zinc-600 text-sm">
          © 2026 Rohan Thakur. All rights reserved.
        </p>

      </div>

    </footer>
  );
}