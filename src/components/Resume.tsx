import Section from "@/components/Section";
import {
  commercial,
  filmTv,
  profile,
  representation,
  resumeTraining,
  specialSkills,
  theatre,
  type Credit,
} from "@/data/portfolio";

function CreditTable({ heading, rows }: { heading: string; rows: Credit[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">
        {heading}
      </h3>
      <ul className="divide-y divide-white/5">
        {rows.map((c) => (
          <li
            key={`${c.title}-${c.year}`}
            className="grid gap-x-6 gap-y-1 py-3 sm:grid-cols-[1fr_auto_1fr] sm:items-baseline"
          >
            <div className="font-medium text-star">
              {c.title}{" "}
              <span className="font-normal text-star-dim">({c.year})</span>
            </div>
            <div className="text-sm text-star sm:text-center">{c.role}</div>
            <div className="text-sm text-star-dim sm:text-right">{c.detail}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Resume">
      {/* PLACEHOLDER - every credit, coach and stat below is fictional; edit in src/data/portfolio.ts */}
      <div className="rounded-2xl border border-white/10 bg-space-900/60 p-6 backdrop-blur-sm sm:p-10">
        {/* Header block, formatted like a printed acting resume */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-star">{profile.name}</h3>
            <p className="mt-1 text-sm text-star-dim">
              {profile.stats.unions} · {representation.agency} · {representation.agent}
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-x-6 text-sm sm:text-right">
            <div>
              <dt className="text-xs uppercase tracking-wider text-star-dim">Height</dt>
              <dd className="text-star">{profile.stats.height}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-star-dim">Hair</dt>
              <dd className="text-star">{profile.stats.hair}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-star-dim">Eyes</dt>
              <dd className="text-star">{profile.stats.eyes}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 space-y-10">
          <CreditTable heading="Film / Television" rows={filmTv} />
          <CreditTable heading="Theatre" rows={theatre} />

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">
              Commercial
            </h3>
            <p className="text-sm text-star-dim">{commercial}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">
              Training
            </h3>
            <ul className="divide-y divide-white/5">
              {resumeTraining.map((t) => (
                <li
                  key={t.title}
                  className="grid gap-x-6 py-3 sm:grid-cols-[1fr_1fr_auto] sm:items-baseline"
                >
                  <span className="font-medium text-star">{t.title}</span>
                  <span className="text-sm text-star-dim">{t.detail}</span>
                  <span className="text-sm text-star-dim sm:text-right">{t.years}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">
              Special Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {specialSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-star-dim"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PLACEHOLDER - drop a real PDF at /public/resume.pdf; the file included is a one-page sample */}
        <div className="mt-10 flex justify-center border-t border-white/10 pt-8">
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-star transition hover:border-white/40 hover:bg-white/5"
          >
            Download PDF resume
          </a>
        </div>
      </div>
    </Section>
  );
}
