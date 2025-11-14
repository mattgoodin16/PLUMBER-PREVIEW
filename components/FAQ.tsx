const faqs = [
  {
    q: "Do you really offer 24/7 emergency service?",
    a: "Yes — call anytime and we’ll dispatch the next available technician."
  },
  {
    q: "What areas do you serve?",
    a: "Concord, Walnut Creek, Pittsburg, Antioch, Brentwood & nearby communities."
  },
  {
    q: "Will I know the price before work begins?",
    a: "Always. We diagnose, explain options, and give a firm price first."
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Yes. All technicians are licensed, background-checked, and insured."
  }
];

export default function FAQ() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-[10px] uppercase tracking-widest text-brandLightBlue font-semibold">
          FAQ
        </p>

        <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
          Common questions about our plumbing services.
        </h2>

        <dl className="mt-6 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800"
            >
              <dt className="font-semibold text-sm">{item.q}</dt>
              <dd className="mt-1 text-xs text-slate-300">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
