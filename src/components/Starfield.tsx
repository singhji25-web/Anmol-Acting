"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle animated starfield rendered on a fixed full-screen canvas.
 * - Stars twinkle gently and drift very slowly.
 * - Respects prefers-reduced-motion (renders a static field).
 * - Redraws on resize, scales for devicePixelRatio.
 */
type Star = {
  x: number;
  y: number;
  r: number;
  base: number; // base alpha
  phase: number;
  speed: number; // twinkle speed
  drift: number; // vertical drift px/s
};

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = performance.now();

    const seed = () => {
      // density scales with viewport area, capped for perf on large screens
      const count = Math.min(420, Math.floor((width * height) / 4500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() < 0.85 ? Math.random() * 0.9 + 0.3 : Math.random() * 1.4 + 0.9,
        base: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.8 + 0.3,
        drift: Math.random() * 3 + 1,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduceMotion) draw(0, 0);
    };

    const draw = (t: number, dt: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        if (!reduceMotion) {
          s.y -= s.drift * dt;
          if (s.y < -2) {
            s.y = height + 2;
            s.x = Math.random() * width;
          }
        }
        const twinkle = reduceMotion
          ? 1
          : 0.65 + 0.35 * Math.sin(t * 0.001 * s.speed + s.phase);
        const alpha = s.base * twinkle;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        // slight violet tint on the larger stars
        ctx.fillStyle =
          s.r > 1.1
            ? `rgba(199, 190, 255, ${alpha})`
            : `rgba(240, 240, 255, ${alpha})`;
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      draw(now, dt);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) raf = requestAnimationFrame(loop);

    // Pause when the tab is hidden to save battery on phones.
    const onVisibility = () => {
      if (reduceMotion) return;
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
