import Image from "next/image";
import { profile } from "@/data/portfolio";

/**
 * Hero
 *  - md+: asymmetric two-column layout. Editorial type on the left (name split
 *    over two lines at contrasting weights), a large portrait on the right that
 *    dissolves into the starfield via a gradient mask.
 *  - <md: the same portrait becomes a full-bleed backdrop behind a heavy
 *    bottom-up gradient; copy is anchored to the bottom where the overlay is
 *    fully opaque, so contrast is never compromised.
 *  - Parallax + scroll cue are CSS-only (see globals.css) and switch off under
 *    prefers-reduced-motion.
 */
export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden">
      {/* ---- Mobile backdrop portrait (hidden from md up) ---- */}
      <div aria-hidden className="hero-parallax-bg absolute inset-0 -z-10 lg:hidden">
        <Image
          src={profile.heroImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-70"
        />
        {/* top: keep the transparent nav legible; bottom: solid ground for copy */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-950/70 via-transparent to-transparent via-[22%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/92 to-transparent via-[38%]" />
      </div>

      {/* ---- Ambient glow behind the desktop portrait ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 -z-10 hidden h-[70vh] w-[55vw] -translate-y-1/2 rounded-full bg-nebula/20 blur-[120px] lg:block"
      />

      <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-end px-5 pb-28 pt-24 sm:px-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-24 lg:pt-16">
        {/* ---- Copy ---- */}
        <div className="hero-parallax-copy relative lg:col-span-7 xl:col-span-6">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-nebula-soft">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-nebula shadow-[0_0_12px_2px] shadow-nebula/70" />
            {profile.tagline}
          </p>

          <h1 className="mt-5 text-[clamp(3.25rem,13vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-star lg:text-[clamp(4.5rem,8vw,8rem)]">
            <span className="block">{first}</span>
            <span className="block font-light text-nebula-soft">{last}</span>
          </h1>

          {/* PLACEHOLDER - short bio; edit in src/data/portfolio.ts */}
          <p className="mt-7 max-w-md text-balance text-base leading-relaxed text-star-dim sm:text-lg">
            {profile.bio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#reel"
              className="rounded-full bg-nebula px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-10px] shadow-nebula transition hover:bg-nebula-soft hover:text-space-950"
            >
              Watch the reel
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-space-950/40 px-6 py-3 text-sm font-medium text-star backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* ---- Desktop portrait (hidden below md) ---- */}
        <div className="hero-parallax-img relative hidden lg:col-span-5 lg:block xl:col-span-6">
          <div className="hero-portrait relative ml-auto">
            <Image
              src={profile.heroImage.src}
              alt={profile.heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* ---- Scroll cue ---- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 [@media(max-height:560px)]:hidden">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <a
            href="#headshots"
            aria-label="Scroll to headshots"
            className="pointer-events-auto inline-flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-star-dim/80 transition-colors hover:text-star"
          >
            <span aria-hidden className="relative block h-10 w-px overflow-hidden bg-white/15">
              <span className="hero-scroll-dot absolute left-0 top-0 h-3 w-px bg-nebula-soft" />
            </span>
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
