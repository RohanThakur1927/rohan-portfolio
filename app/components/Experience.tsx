import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <FadeIn>

        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
          Experience
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-20">
          Professional Journey
        </h2>

        <div className="relative">

          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="relative pl-16">

            <div className="absolute left-0 top-2 w-8 h-8 rounded-full border border-zinc-700 bg-black flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/20 backdrop-blur-sm hover:border-zinc-600 transition-all">

              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-bold">
                    Associate Analyst
                  </h3>

                  <p className="text-zinc-400 mt-2 text-lg">
                    Tech Mahindra
                  </p>

                  <p className="text-zinc-500 mt-1">
                    Client: Parker Hannifin
                  </p>

                </div>

                <div>
                  <p className="text-zinc-500">
                    July 2025 — Present
                  </p>
                </div>

              </div>

              <p className="text-zinc-400 mt-8 leading-8">
                Developed Python-based automation solutions,
                data validation pipelines and enterprise
                workflow processes. Worked extensively with
                EDI transactions, OMS integrations and
                large-scale business data processing to
                improve operational efficiency and reduce
                manual effort.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                  Python
                </span>

                <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                  EDI
                </span>

                <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                  OMS
                </span>

                <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                  Automation
                </span>

                <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                  Data Validation
                </span>

                <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                  IBM Sterling
                </span>

              </div>

            </div>

          </div>

        </div>

      </FadeIn>
    </section>
  );
}