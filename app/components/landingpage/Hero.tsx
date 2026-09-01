"use client"
import { ArrowRight, BookOpen, Sparkles, Terminal, Check } from "lucide-react"
import CodeBlock from "@/app/components/ui/CodeBlock";

export default function Hero(){

    const heroCodeSnippet = `<form action="https://formlee.com/f/your-form-id" method="POST">
    <input type="email" name="email" placeholder="Your email" required />
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send</button>
  </form>`;

    return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-zinc-900">Formlee</span>
          <span className="text-zinc-400">·</span>
          <span>Zero backend form delivery</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-6">
          Forms that just work.
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Connect your forms to Formlee and start receiving submissions without building a backend.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <button
            id="hero-get-started-cta"
            // onClick={() => navigate('/signup')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <span>Get started</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-view-docs-cta"
            // onClick={() => navigator('/docs')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 font-medium text-sm px-6 py-3 rounded-xl border border-zinc-200 shadow-xs transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-zinc-500" />
            <span>View documentation</span>
          </button>
        </div>

        {/* Code Preview snippet directly under hero */}
        <div className="text-left max-w-2xl mx-auto shadow-2xl rounded-xl border border-zinc-800 bg-[#0c0d0e]">
          <CodeBlock
            code={heroCodeSnippet}
            language="html"
            filename="contact-form.html"
          />
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
          <div className="flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Setup in 30 seconds</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Built-in spam protection</span>
          </div>
        </div>
      </div>
    </section>
  );
}