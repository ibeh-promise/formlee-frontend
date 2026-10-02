import { ChevronRight } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 h-[65px] bg-white border-b">
            <div className="flex justify-between items-center px-10 py-5">
                <div className="flex justify-between items-center px-10 py-2">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover:bg-zinc-800 transition-colors">
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
                    <span className="text-lg font-bold tracking-tight text-zinc-900 ml-2">FormLee</span>
                </div>
            </div>
        </header>
    )
}