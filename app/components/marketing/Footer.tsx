export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-[#FAFAFA] text-zinc-600 text-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer select-none">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="4" />
                  <path d="m8 12 3 3 5-5" />
                </svg>
              </div>
              <span className="font-bold text-base tracking-tight text-zinc-900">
                Formlee
              </span>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm max-w-sm leading-relaxed">
                Forms that just work. The modern form backend and submission delivery platform for developers.
            </p> 
            <div className="flex items-center space-x-2 text-xs text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>All System Operational</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-xs uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Live Dashoard</li>
                <li>Endpoints</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-xs uppercase tracking-wider mb-3">Documentation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>Getting Started</li>
                <li>Html Forms</li>
                <li>React & Next.js</li>
                <li>WebHook & Api</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-xs uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>Security</li>
                <li>Privacy & Policy</li>
                <li>Terms of Service</li>
                <li>Github</li>
            </ul>
          </div>
        </div>
          <div className="pt-8 mt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Formlee. All rights reserved.</p>
          <p className="font-mono text-[11px]">Designed for high performance & simple developer workflows</p>
        </div>

      </div>
    </footer>
  );
}
