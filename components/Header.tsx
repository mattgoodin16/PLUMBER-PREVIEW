export default function Header() {
  return (
    <header className="border-b border-slate-800/70 bg-luxeNavy/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-luxeGold/10 ring-1 ring-luxeGold/40">
            <span className="text-xs font-semibold text-luxeGold">CC</span>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-luxeMuted uppercase">
              Contra Costa
            </p>
            <p className="text-sm font-medium text-luxeIvory">
              Plumbing Reserve
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden text-xs text-luxeMuted sm:block">
            <p className="uppercase tracking-[0.22em] text-[10px]">
              Discreet 24/7 Response
            </p>
            <p>Residential • Light commercial</p>
          </div>
          <a
            href="tel:8001231234"
            className="luxe-pill px-5 py-2 text-xs font-semibold text-luxeIvory hover:bg-luxeGold/10 hover:border-luxeGold/60"
          >
            Call concierge · 800-123-1234
          </a>
        </div>
      </div>
    </header>
  );
}
