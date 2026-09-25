"use client";
import React, { useState } from "react";
// import { useApp } from '../../context/AppContext';
import {
  FileText,
  Inbox,
  ArrowUpRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OverviewView() {
  // const { user, forms, submission, navigate, addToast } = useApp();
  const [copiedID, setCopiedID] = useState<string | null>(null);
  const forms = [
    {
      id: 20,
      name: "Promise",
      endpointId: "formlee.com",
    },
    {
      id: 10,
      name: "Azcode",
      endpointId: "formlee-frontend.com",
    },
  ];

  // const totalsubmission = submissions.length + 1240; // realistic aggregate
  // const activeforms = forms.filter((f) => f.status === 'active').length;
  // const submissionsThisMonth = user.submissionsUsedThisMonth;
  // const recentSubmissions = submissions.slice(0, 5);

  const handleCopyEnpoint = (endpointId: string) => {
    const url = `https://formlee.com/f/${endpointId}`;
    navigator.clipboard.writeText(url);
    setCopiedID(endpointId);
    // addToast(`Endpoint URL coiped to clipboard!`):
    setTimeout(() => setCopiedID(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200 p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-light">
            Good morning, User.
          </h1>
          <p className="text-sm sm:text-sm text-zinc-500 mt-1">
            Here&apos;s What&apos;s happening with your forms today.
          </p>
        </div>

        <div className="flex items-center space-x-3">

          <Button className="space-x-1.5 text-black bg-white hover:bg-zinc-50 border border-zinc-200/90 transition-colors rounded-2xl">
            <Link href={"/dashboard/froms"}>
              <span className="text-[12px]">All Forms</span>
            </Link>
          </Button>
          <Button className="">
            <Link href={"docs"}>
              <span className="text-[12px]">View Docs</span>
            </Link>
            <ExternalLink className="w-3.5,h-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs">
          <div className="flex items-Center justify-between text-zinc-500 mb-2">
            <span className="text-xs">Total Submissions</span>
            <Inbox className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-mono">
            23
          </div>
          <span className="text-[11px] text-emerald-600 font-medium mt-1 inline-flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>+14% vs last week</span>
          </span>
          `
        </div>

        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadow-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-medium"></span>
            <FileText className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-semibold text-zinc-900 font-mono">
            {/* {activeforms} */}
            24
          </div>
          <span className="[11px] text-zinc-500 mt-1 block">
            12 total endpoints
          </span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-medium">This Month</span>
            <Clock className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-mono">
            12
          </div>
          <span className="text-[11px] text-zinc-500 mt-1 block">
            Limit: 34
          </span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-medium">Spam Block Rate</span>
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">
            99.9%
          </div>
          <span className="text-[11px] text-zinc-500 mt-1 block">
            0 bots leaks reported
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border-zinc-200/80 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justfiy-between mb-4">
          <div>
            <h2 className="text-base font-bold text-zinc-950">
              Active Endpoints
            </h2>
            <p className="text-xs text-zinc-500">
              Quickly grab endpoints URLs to embed in your websites.
            </p>
          </div>
          <button className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 flex items-center space-x-1">
            <Link href={"/dashboard/forms"}>
              <span>Manage All</span>
            </Link>
            <ArrowUpRight className="w-3 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {forms.slice(0, 3).map((form) => {
            const isCopied = copiedID === form.endpointId;

            return (
              <div
                key={form.id}
                className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-200/70 hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div className="m-3">
                  <div className=""></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
