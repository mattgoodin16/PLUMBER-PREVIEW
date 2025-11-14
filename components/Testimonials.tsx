const quotes = [
  {
    name: "Danielle · Concord",
    body: "They arrived quickly, fixed the burst pipe, and cleaned up everything. I felt taken care of."
  },
  {
    name: "Miguel · Antioch",
    body: "Very professional and transparent about pricing. The tech explained everything clearly."
  },
  {
    name: "Sarah · Walnut Creek",
    body: "We’ve used them twice now and both experiences were excellent."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[10px] uppercase tracking-widest text-brandLightBlue font-semibold">
          Happy customers
        </p>

        <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
          Homeowners across Contra Costa recommend us.
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800"
            >
              <p className="text-xs text-slate-100">“{q.body}”</p>
              <figcaption className="mt-3 text-[11px] font-semibold text-brandLightBlue">
                {q.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
