export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Expense Mastermind",
      category: "Full Stack Application",
      description:
        "A smart expense tracking and analytics platform built using React, TypeScript, Node.js, Express, and PostgreSQL. Features secure authentication, transaction management, spending insights, and an interactive dashboard for financial analysis.",
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
      category: "Enterprise Automation",
      description:
        "Designed and implemented an automated inbound order processing pipeline using OCR extraction, validation workflows, exception handling, and audit logging. Reduced manual effort by 60–70% while improving turnaround time.",
      technologies: [
        "Automation",
        "OCR",
        "Data Validation",
        "OMS",
        "Workflow Design",
      ],
    },
    {
      number: "03",
      title: "Physical Therapy Exercise Classifier",
      category: "Machine Learning",
      description:
        "Built a machine learning solution that classifies physical therapy exercises using accelerometer, gyroscope, and magnetometer sensor data. Implemented feature engineering and trained SVM and AdaBoost models for accurate exercise recognition.",
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
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
        Featured Projects
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-20">
        Selected Work
      </h2>

      <div className="space-y-10">

        {projects.map((project) => (
          <div
            key={project.number}
            className="
              border
              border-zinc-800
              rounded-3xl
              p-10
              bg-zinc-900/20
              backdrop-blur-sm
              hover:border-zinc-600
              transition-all
            "
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

              <div className="max-w-3xl">

                <p className="text-zinc-500 mb-4">
                  {project.number}
                </p>

                <p className="text-zinc-500 uppercase tracking-wider text-sm mb-3">
                  {project.category}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-zinc-800
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              <div className="flex flex-col justify-between">

                <div className="flex flex-col gap-3">

                  <button
                    className="
                      px-6
                      py-3
                      border
                      border-zinc-700
                      rounded-full
                      text-zinc-500
                      cursor-not-allowed
                    "
                  >
                    GitHub — Coming Soon
                  </button>

                  <button
                    className="
                      px-6
                      py-3
                      border
                      border-zinc-700
                      rounded-full
                      text-zinc-500
                      cursor-not-allowed
                    "
                  >
                    Live Demo — Coming Soon
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}