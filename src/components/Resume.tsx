import Section from "@/components/Section";
import { profile, specialSkills } from "@/data/portfolio";

const stats: { label: string; value: string }[] = [
  { label: "Height", value: profile.stats.height },
  { label: "Weight", value: profile.stats.weight },
  { label: "Eyes", value: profile.stats.eyes },
  { label: "Hair", value: profile.stats.hair },
];

export default function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Resume">
      <div className="rounded-2xl border border-white/10 bg-space-900/60 p-6 backdrop-blur-sm sm:p-10">
        {/* Header block, formatted like a printed acting resume */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-star">{profile.name}</h3>
            <p className="mt-1 text-sm text-star-dim">{profile.stats.unions}</p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4 sm:text-right">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wider text-star-dim">{s.label}</dt>
                <dd className="text-star">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">
            Special Skills
          </h3>
          <ul className="space-y-4">
            {specialSkills.map((group) => (
              <li key={group.category} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-28 shrink-0 text-sm font-medium text-star">{group.category}</span>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-star-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center border-t border-white/10 pt-8">
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-star transition hover:border-white/40 hover:bg-white/5"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
