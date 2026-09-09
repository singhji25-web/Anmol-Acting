type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

/** Shared wrapper giving every section consistent spacing, heading style and anchor offset. */
export default function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <header className="mb-10 sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-nebula-soft">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-star sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-star-dim">
              {intro}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
