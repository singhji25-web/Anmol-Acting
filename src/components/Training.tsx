import Section from "@/components/Section";
import { workshops } from "@/data/portfolio";

export default function Training() {
  return (
    <Section
      id="training"
      eyebrow="Training & Classes"
      title="Training & Classes"
      intro="Ongoing and completed studio work, workshops and certifications."
    >
      {/* PLACEHOLDER - fictional workshops; edit in src/data/portfolio.ts */}
      <ol className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-8">
        {workshops.map((w) => (
          <li key={`${w.title}-${w.years}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-nebula shadow-[0_0_12px_2px] shadow-nebula/50 sm:-left-[calc(2rem+5px)]"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium text-star">{w.title}</h3>
              <span className="text-sm text-star-dim">{w.years}</span>
            </div>
            <p className="mt-1 text-sm text-star-dim">
              {w.instructor} · {w.organization}
            </p>
            {w.description ? (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-star-dim/80">
                {w.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
