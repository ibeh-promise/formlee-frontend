"use client"

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-50 w-64 h-screen">
        <div className="bg-white border-r border-zinc-200 h-full flex flex-col justify-between">
            <div className="space-y-3">
                <div className="flex gap-3 justify-left items-center border-r p-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover:bg-zinc-700 transition-colors">
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
                <div className="">
                <h3 className="text-lg font-bold tracking-tight text-zinc-900">Formlee</h3>
                <p className="text-xs text-black/60">Admin Panel</p>
                </div>
                </div>
            </div>

            <div>
                <h5 className="text-xs text-black/60 mb-3">Menu</h5>
            </div>
        </div>
    </aside>
  );
}
