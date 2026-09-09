"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

/**
 * Contact form with no backend: on submit it opens the visitor's mail client
 * pre-filled via a mailto: link. To collect submissions server-side instead,
 * point the <form action> at a service such as Formspree and drop the onSubmit.
 */
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    // PLACEHOLDER - profile.email is an example address; set the real one in src/data/portfolio.ts
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-space-900/70 px-4 py-3 text-sm text-star placeholder:text-star-dim/60 outline-none transition focus:border-nebula focus:ring-2 focus:ring-nebula/30";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      intro="For bookings, auditions, collaborations or to request full scenes."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block text-lg text-star transition-colors hover:text-nebula-soft"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nebula-soft">Elsewhere</p>
            <ul className="mt-2 flex gap-5 text-sm">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-star-dim transition-colors hover:text-star"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-y`}
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-nebula px-6 py-3 text-sm font-medium text-white transition hover:bg-nebula-soft hover:text-space-950 sm:w-auto"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
