import Image from "next/image";
import Section from "@/components/Section";
import { headshots } from "@/data/portfolio";

/**
 * Layout for five photos:
 *  - mobile: two columns; an odd final photo spans the full width
 *  - md+:    a 6-column grid — first three photos span 2 columns each (3 across),
 *            the rest span 3 columns each (2 across, slightly larger)
 *  Each photo carries a small "taken" date label in its bottom-left corner.
 */
function cellClasses(i: number, total: number) {
  const lastIsOrphan = total % 2 === 1 && i === total - 1;
  const mobile = lastIsOrphan ? "col-span-2" : "";
  const desktop = i < 3 ? "md:col-span-2" : "md:col-span-3";
  return `${mobile} ${desktop}`;
}

function sizesFor(i: number, total: number) {
  const lastIsOrphan = total % 2 === 1 && i === total - 1;
  const mobile = lastIsOrphan ? "100vw" : "50vw";
  return i < 3
    ? `(min-width: 1024px) 320px, (min-width: 768px) 33vw, ${mobile}`
    : `(min-width: 1024px) 480px, (min-width: 768px) 50vw, ${mobile}`;
}

export default function Headshots() {
  const total = headshots.length;
  return (
    <Section
      id="headshots"
      eyebrow="Headshots"
      title="Headshots"
      intro="High-resolution files available on request."
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-6">
        {headshots.map((shot, i) => (
          <li
            key={shot.src}
            className={`group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-space-800 ${cellClasses(i, total)}`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes={sizesFor(i, total)}
              priority={i < 3}
              className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
                shot.position === "top" ? "object-top" : "object-center"
              }`}
            />
            {shot.taken && (
              <span className="absolute bottom-2 left-2 rounded-full border border-white/10 bg-space-950/70 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-star-dim backdrop-blur-sm sm:bottom-3 sm:left-3">
                {shot.taken}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
