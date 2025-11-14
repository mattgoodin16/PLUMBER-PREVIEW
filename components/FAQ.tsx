const faqs = [
  {
    q: "Do you offer true 24/7 response?",
    a: "Yes. For urgent issues, a technician can often be scheduled the same day or evening, subject to availability."
  },
  {
    q: "Which areas do you focus on?",
    a: "Walnut Creek, Danville, Lafayette, Alamo, and nearby Contra Costa communities. Other areas by request."
  },
  {
    q: "How is pricing presented?",
    a: "After inspection you receive clear options and written pricing before any work begins."
  },
  {
    q: "Can you coordinate with designers or property managers?",
    a: "Yes. We frequently coordinate with interior designers, property managers, and other trades on planned projects."
  }
];

export default function FAQ() {
  return (
    <section className="bg-luxeNavySoft">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-luxeMuted">
          Questions
        </p>
        <h2 className="mt-2 text-xl font-semibold sm:text-2xl text-luxeIvory">
          Common questions about working with us.
        </h2>

        <dl className="mt-6 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-xl2 border border-slate-800/70 bg-luxeInk/80 p-4"
            >
              <dt className="text-sm font-semibold text-luxeIvory">
                {item.q}
              </dt>
              <dd className="mt-1 text-xs text-slate-300">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
