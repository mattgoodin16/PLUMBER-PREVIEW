const reasons = [
  {
    title: "Local, family-owned service",
    body: "We live and work in Contra Costa, so you'll always get friendly, respectful technicians."
  },
  {
    title: "Up-front, honest pricing",
    body: "We inspect the issue, explain your options, and give a firm price before work begins."
  },
  {
    title: "Clean, careful technicians",
    body: "We use floor protection, shoe covers, and thorough cleanup so your home is respected."
  },
  {
    title: "Real 24/7 emergency support",
    body: "Nights, weekends, and holidays — if water is where it shouldn't be, call and we'll help."
  }
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[10px] uppercase tracking-widest text-brandLightBlue font-semibold">
          Why choose us
        </p>

        <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
          Professional plumbers focused on service, not sales.
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-soft"
            >
              <h3 className="font-semibold text-sm">{reason.title}</h3>
              <p className="mt-2 text-xs text-slate-300">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
