import FadeIn from "./FadeIn";

export default function Skills() {
  const skills = [
    {
      title: "Python",
      description: "Automation, Data Processing & Backend Development",
    },
    {
      title: "Java",
      description: "Object-Oriented Programming & Enterprise Applications",
    },
    {
      title: "JavaScript",
      description: "Modern Web Development & Interactive Interfaces",
    },
    {
      title: "React",
      description: "Frontend Development & Component Architecture",
    },
    {
      title: "Node.js",
      description: "Backend APIs & Server-Side Applications",
    },
    {
      title: "SQL",
      description: "Database Design, Queries & Data Management",
    },
    {
      title: "MongoDB",
      description: "NoSQL Database & Document Storage",
    },
    {
      title: "PostgreSQL",
      description: "Relational Database & Advanced Querying",
    },
    {
      title: "Oracle Cloud",
      description: "Cloud Infrastructure & Enterprise Solutions",
    },
    {
      title: "IBM Sterling",
      description: "EDI Integrations & Order Management Systems",
    },
    {
      title: "Power BI",
      description: "Business Intelligence & Data Visualization",
    },
    {
      title: "Git",
      description: "Version Control & Team Collaboration",
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <FadeIn>

        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
          Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          Technologies I
          <br />
          Work With
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                border
                border-zinc-800
                rounded-[28px]
                p-8
                bg-zinc-900/20
                backdrop-blur-sm
                hover:border-zinc-600
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {skill.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {skill.description}
              </p>
            </div>
          ))}

        </div>

      </FadeIn>
    </section>
  );
}