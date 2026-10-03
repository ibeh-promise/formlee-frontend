"use client";
import React, { useEffect, useState } from "react";
import {
  FileText,
  Inbox,
  ArrowUpRight,
  TrendingUp,
  Clock,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/Badges";
import * as api from "@/lib/api";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function OverviewView() {
  const [copiedID, setCopiedID] = useState<string | null>(null);
  const router = useRouter();
  const [recentSubmissions, setRecentSubmissions] = useState<
    api.SubmissionResponseDto[]
  >([]);

  const handleCopyEnpoint = (endpointId: string) => {
    const url = `https://formlee.com/f/${endpointId}`;
    navigator.clipboard.writeText(url);
    setCopiedID(endpointId);
    // addToast(`Endpoint URL coiped to clipboard!`):
    setTimeout(() => setCopiedID(null), 2000);
  };

  const [stats, setStats] = useState<api.StatsResponseDto | null>(null);

  const [activeForms, setActiveForms] = useState<api.FormResponseDto[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [statsRes, activeFormsRes, recentSubmissionsRes] =
        await Promise.all([
          api.stats.statsControllerGetStatsV1({
            auth: localStorage.getItem("authToken")!,
          }),
          api.form.formControllerFindAllByStatusV1({
            path: { status: "active" },
            auth: localStorage.getItem("authToken")!,
          }),
          api.submission.submissionControllerFindRecentV1({
            auth: localStorage.getItem("authToken")!,
          }),
        ]);
      setStats(statsRes.data || null);

      setActiveForms(activeFormsRes.data || []);

      setRecentSubmissions(recentSubmissionsRes.data || []);
      setIsLoading(false);
    };

    loadData();
  }, []);

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
          <Link href={"/dashboard/forms"}>
            <Button variant={"secondary"}>
              <span className="text-[12px]">All Forms</span>
            </Button>
          </Link>
          <Link href={"docs"}>
            <Button>
              <span className="text-[12px]">View Docs</span>
              <ExternalLink className="w-3.5,h-3.5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs space-y-3">
          <div className="flex items-Center justify-between text-zinc-500">
            <span className="text-xs">Total Submissions</span>
            <Inbox className="w-4 h-4 text-zinc-400" />
          </div>
          {isLoading ? (
            <>
              <Skeleton className="h-7" />
              <Skeleton className="h-7" />
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-mono">
                {stats?.totalSubmissions}
              </h2>
              <span className="text-[11px] text-emerald-600 font-medium inline-flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>+14% vs last week</span>
              </span>
            </>
          )}
        </div>

        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-zinc-500">
            <span className="text-xs font-medium">Active Forms</span>
            <FileText className="w-4 h-4 text-zinc-400" />
          </div>
          {isLoading ? (
            <>
              <Skeleton className="h-7" />
              <Skeleton className="h-7" />
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 font-mono">
                {stats?.totalActiveForms}
              </h2>
              <span className="[11px] text-zinc-500 block">
                {stats?.totalForms} total endpoints
              </span>
            </>
          )}
        </div>

        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs space-y-3">
          <div className="flex items-center justify-between text-zinc-500">
            <span className="text-xs font-medium">This Month</span>
            <Clock className="w-4 h-4 text-zinc-400" />
          </div>
          {isLoading ? (
            <>
              <Skeleton className="h-7" />
              <Skeleton className="h-7" />
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-mono">
                {stats?.usageLimit}
              </h2>
              <span className="text-[11px] text-zinc-500 block">Limit: 34</span>
            </>
          )}
        </div>

        {/* <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs">
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
        </div> */}
      </div>

      <div className="bg-white rounded-2xl border-zinc-200/80 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
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
          {isLoading ? (
            <>
              <Skeleton className="h-30" />
              <Skeleton className="h-30" />
              <Skeleton className="h-30" />
            </>
          ) : (
            activeForms.slice(0, 3).map((form) => {
              const isCopied = copiedID === form.slug;

              return (
                <div
                  key={form.id}
                  className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-200/70 hover:border-zinc-300 transition-all flex flex-col justify-between"
                >
                  <div className="m-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-bold text-zinc-900 truncate">
                        {form.name}
                      </p>
                      <Badge
                        variant={form.status === "active" ? "success" : "muted"}
                        size="sm"
                      >
                        {form.status}
                      </Badge>
                    </div>
                    <p className="font-mono text-[11px] text-zinc-500 truncate">
                      {form.slug}
                    </p>
                    <hr className="text-zinc-500 mt-5" />
                    <div className="flex justify-between items-center">
                      <Button className="bg-white hover:bg-white inline-flex items-center space-x-1 text-[11px] font-medium text-zinc-600 hover:text-zinc-900m">
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">
                              Copied
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy URL</span>
                          </>
                        )}
                      </Button>
                      <Button
                        variant={"link"}
                        onClick={() =>
                          router.push(`/dashboard/forms/${form.slug}`)
                        }
                      >
                        Details <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border-zinc-200/80 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="">
            <h2 className="text-base font-bold text-zinc-950">
              Recent Submissions
            </h2>
            <p className="text-xs text-zinc-500">
              Live incoming payloads from your active forms.
            </p>
          </div>
          {isLoading ? (
            <Skeleton className="w-40 h-8" />
          ) : (
            <Button
              variant={"secondary"}
              onClick={() => router.push("/dashboard/submissions")}
            >
              View all Submissions({recentSubmissions.length})
            </Button>
          )}
        </div>
        {isLoading ? (
          <Skeleton className="w-full h-40" />
        ) : recentSubmissions.length === 0 ? (
          <div className="p-10 text-center text-zinc-500 text-xs">
            No submissions recorded yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50/70 border-b border-zinc-100 text-zinc-500 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="px-6 py-3">Sender & Email</th>
                  <th className="px-6 py-3">Form</th>
                  <th className="px-6 py-3">Message Summary</th>
                  <th className="px-6 py-3">Submitted</th>
                  <th className="px-6 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {recentSubmissions.map((sub) => (
                  <tr
                    key={sub.id}
                    className="hover:bg-zinc-50/80 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center space-x-2.5">
                        <div
                          className={`w-2 h-2 rounded-full ${!sub.status ? "bg-zinc-900" : "bg-transparent"}`}
                        />
                        <div>
                          <p className="font-bold text-zinc-900">{sub.name}</p>
                          <p className="text-[11px] text-zinc-500 font-mono">
                            {sub.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <span className="font-medium text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded-md text-[11px]">
                        {sub.form.name}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 max-w-xs truncate text-zinc-600">
                      {sub.message}
                    </td>
                    <td className="px-6 py-3.5 text-zinc-500 font-mono text-[11px]">
                      {new Date(sub.submittedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <Badge
                        variant={
                          sub.status === "delivered"
                            ? "success"
                            : sub.status === "delivery_failed"
                              ? "warning"
                              : "muted"
                        }
                      >
                        {sub.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
