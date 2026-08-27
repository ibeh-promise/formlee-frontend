import {BookOpen} from "lucide-react"

export default function Hero() {
    return(
        <section className="flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-4xl font-bold text-center text-zinc-900">
                    Forms that just work.
                </h1>
                <p className="text-lg text-center text-zinc-700 mt-4">
                    Connect your forms to Formlee and start receiving submissions without building a backend.
                </p>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                <button className="inline-flex items-center space-x-1.5 text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-xs hover:shadow transition-all active:scale-98 cursor-pointer">
                    <span>Get started</span>
                </button>
                <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 font-medium text-sm px-6 py-3 rounded-xl border border-zinc-200 shadow-xs transition-all cursor-pointer">
                    <BookOpen className="w-4 h-4 text-zinc-500" />
            `       <span>View documentation</span>
                </button>
            </div>
        </section>
    )
}