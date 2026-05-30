"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      id="home"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-6">
            Hyderabad, India
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
            ROHAN
            <br />
            THAKUR
          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-xl leading-relaxed">
            Data Engineer & Automation Developer specializing in
            enterprise automation, workflow optimization and scalable
            applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/Rohan_Thakur_Resume.pdf"
              download
              className="border border-zinc-700 px-7 py-3 rounded-full hover:border-white transition"
            >
              Download Resume
            </a>

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">

            <div>
              <h3 className="text-3xl font-bold">1+</h3>
              <p className="text-zinc-500 text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-zinc-500 text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-zinc-500 text-sm">
                Certifications
              </p>
            </div>

          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center items-center">

          <div className="relative">

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl" />

            <Image
              src="/profile.jpg"
              alt="Rohan Thakur"
              width={400}
              height={480}
              priority
              className="relative rounded-3xl object-cover border border-zinc-800"
            />

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 text-sm animate-bounce">
        Scroll ↓
      </div>

    </section>
  );
}