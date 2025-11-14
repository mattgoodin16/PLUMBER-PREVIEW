const services = [
  {
    title: "Drain & sewer cleaning",
    body: "Clearing clogs, slow drains, and backed-up lines with professional equipment."
  },
  {
    title: "Water heater repair & install",
    body: "Tank and tankless water heaters serviced, repaired, and replaced."
  },
  {
    title: "Leak detection & repair",
    body: "From hidden slab leaks to visible pipe bursts, we find and fix the source quickly."
  },
  {
    title: "Toilets, sinks & fixtures",
    body: "Repairing running toilets, dripping faucets, low pressure, and more."
  }
];

export default function Services() {
  return (
    <section className="border-y border-slate-800 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[10px] uppercase tracking-widest text-brandLightBlue font-semibold">
          Full-service plumbing
        </p>

        <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
          One call handles almost any plumbing problem.
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-4 border border-slate-800 bg-slate-900/80"
            >
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
