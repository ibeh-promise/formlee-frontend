import { ChevronRight, Search } from "lucide-react";
import { Input } from "../ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16.25 bg-white border-b">
      <div className="flex justify-around items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Brand Logo & Admin Badge */}
            <div className="flex items-center space-x-3 shrink-0">
              <div className="flex items-center space-x-2.5 cursor-pointer select-none group">
                <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white shadow-xs">
                  <svg
                    className="w-4 h-4 text-white"
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
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-bold text-base tracking-tight text-zinc-950">
                    Formlee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
            <search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
            <Input 
            type="text"
            value={SearchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search tickets, domains, users, endpoints ID..." 
            className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-zinc-900 focus:bg-white text-zinc-900 placeholder:text-zinc-400 transition-all font-sans"
            />
        </div>
    </div>
    <div className="flex items-center space-x-4">
        <button
        onClick={() => add.Toast(`System Status refreshed. Fleet metrics updated.`, 'info')}
        title="Refresh metrics"
        className="hidden sm:inline-flex items-center space-x-1 px-2 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-900 hover:bg-zinc-100 rounded-lg border border-zinc-200 transition-colors cursor-pointer"
        >
            <RefreshCcw className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden lg:inline">Refresh</span>
        </button>

        <div className="h-6 w-px bg-zinc-200 hidden sm:block" />

        <div className="flex items-center space-x-2 pl-1">
            <img
            src={} />
        </div>
    </div>

      </div>
    </header>
  );
}
