import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <FadeIn>

        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-16">
          Data Engineer &
          <br />
          Automation Developer
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="border border-zinc-800 rounded-[40px] p-10 bg-zinc-900/10 backdrop-blur-sm">

            <h3 className="text-2xl font-bold mb-8">
              What I Do
            </h3>

            <p className="text-zinc-400 text-lg leading-9">
              I design and build scalable automation workflows,
              enterprise integrations, data pipelines and backend
              systems that help businesses improve efficiency and
              reduce manual effort.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">

              <span className="px-5 py-2 border border-zinc-700 rounded-full">
                Data Engineering
              </span>

              <span className="px-5 py-2 border border-zinc-700 rounded-full">
                Automation
              </span>

              <span className="px-5 py-2 border border-zinc-700 rounded-full">
                Python
              </span>

              <span className="px-5 py-2 border border-zinc-700 rounded-full">
                IBM Sterling
              </span>

              <span className="px-5 py-2 border border-zinc-700 rounded-full">
                Oracle Cloud
              </span>

            </div>

          </div>

          <div className="border border-zinc-800 rounded-[40px] p-10 bg-zinc-900/10 backdrop-blur-sm">

            <h3 className="text-2xl font-bold mb-8">
              Professional Focus
            </h3>

            <p className="text-zinc-400 text-lg leading-9">
              Currently working as an Associate Analyst at
              Tech Mahindra for Parker Hannifin, focusing on
              enterprise automation, EDI workflows, OMS
              integrations and large-scale business process
              optimization.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <h4 className="text-5xl font-bold">
                  1+
                </h4>
                <p className="text-zinc-500 mt-2">
                  Years
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">
                  3+
                </h4>
                <p className="text-zinc-500 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">
                  5+
                </h4>
                <p className="text-zinc-500 mt-2">
                  Certifications
                </p>
              </div>

            </div>

          </div>

        </div>

      </FadeIn>
    </section>
  );
}