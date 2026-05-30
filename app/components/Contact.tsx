export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <div className="border border-zinc-800 rounded-[40px] p-12 md:p-20 bg-zinc-900/20 backdrop-blur-sm">

        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Let's Build
          <br />
          Something Great
        </h2>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mt-8 leading-8">
          I'm open to Data Engineering, Backend Development,
          Enterprise Automation and Software Engineering
          opportunities. Let's connect and create impactful
          solutions together.
        </p>

        <div className="flex flex-wrap gap-4 mt-12">

          <a
            href="mailto:rohanthakur2332@gmail.com"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/RohanThakur1927"
            target="_blank"
            className="border border-zinc-700 px-8 py-4 rounded-full hover:border-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/roha-nthakur/"
            target="_blank"
            className="border border-zinc-700 px-8 py-4 rounded-full hover:border-white transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}