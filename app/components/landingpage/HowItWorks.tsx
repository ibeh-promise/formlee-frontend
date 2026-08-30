"use client";
import { Inbox, Link2, PlusCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Create a form",
      description:
        "Create a Formlee endpoint from your dashboard in one click.",
      icon: PlusCircle,
    },
    {
      num: "02",
      title: "Connect your form",
      description:
        "Add your Formlee endpoint to your HTML, React, Next.js, or other form.",
      icon: Link2,
    },
    {
      num: "03",
      title: "Receive submissions",
      description:
        "Formlee handles the submission, filters spam, and delivers it to you.",
      icon: Inbox,
    },
  ];

  return (
    <section className="py-20 border-t border-zinc-200/60 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-3">
            Form form to inbox in minutes.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            No server setup, no database provisioning, no mail server
            configuration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                className="relative p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 flex flex-col justify-between hover:border-zinc-300 transition-colors"
                key={step.num}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-zinc-400">
                      {step.num}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-200/50 flex items-center text-xs font-medium text-zinc-500">
                  <span>Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
