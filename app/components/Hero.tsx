
"use client";

import { useEffect, useRef, useState } from "react";

const FIRST_NAME = "ROHAN";
const LAST_NAME = "THAKUR";
const CHARACTER_SCALE = 1.35;
const CHARACTER_OFFSET_X = "-28%";
const CHARACTER_OFFSET_Y = "35px";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      index++;
      setVisibleChars(index);

      if (index >= FIRST_NAME.length + LAST_NAME.length) {
        window.clearInterval(interval);
      }
    }, 130);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const startVideo = () => {
      if (!cancelled) {
        video.play().catch(() => {});
      }
    };

    const holdFinalFrame = () => {
      video.pause();

      if (Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.max(0, video.duration - 0.05);
      }
    };

    video.addEventListener("ended", holdFinalFrame);

    // Start playback immediately instead of waiting for loadeddata.
    startVideo();

    return () => {
      cancelled = true;
      video.removeEventListener("ended", holdFinalFrame);
    };
  }, []);

  const first = FIRST_NAME.slice(0, Math.min(visibleChars, FIRST_NAME.length));
  const last = LAST_NAME.slice(
    0,
    Math.max(0, visibleChars - FIRST_NAME.length)
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20"
    >
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/90 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2">
        <div className="relative z-20">
          <p className="mb-6 uppercase tracking-[0.3em] text-zinc-500">
            Hyderabad, India
          </p>

          <h1 className="text-6xl font-bold leading-none tracking-tight text-white md:text-8xl">
            <span className="block min-h-[1em]">
              {first.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-[letterReveal_0.35s_ease-out_both]"
                >
                  {char}
                </span>
              ))}
            </span>

            <span className="block min-h-[1em]">
              {last.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-[letterReveal_0.35s_ease-out_both]"
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Data Analyst &amp; Technology Enthusiast
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/Thakur_Rohan_Singh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-7 py-3 text-white transition hover:border-white"
            >
              View Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/RohanThakur1927"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-800 px-5 py-2 text-sm text-white transition hover:border-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/roha-nthakur/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-800 px-5 py-2 text-sm text-white transition hover:border-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:rohanthakur2332@gmail.com"
              className="rounded-full border border-zinc-800 px-5 py-2 text-sm text-white transition hover:border-white"
            >
              Email
            </a>
          </div>

          <div className="mt-3 flex flex-wrap gap-10 text-white sm:gap-12">
            <div>
              <h3 className="text-3xl font-bold">1+</h3>
              <p className="text-sm text-zinc-500">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-sm text-zinc-500">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-sm text-zinc-500">Certifications</p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[68%] overflow-hidden lg:right-[-4%] lg:w-[65%]">
          <video
            ref={videoRef}
            className="character-walk absolute bottom-0 right-0 h-full w-full max-w-none object-contain object-bottom"
            src="/character-walk.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce text-sm text-zinc-500">
        Scroll ↓
      </div>

      <style jsx>{`
        @keyframes letterReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .character-walk {
          transform: translateY(${CHARACTER_OFFSET_Y}) scale(${CHARACTER_SCALE});
          transform-origin: bottom center;
          animation: characterEnter 2.5s ease-out both;
        }

        @keyframes characterEnter {
          from {
            transform: translateY(${CHARACTER_OFFSET_Y}) scale(${CHARACTER_SCALE});
          }
          to {
            transform: translate(${CHARACTER_OFFSET_X}, ${CHARACTER_OFFSET_Y}) scale(${CHARACTER_SCALE});
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .character-walk {
            animation: none;
            transform: translate(${CHARACTER_OFFSET_X}, ${CHARACTER_OFFSET_Y}) scale(${CHARACTER_SCALE});
          }
        }
      `}</style>
    </section>
  );
}
