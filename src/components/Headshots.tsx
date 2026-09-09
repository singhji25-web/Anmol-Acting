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
      <ul className="grid grid-cols-2 gap-3 sm:gap-5">
        {headshots.map((shot, i) => (
          <li
            key={shot.src}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-space-800"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 1024px) 512px, 50vw"
              priority={i < 2}
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
