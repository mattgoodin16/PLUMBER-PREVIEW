export default function Header() {
  return (
    <header className="gradient-hero border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        <div>
          <p className="text-xs text-brandLightBlue uppercase tracking-widest">
            24/7 Emergency Plumbing
          </p>
          <p className="text-xs text-slate-300">
            Serving Contra Costa County
          </p>
        </div>

        <a href="tel:8001231234" className="text-brandGold font-bold text-lg">
          800-123-1234
        </a>
      </div>
    </header>
  );
}
