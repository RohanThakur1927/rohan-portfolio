export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-8 py-12 border-t border-zinc-900">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Left Side */}
        <div>
          <h3 className="text-3xl font-bold">
            ROHAN THAKUR
          </h3>

          <p className="text-zinc-500 mt-4 max-w-md leading-7">
            Data Engineer • Automation Developer
            <br />
            Building scalable systems, enterprise automation,
            and data-driven solutions.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap gap-6 text-zinc-400">

          <a
            href="mailto:rohanthakur2332@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://github.com/RohanThakur1927"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/roha-nthakur/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="/Rohan_Thakur_Resume.pdf"
            download
            className="hover:text-white transition"
          >
            Resume
          </a>

        </div>

      </div>

      <div className="mt-10 pt-8 border-t border-zinc-900">

        <p className="text-zinc-600 text-sm">
          © 2026 Rohan Thakur. All rights reserved.
        </p>

      </div>

    </footer>
  );
}