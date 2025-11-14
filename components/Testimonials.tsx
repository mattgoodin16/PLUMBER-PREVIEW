const quotes = [
  {
    name: "L., Walnut Creek",
    body: "They worked quietly, protected every surface they touched, and walked me through what they had done before leaving."
  },
  {
    name: "M., Danville",
    body: "The coordinator understood that noise and timing mattered. The techs were on time, prepared, and very respectful."
  },
  {
    name: "S., Lafayette",
    body: "I appreciate having one team I can call who remembers the details of my home and communicates clearly."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-luxeInk">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-luxeMuted">
          Client remarks
        </p>
        <h2 className="mt-2 text-xl font-semibold sm:text-2xl text-luxeIvory">
          A service designed for clients who notice the details.
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-xl2 border border-slate-800/70 bg-luxeNavySoft/90 p-5 shadow-luxeSoft/50"
            >
              <p className="text-xs text-slate-200">“{q.body}”</p>
              <figcaption className="mt-3 text-[11px] font-semibold text-luxeGold">
                {q.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
