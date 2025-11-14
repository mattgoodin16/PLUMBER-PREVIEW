export default function BottomCTA() {
  return (
    <section className="border-y border-slate-800/70 bg-luxeInk/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-luxeMuted">
            Begin quietly
          </p>
          <h2 className="mt-2 text-xl font-semibold sm:text-2xl text-luxeIvory">
            Share what you are noticing, and we will take it from there.
          </h2>
          <p className="mt-1 text-xs text-slate-300 max-w-md">
            A short conversation is usually enough to outline next steps, timing,
            and any preparation needed before we arrive.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <a
            href="tel:8001231234"
            className="inline-flex items-center justify-center rounded-full bg-luxeGold px-7 py-3 text-sm font-semibold text-luxeInk shadow-luxeSoft hover:brightness-110"
          >
            Call concierge · 800-123-1234
          </a>
          <a
            href="mailto:help@contracostaplumbingpros.com"
            className="text-xs font-medium text-luxeGoldSoft"
          >
            Or email help@contracostaplumbingpros.com
          </a>
        </div>
      </div>
    </section>
  );
}
