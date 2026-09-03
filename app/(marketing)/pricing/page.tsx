"use client";
import React, { useState } from "react";

import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const user = {
    plan: "free" as const,
  };
  const plans = [
    {
      name: "Free",
      badge: "Starter",
      description: "For personal projects and testing.",
      price: "$0",
      period: "forever",
      features: [
        "1 form endpoint",
        "50 submissions / month",
        "Email notifications",
        "Basic spam protection",
        "CSV submission exports",
        "Community support",
      ],
      cta: "Start for free",
      planKey: "free" as const,
      popular: false,
    },
    {
      name: "Pro",
      badge: "Most Popular",
      description: "For developers and growing production apps.",
      price: billingCycle === "monthly" ? "$14" : "$11",
      period: billingCycle === "monthly" ? "/ month" : "/ month, billed yearly",
      features: [
        "Unlimited forms",
        "10,000 submissions / month",
        "Advanced spam protection & honeypots",
        "Real-time webhooks & HMAC verify",
        "File uploads (up to 25MB)",
        "Custom redirect URLs & AJAX mode",
        "Remove Formlee branding",
        "Fast email support",
      ],
      cta: "Start building",
      planKey: "pro" as const,
      popular: true,
    },
    {
      name: "Business",
      badge: "Scale",
      description: "For teams and multi-client agencies.",
      price: billingCycle === "monthly" ? "$49" : "$39",
      period: billingCycle === "monthly" ? "/ month" : "/ month, billed yearly",
      features: [
        "Everything in Pro",
        "100,000 submissions / month",
        "Team workspaces & permissions",
        "Direct Slack & Discord integrations",
        "Dedicated IP routing",
        "Custom domain endpoints",
        "99.9% uptime SLA guarantee",
        "Priority 24/7 support",
      ],
      cta: "Contact us",
      planKey: "business" as const,
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-3xl sm:text-5xl mb-4 font-extrabold text-zinc-950 tracking-tight mt-10">
          Simple Pricing
        </h1>
        <p className="text-lg text-gray-600">
          Transparent, predictable plans with no hidden fees or surprise usage
          bills.
        </p>

        <div className="my-8 inline-flex items-center p-1 bg-zinc-200/70 rounded-xl border border-zinc-200">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              billingCycle === "monthly"
                ? "bg-white text-zinc-900 shadow-2xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center space-x-1.5 ${
              billingCycle === "yearly"
                ? "bg-white text-zinc-900 shadow-2xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span>Yearly billing</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.2 rounded-md">
              Save 20%
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isCurrent = user.plan === plan.planKey;

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "bg-white border-2 border-zinc-900 shadow-xl ring-1 ring-zinc-900/10"
                    : "bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-zinc-950">
                      {plan.name}
                    </h3>
                    {isCurrent && (
                      <Badge variant="success" size="sm">
                        Current Plan
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-extrabold text-zinc-950 font-mono tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                      Included
                    </span>
                    {plan.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start space-x-2.5 text-xs text-zinc-700"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  // onClick={() => handleSelectPlan(plan.planKey)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all active:scale-98 cursor-pointer ${
                    plan.popular
                      ? "bg-zinc-900 hover:bg-zinc-800 text-white shadow-xs"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200/80"
                  }`}
                >
                  {isCurrent ? "Active Plan" : plan.cta}
                </button>
              </div>
            );
          })}
        </div>
        <div className="my-20 max-w-3xl mx-auto pt-16 border-t border-zinc-200/80">
          <h3 className="text-xl font-bold text-zinc-950 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6 text-sm text-start">
            <div className="p-5 bg-white rounded-xl border border-zinc-200/70">
              <h4 className="font-bold text-zinc-900 mb-1.5">
                How does the free tier work?
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                The free tier is completely free forever. You get 1 form
                endpoint and up to 50 submissions per month with instant email
                notifications.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-zinc-200/70">
              <h4 className="font-bold text-zinc-900 mb-1.5">
                What happens if I exceed my submission limits?
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                We never drop your submissions. We will notify you when you
                reach 90% of your plan limit so you can upgrade easily without
                losing data.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-zinc-200/70">
              <h4 className="font-bold text-zinc-900 mb-1.5">
                Can I switch plans later?
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                Yes! You can upgrade or downgrade your plan at any time. If you
                upgrade, you'll be charged a prorated amount for the remainder
                of your billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
