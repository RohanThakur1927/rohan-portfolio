export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
        About Me
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-12">
        Turning Data Into
        <br />
        Business Value
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-zinc-400 text-lg leading-8">
          I am a Data Engineer and Automation Developer currently
          working at Tech Mahindra. My expertise includes enterprise
          automation, workflow optimization, backend development,
          scalable applications, and business process automation.
        </p>

        <p className="text-zinc-400 text-lg leading-8">
          I enjoy building efficient systems, solving complex business
          challenges through automation, and continuously expanding my
          knowledge in Data Engineering, Cloud Technologies,
          Artificial Intelligence, and modern software development.
        </p>
      </div>
    </section>
  );
}