export default function Hero() {
  return (
    <section className="gradient-hero">
      <div className="mx-auto max-w-6xl grid gap-10 px-4 py-10 lg:grid-cols-[1.4fr,1fr] items-center">

        {/* Left side */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            24/7 Emergency Plumbing
            <span className="block text-brandLightBlue mt-1">
              Trusted Local Pros in Contra Costa
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-xl">
            Burst pipe? Clogged drain? No hot water? Our licensed plumbers
            are standing by around the clock with fast arrival, up-front
            pricing, and clean, professional service.
          </p>

          <ul className="mt-5 grid gap-3 text-xs sm:text-sm sm:grid-cols-2 max-w-xl">
            {[
              "Same-day & emergency service 24/7",
              "Licensed, bonded & insured technicians",
              "Up-front, flat-rate pricing before work begins",
              "Respect for your home — we leave it cleaner"
            ].map((text) => (
              <li key={text} className="flex items-start gap-2">
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-brandGold text-slate-900 font-bold text-xs">
                  ✓
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:8001231234"
              className="bg-brandGold text-slate-900 px-6 py-3 rounded-full text-sm font-semibold shadow-soft hover:brightness-110"
            >
              Call now · 800-123-1234
            </a>

            <div className="flex flex-col text-xs text-slate-300">
              <span>Email us any time:</span>
              <a
                href="mailto:help@contracostaplumbingpros.com"
                className="text-brandLightBlue font-medium"
              >
                help@contracostaplumbingpros.com
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Serving Concord, Walnut Creek, Pittsburg, Antioch, Brentwood & more.
          </p>
        </div>

        {/* Right form */}
        <div className="bg-slate-950/90 p-6 rounded-2xl shadow-soft ring-1 ring-slate-800">
          <p className="text-[10px] uppercase tracking-widest text-brandLightBlue font-semibold">
            Request Service
          </p>

          <h2 className="mt-2 text-lg font-semibold">
            Need a plumber now? Start here.
          </h2>

          <p className="mt-1 text-xs text-slate-300">
            We’ll call you right back to confirm your appointment.
          </p>

          <form className="mt-4 space-y-3">
            {[
              { label: "Name", type: "text", placeholder: "Your full name" },
              { label: "Phone number", type: "tel", placeholder: "Best number to reach you" },
              { label: "Email (optional)", type: "email", placeholder: "you@example.com" },
              { label: "Zip code", type: "text", placeholder: "e.g. 94520" }
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs text-slate-200">
                  {field.label}
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-1 w-full px-3 py-2 rounded-md bg-slate-900/70 border border-slate-700 text-sm text-white outline-none focus:border-brandLightBlue"
                  />
                </label>
              </div>
            ))}

            <div>
              <label className="text-xs text-slate-200">
                What do you need help with?
                <textarea
                  rows={3}
                  placeholder="Briefly describe your plumbing issue"
                  className="mt-1 w-full px-3 py-2 rounded-md bg-slate-900/70 border border-slate-700 text-sm text-white outline-none focus:border-brandLightBlue"
                />
              </label>
            </div>

            <button
              type="button"
              className="w-full mt-2 bg-brandLightBlue text-slate-950 font-semibold px-4 py-2.5 rounded-full shadow-soft hover:brightness-110 text-sm"
            >
              Get fast help
            </button>

            <p className="text-[10px] text-slate-400">
              By submitting, you agree to receive a call or text about your request.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
