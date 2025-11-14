export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p>© {new Date().getFullYear()} Contra Costa Plumbing Pros. All rights reserved.</p>
        <p>Licensed & Insured · 24/7 Emergency Service · CSLB #0000000</p>
      </div>
    </footer>
  );
}
