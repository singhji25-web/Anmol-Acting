import Section from "@/components/Section";
import { demoReel } from "@/data/portfolio";

export default function DemoReel() {
  // PLACEHOLDER - youtubeId points to a Creative Commons sample video; set the real reel ID in src/data/portfolio.ts
  const src = `https://www.youtube-nocookie.com/embed/${demoReel.youtubeId}?rel=0&modestbranding=1`;

  return (
    <Section id="reel" eyebrow="Demo Reel" title="Demo Reel" intro={demoReel.description}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-space-900 shadow-[0_30px_80px_-30px] shadow-nebula/40">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={src}
            title={demoReel.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="flex items-center justify-between px-5 py-4 text-sm">
          <span className="font-medium text-star">{demoReel.title}</span>
          <span className="text-star-dim">{demoReel.runtime}</span>
        </div>
      </div>
    </Section>
  );
}
