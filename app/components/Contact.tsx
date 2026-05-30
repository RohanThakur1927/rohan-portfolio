import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 pt-24 py-12"
    >
      <FadeIn>

        <div
          className="
            relative
            overflow-hidden
            border
            border-zinc-800
            rounded-[40px]
            p-12
            md:p-20
            bg-zinc-900/20
            backdrop-blur-sm
          "
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10">

            <p className="text-zinc-500 uppercase tracking-[0.3em] mb-6">
              Contact
            </p>

            <h2 className="text-6xl md:text-8xl font-bold leading-[0.9]">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              GREAT.
            </h2>

            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mt-10 leading-9">
              I'm open to Data Engineering, Enterprise Automation,
              Backend Development and Software Engineering opportunities.
              Whether it's a project, collaboration or career opportunity,
              I'd love to connect.
            </p>

            <div className="flex flex-wrap gap-4 mt-14">

              <a
                href="mailto:rohanthakur2332@gmail.com"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Email Me
              </a>

              <a
                href="https://github.com/RohanThakur1927"
                target="_blank"
                className="px-8 py-4 rounded-full border border-zinc-700 hover:border-white hover:-translate-y-1 transition-all"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/roha-nthakur/"
                target="_blank"
                className="px-8 py-4 rounded-full border border-zinc-700 hover:border-white hover:-translate-y-1 transition-all"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </FadeIn>
    </section>
  );
}