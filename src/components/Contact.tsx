import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

/** Contact is intentionally just an email link — no form, no backend. */
export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      intro="For bookings, auditions, collaborations or to request full scenes, email me directly."
    >
      <div className="rounded-2xl border border-white/10 bg-space-900/60 p-6 backdrop-blur-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">Email</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-block break-all text-2xl font-semibold tracking-tight text-star transition-colors hover:text-nebula-soft sm:text-3xl"
        >
          {profile.email}
        </a>
      </div>
    </Section>
  );
}
