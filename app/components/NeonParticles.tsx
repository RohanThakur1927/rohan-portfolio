
"use client";

import { useEffect, useRef } from "react";

export default function NeonParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;

    const mouse = { x: -1000, y: -1000 };

    const particles = Array.from({ length: 95 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.1 + 0.6,
      opacity: Math.random() * 0.3 + 0.18,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.hypot(dx, dy);

        // Gentle movement around the cursor.
        if (distance < 120 && distance > 0) {
          const force = (120 - distance) / 120;

          p.vx -= (dx / distance) * force * 0.008;
          p.vy -= (dy / distance) * force * 0.008;
        }

        p.vx *= 0.998;
        p.vy *= 0.998;

        p.x += p.vx;
        p.y += p.vy;

        // Keep particles moving gently.
        if (Math.abs(p.vx) < 0.06) {
          p.vx += (Math.random() - 0.5) * 0.015;
        }

        if (Math.abs(p.vy) < 0.06) {
          p.vy += (Math.random() - 0.5) * 0.015;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#168BFF";
        ctx.shadowColor = "#008CFF";
        ctx.shadowBlur = 4;

        ctx.fill();

        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: 5, opacity: 0.8 }}
    />
  );
}
