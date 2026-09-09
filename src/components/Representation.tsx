import Section from "@/components/Section";
import { representation as rep } from "@/data/portfolio";

export default function Representation() {
  return (
    <Section id="representation" eyebrow="Representation" title="Representation">
      {/* PLACEHOLDER - agency contact details (email/phone/site) are examples; confirm before publishing */}
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-space-900/60 p-6 backdrop-blur-sm sm:grid-cols-2 sm:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">Agency</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-star">{rep.agency}</p>
          <p className="mt-1 text-sm text-star-dim">{rep.location}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">Agent</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-star">{rep.agent}</p>
          <ul className="mt-3 space-y-1 text-sm text-star-dim">
            <li>
              <a href={`mailto:${rep.email}`} className="transition-colors hover:text-star">
                {rep.email}
              </a>
            </li>
            <li>
              <a href={`tel:${rep.phone.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-star">
                {rep.phone}
              </a>
            </li>
            <li>
              <a
                href={rep.website}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-star"
              >
                {rep.website.replace(/^https?:\/\//, "")}
              </a>
            </li>
          </ul>
        </div>
        <p className="text-sm text-star-dim sm:col-span-2">
          For bookings, auditions and availability, please contact {rep.agent} at {rep.agency} directly.
        </p>
      </div>
    </Section>
  );
}
