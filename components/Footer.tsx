export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-10 pb-6 mt-10">
      <div className="mx-auto max-w-6xl px-4">

        {/* Top Section */}
        <div className="grid gap-8 sm:grid-cols-3">

          {/* Column 1 – Brand */}
          <div>
            <h3 className="text-brandGold text-lg font-bold">
              Contra Costa Plumbing Pros
            </h3>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              Licensed, insured, and serving Contra Costa County with reliable 24/7 plumbing services.
              Fast arrival. Honest pricing. Professional technicians.
            </p>

            {/* Trust Badges */}
            <div className="mt-4 flex items-center gap-3">
              <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                ✓ Licensed
              </div>
              <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                ✓ Insured
              </div>
              <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                ✓ 24/7 Service
              </div>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="/" className="hover:text-brandLightBlue">Home</a></li>
              <li><a href="#services" className="hover:text-brandLightBlue">Our Services</a></li>
              <li><a href="#why" className="hover:text-brandLightBlue">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-brandLightBlue">FAQ</a></li>
              <li><a href="tel:8001231234" className="hover:text-brandLightBlue">Call Now</a></li>
            </ul>
          </div>

          {/* Column 3 – Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Contact Us</h4>
            <ul className="mt-3 space-y-1 text-sm text-slate-400">
              <li>Phone: <a href="tel:8001231234" className="text-brandGold font-semibold">800-123-1234</a></li>
              <li>Email: <a href="mailto:help@contracostaplumbingpros.com" className="hover:text-brandLightBlue">help@contracostaplumbingpros.com</a></li>
            </ul>

            <h4 className="text-sm font-semibold text-slate-200 mt-4">Service Areas</h4>
            <p className="mt-1 text-sm text-slate-400">
              Concord • Walnut Creek • Pittsburg • Antioch • Martinez • Oakley • Brentwood • More
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-10 pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Contra Costa Plumbing Pros. All rights reserved.</p>
          <p>CSLB License #0000000 • 24/7 Emergency Plumbing</p>
        </div>
      </div>
    </footer>
  );
}
