import React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "../ui/button";

export default function CtaSection() {
  return (
    <section className="py-20 bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-6">
          <Terminal className="w-3.5 h-3.5 text-zinc-300" />
          <span>curl -X POST https://formlee.io/f/new</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Start receiving form submissions today.
        </h2>

        <p className="text-zinc-400 text-base max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Create your first form endpoint in seconds. Free forever for personal
          projects with zero credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            id="bottom-cta-get-started"
            // onClick={() => navigate('/signup')}
            variant={"secondary"}
          >
            <span>Create your first form</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            id="bottom-cta-pricing"
            // onClick={() => navigate('/pricing')}
          >
            <span>View pricing plans</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
