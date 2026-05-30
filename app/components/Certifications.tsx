export default function Certifications() {
  const certs = [
    "OCI AI Foundations Associate",
    "OCI Foundations Associate",
    "Alteryx Designer Core",
    "Alteryx Foundation",
    "Advanced Excel",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <p className="text-zinc-500 mb-4">
        CERTIFICATIONS
      </p>

      <h2 className="text-5xl font-bold mb-16">
        Credentials
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certs.map((cert) => (
          <div
            key={cert}
            className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
          >
            {cert}
          </div>
        ))}

      </div>
    </section>
  );
}