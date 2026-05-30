import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Expense Mastermind",
      category: "FULL STACK APPLICATION",
      description:
        "A smart expense tracking and analytics platform featuring authentication, transaction management, spending insights and interactive dashboards for financial analysis.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
    },
    {
      number: "02",
      title: "Smart Inbound Order Automation",
      category: "ENTERPRISE AUTOMATION",
      description:
        "Automated inbound order processing using OCR extraction, validation workflows, exception handling and audit logging to reduce manual effort and improve turnaround time.",
      technologies: [
        "Automation",
        "OCR",
        "OMS",
        "Workflow Design",
        "Validation",
      ],
    },
    {
      number: "03",
      title: "Physical Therapy Exercise Classifier",
      category: "MACHINE LEARNING",
      description:
        "Machine learning solution for classifying physical therapy exercises using sensor data and advanced feature engineering with SVM and AdaBoost models.",
      technologies: [
        "Python",
        "Machine Learning",
        "SVM",
        "AdaBoost",
        "Data Analysis",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <FadeIn>

        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
          Featured Projects
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          Selected Work
        </h2>

        <div className="space-y-10">

          {projects.map((project) => (
            <div
              key={project.number}
              className="
                group
                relative
                border
                border-zinc-800
                rounded-[40px]
                p-10 md:p-14
                bg-zinc-900/20
                backdrop-blur-sm
                hover:border-zinc-500
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]
                transition-all
                duration-500
              "
            >
              <div
                className="
                  absolute
                  top-8
                  right-8
                  text-6xl
                  md:text-8xl
                  font-bold
                  text-zinc-900
                  select-none
                  group-hover:text-zinc-700
                  group-hover:scale-110
                  transition-all
                  duration-500
                "
              >
                {project.number}
              </div>

              <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-5">
                {project.category}
              </p>

              <h3 className="text-4xl md:text-5xl font-bold mb-8 max-w-4xl">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-lg leading-9 max-w-4xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-10">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-5
                      py-2
                      border
                      border-zinc-700
                      rounded-full
                      text-sm
                      hover:border-white/40
                      transition
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-10">

                <span
                  className="
                    inline-flex
                    items-center
                    px-5
                    py-3
                    rounded-full
                    bg-zinc-800
                    text-zinc-400
                    text-sm
                  "
                >
                  Repository Coming Soon
                </span>

              </div>

            </div>
          ))}

        </div>

      </FadeIn>
    </section>
  );
}