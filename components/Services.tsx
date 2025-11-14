const services = [
  {
    title: "Whole home plumbing",
    body: "Thoughtful repair and replacement of fixtures, lines, and valves with a focus on long term reliability."
  },
  {
    title: "Leak investigation",
    body: "Discreet identification of hidden leaks behind walls, under floors, and within slabs to limit disruption."
  },
  {
    title: "Water heaters",
    body: "High efficiency tank and tankless systems serviced and replaced with neat, code compliant installations."
  },
  {
    title: "Kitchens and baths",
    body: "Refined fixture upgrades, pressure balancing, and drain work aligned with premium finishes."
  }
];

export default function Services() {
  return (
    <section className="bg-luxeInk/80 border-y border-slate-800/70">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-luxeMuted">
          Services
        </p>
        <h2 className="mt-2 text-xl font-semibold sm:text-2xl text-luxeIvory">
          A single team for most residential and light commercial work.
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.title}
              className="luxe-card rounded-xl2 p-5 shadow-luxeSoft/40"
            >
              <h3 className="text-sm font-semibold text-luxeIvory">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
