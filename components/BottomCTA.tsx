export default function BottomCTA() {
  return (
    <section className="border-y border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">
            Ready for fast, professional plumbing help?
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            Speak to a live team member — we can schedule service in minutes.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-2">
          <a
            href="tel:8001231234"
            className="bg-brandGold text-slate-900 px-6 py-3 rounded-full text-sm font-semibold shadow-soft hover:brightness-110"
          >
            Call 800-123-1234
          </a>

          <a
            href="mailto:help@contracostaplumbingpros.com"
            className="text-xs font-medium text-brandLightBlue"
          >
            help@contracostaplumbingpros.com
          </a>
        </div>
      </div>
    </section>
  );
}
