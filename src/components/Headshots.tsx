import Image from "next/image";
import Section from "@/components/Section";
import { headshots } from "@/data/portfolio";

export default function Headshots() {
  return (
    <Section
      id="headshots"
      eyebrow="Headshots"
      title="Headshots"
      intro="High-resolution files available on request."
    >
      {/* PLACEHOLDER - images come from placehold.co; swap `src` values in src/data/portfolio.ts */}
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {headshots.map((shot, i) => (
          <li
            key={shot.src}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-space-800"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              priority={i < 2}
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-space-950/80 to-transparent px-3 pb-3 pt-10 text-xs font-medium tracking-wide text-star/90">
              {shot.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
