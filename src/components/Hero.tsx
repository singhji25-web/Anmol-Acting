import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center px-5 pt-16 text-center"
    >
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-nebula-soft">
        Portfolio
      </p>
      <h1 className="text-5xl font-semibold tracking-tight text-star sm:text-7xl md:text-8xl">
        {profile.name}
      </h1>
      <p className="mt-5 text-lg text-star-dim sm:text-2xl">{profile.tagline}</p>

      {/* PLACEHOLDER - short bio; edit in src/data/portfolio.ts */}
      <p className="mt-8 max-w-xl text-balance text-sm leading-relaxed text-star-dim/90 sm:text-base">
        {profile.bio}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#reel"
          className="rounded-full bg-nebula px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-10px] shadow-nebula transition hover:bg-nebula-soft hover:text-space-950"
        >
          Watch the reel
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-star transition hover:border-white/40 hover:bg-white/5"
        >
          Get in touch
        </a>
      </div>

      {/* scroll cue */}
      <a
        href="#headshots"
        aria-label="Scroll to headshots"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-star-dim/60 transition hover:text-star motion-safe:animate-bounce"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
