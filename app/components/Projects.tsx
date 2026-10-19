import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "ProKids",
      category: "ANDROID GAME DEVELOPMENT",
      description:
        "An educational maze game for kids featuring interactive puzzles covering numbers, alphabets, words, mathematics, and countries. Built with React Native, TypeScript, and Expo, with custom maze generation and backend integration.",
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "FastAPI",
        "MongoDB",
        "REST APIs",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.edupro.playgames",
      liveDemo: "",
      github: "",
    },
    {
      number: "02",
      title: "Physio AI",
      category: "MACHINE LEARNING",
      description:
        "An AI-powered physical therapy exercise classification application using sensor data, SVM, and AdaBoost. Includes prediction history, confidence scoring, analytics, and automated PDF report generation.",
      technologies: [
        "Python",
        "Flask",
        "Scikit-learn",
        "SVM",
        "AdaBoost",
        "SQLite",
      ],
      playStore: "",
      liveDemo: "https://physioai-ppav.onrender.com/",
      github: "",
    },
    {
      number: "03",
      title: "Expense Mastermind",
      category: "FULL STACK APPLICATION",
      description:
        "A smart expense tracking and analytics platform featuring authentication, transaction management, spending insights, and interactive dashboards for financial analysis.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
      playStore: "",
      liveDemo: "",
      github: "",
    },
    {
      number: "04",
      title: "Smart Inbound Order Automation",
      category: "ENTERPRISE AUTOMATION",
      description:
        "Automated inbound order processing using OCR extraction, validation workflows, exception handling, and audit logging to reduce manual effort and improve turnaround time.",
      technologies: [
        "Python",
        "OCR",
        "OMS",
        "Workflow Design",
        "Validation",
      ],
      playStore: "",
      liveDemo: "",
      github: "",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-8 py-12">
      <FadeIn>
        <p className="mb-4 uppercase tracking-[0.3em] text-zinc-500">
          Featured Projects
        </p>

        <h2 className="mb-20 text-5xl font-bold md:text-7xl">
          Selected Work
        </h2>

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative rounded-[40px] border border-zinc-800 bg-zinc-900/20 p-10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-zinc-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] md:p-14"
            >
              <div className="absolute right-8 top-8 select-none text-6xl font-bold text-zinc-900 transition-all duration-500 group-hover:scale-110 group-hover:text-zinc-700 md:text-8xl">
                {project.number}
              </div>

              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
                {project.category}
              </p>

              <h3 className="mb-8 max-w-4xl text-4xl font-bold md:text-5xl">
                {project.title}
              </h3>

              <p className="max-w-4xl text-lg leading-9 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.playStore && (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    Google Play Store ↗
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-zinc-700 px-6 py-3 transition hover:border-white"
                  >
                    GitHub ↗
                  </a>
                )}

                {!project.playStore &&
                  !project.liveDemo &&
                  !project.github && (
                    <span className="inline-flex items-center rounded-full bg-zinc-800 px-5 py-3 text-sm text-zinc-400">
                      Link to be added
                    </span>
                  )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}