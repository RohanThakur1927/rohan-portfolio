export default function Skills() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Oracle Cloud",
    "IBM Sterling",
    "Power BI",
    "Git",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
        Skills
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-12">
        Technologies I Work With
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="
              px-6
              py-4
              border
              border-zinc-800
              rounded-full
              hover:border-white/40
              hover:-translate-y-1
              transition-all
              bg-zinc-900/20
            "
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}