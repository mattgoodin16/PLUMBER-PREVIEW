const reasons = [
  {
    title: "Homes treated like spaces, not job sites",
    body: "From arrival to final wipe down, technicians move carefully, protect surfaces, and minimize noise and disruption."
  },
  {
    title: "Clear expectations before work begins",
    body: "You receive options and written pricing first, so you can decide how you would like to proceed."
  },
  {
    title: "Consistent point of contact",
    body: "You work with the same small office team who understands your property and preferences over time."
  },
  {
    title: "Serving higher expectation neighborhoods",
    body: "Focused on Walnut Creek, Danville, Lafayette, Alamo, and nearby areas where a higher standard of service is expected."
  }
];

export default function WhyChoose() {
  return (
    <section className="bg-luxeNavySoft">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-luxeMuted">
          Why clients stay with us
        </p>
        <h2 className="mt-2 text-xl font-semibold sm:text-2xl text-luxeIvory">
          A quieter, more considered approach to plumbing work.
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-xl2 border border-slate-800/70 bg-luxeInk/80 p-5 shadow-luxeSoft/40"
            >
              <h3 className="text-sm font-semibold text-luxeIvory">
                {reason.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
