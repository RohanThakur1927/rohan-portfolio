export default function Certifications() {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      year: "2025",
    },
    {
      title: "Alteryx Designer Core Certification",
      issuer: "Alteryx",
      year: "2025",
    },
    {
      title: "Power BI Data Analytics",
      issuer: "Microsoft",
      year: "2024",
    },
    {
      title: "Alteryx Foundation Certification",
      issuer: "Alteryx",
      year: "2024",
    },
  ];

  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
        Certifications
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-20">
        Learning &
        <br />
        Growth
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="
              border
              border-zinc-800
              rounded-[32px]
              p-10
              bg-zinc-900/20
              backdrop-blur-sm
              hover:border-zinc-600
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]
              transition-all
              duration-300
            "
          >
            <span
              className="
                inline-flex
                px-3
                py-1
                rounded-full
                bg-zinc-800
                text-xs
                text-zinc-400
                mb-5
              "
            >
              Certified
            </span>

            <p className="text-zinc-500 mb-3">
              {cert.issuer}
            </p>

            <h3 className="text-2xl font-bold mb-4">
              {cert.title}
            </h3>

            <p className="text-zinc-400">
              {cert.year}
            </p>

            <div className="mt-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>

              <span className="text-zinc-500 text-sm">
                Verified Credential
              </span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}