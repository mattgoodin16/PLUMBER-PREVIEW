export default function Hero() {
  return (
    <section className="luxe-hero">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center">
        {/* Left: copy */}
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-luxeMuted">
            Discreet 24/7 plumbing • Contra Costa
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-luxeIvory sm:text-4xl lg:text-5xl">
            Plumbing service
            <span className="block text-luxeGold">
              that respects your home.
            </span>
          </h1>

          <p className="mt-4 text-sm text-slate-200 sm:text-base">
            Contra Costa Plumbing Reserve provides a quiet, high standard
            response for urgent and planned plumbing work. Thoughtful technicians,
            carefully protected interiors, and clear communication at every step.
          </p>

          <div className="mt-6 grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-luxeGold text-[11px] font-semibold text-luxeInk">
                ✓
              </span>
              <span>Priority access for late evening and weekend calls</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-luxeGold text-[11px] font-semibold text-luxeInk">
                ✓
              </span>
              <span>Floor coverings, boot protection, and quiet work practices</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-luxeGold text-[11px] font-semibold text-luxeInk">
                ✓
              </span>
              <span>Clear, written estimates before any work begins</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-luxeGold text-[11px] font-semibold text-luxeInk">
                ✓
              </span>
              <span>Dedicated point of contact from first call to follow up</span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="tel:8001231234"
              className="inline-flex items-center justify-center rounded-full bg-luxeGold px-7 py-3 text-sm font-semibold text-luxeInk shadow-luxeSoft hover:brightness-110"
            >
              Call concierge · 800-123-1234
            </a>
            <button
              type="button"
              className="luxe-pill px-5 py-2.5 text-xs font-semibold text-luxeIvory hover:bg-luxeGold/10 hover:border-luxeGold/60"
            >
              Request a quiet visit
            </button>
          </div>

          <p className="mt-4 text-[11px] text-luxeMuted">
            Serving Walnut Creek, Danville, Lafayette, Alamo, and surrounding Contra Costa neighborhoods.
          </p>
        </div>

        {/* Right: elevated request form */}
        <div className="w-full max-w-md rounded-xl2 bg-luxeInk/80 p-6 shadow-luxeSoft ring-1 ring-slate-800/70 backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-luxeMuted">
            Private scheduling
          </p>
          <h2 className="mt-2 text-lg font-semibold text-luxeIvory">
            Share a few details.
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            A coordinator will follow up to discreetly confirm timing, access,
            and any special considerations for your property.
          </p>

          <form className="mt-4 space-y-3 text-xs">
            <div>
              <label className="text-luxeIvory">
                Name
                <input
                  type="text"
                  placeholder="Full name"
                  className="mt-1 w-full rounded-md border border-slate-800 bg-luxeNavySoft px-3 py-2 text-sm text-luxeIvory outline-none focus:border-luxeGold/70"
                />
              </label>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-luxeIvory">
                  Phone
                  <input
                    type="tel"
                    placeholder="Best number"
                    className="mt-1 w-full rounded-md border border-slate-800 bg-luxeNavySoft px-3 py-2 text-sm text-luxeIvory outline-none focus:border-luxeGold/70"
                  />
                </label>
              </div>
              <div>
                <label className="text-luxeIvory">
                  Email
                  <input
                    type="email"
                    placeholder="Optional"
                    className="mt-1 w-full rounded-md border border-slate-800 bg-luxeNavySoft px-3 py-2 text-sm text-luxeIvory outline-none focus:border-luxeGold/70"
                  />
                </label>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-luxeIvory">
                  Neighborhood
                  <input
                    type="text"
                    placeholder="Area or city"
                    className="mt-1 w-full rounded-md border border-slate-800 bg-luxeNavySoft px-3 py-2 text-sm text-luxeIvory outline-none focus:border-luxeGold/70"
                  />
                </label>
              </div>
              <div>
                <label className="text-luxeIvory">
                  Preferred window
                  <select
                    className="mt-1 w-full rounded-md border border-slate-800 bg-luxeNavySoft px-3 py-2 text-sm text-luxeIvory outline-none focus:border-luxeGold/70"
                  >
                    <option value="">Select</option>
                    <option>Today if available</option>
                    <option>Within 24 hours</option>
                    <option>Within 3 days</option>
                    <option>Scheduling in advance</option>
                  </select>
                </label>
              </div>
            </div>
            <div>
              <label className="text-luxeIvory">
                How can we help
                <textarea
                  rows={3}
                  placeholder="Briefly describe what you are noticing."
                  className="mt-1 w-full rounded-md border border-slate-800 bg-luxeNavySoft px-3 py-2 text-sm text-luxeIvory outline-none focus:border-luxeGold/70"
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-full bg-luxeGold px-4 py-2.5 text-sm font-semibold text-luxeInk shadow-luxeSoft hover:brightness-110"
            >
              Submit to coordinator
            </button>
            <p className="mt-2 text-[10px] text-luxeMuted">
              Details are used only to coordinate service for your property and are never shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
