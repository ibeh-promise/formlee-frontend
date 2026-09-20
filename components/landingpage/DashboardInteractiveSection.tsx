"use client"
import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Inbox,
  Workflow,
  Settings,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export const DashboardInteractiveSection = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'forms' | 'submissions'>('overview');

  const [previewSubmissions, setPreviewSubmissions] = useState([
    {
      id: 'p1',
      email: 'john@example.com',
      name: 'John Doe',
      form: 'Contact Form',
      time: '2 minutes ago',
      message: 'Looking for enterprise SLA & custom webhook payloads.',
      status: 'Delivered',
    },
    {
      id: 'p2',
      email: 'sarah@example.com',
      name: 'Sarah Jenkins',
      form: 'Newsletter',
      time: '18 minutes ago',
      message: 'Subscribed to weekly developer digests.',
      status: 'Delivered',
    },
    {
      id: 'p3',
      email: 'michael@example.com',
      name: 'Michael Chen',
      form: 'Contact Form',
      time: '1 hour ago',
      message: 'Migrating 45 client marketing sites to Formlee.',
      status: 'Delivered',
    },
  ]);

  const [testSent, setTestSent] = useState(false);

  const handleSimulateTest = () => {
    const newEntry = {
      id: 'p_' + Math.random().toString(36).substring(2, 7),
      email: 'alex.developer@demo.io',
      name: 'Alex Developer',
      form: 'Contact Form',
      time: 'Just now',
      message: 'Just sent this directly from the interactive preview!',
      status: 'Delivered',
    };
    setPreviewSubmissions((prev) => [newEntry, ...prev.slice(0, 3)]);
    setTestSent(true);
    setTimeout(() => setTestSent(false), 2500);
  };

  return (
    <section className="py-20 bg-[#FAFAFA] border-t border-zinc-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-3">
            Designed for speed and clarity.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            A clean, developer-focused dashboard to monitor submissions across all your websites.
          </p>
        </div>

        {/* Browser Mockup Frame */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-zinc-300/80 bg-white shadow-2xl overflow-hidden">
          {/* Browser Window Header */}
          <div className="bg-zinc-100 px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 ml-2 hidden sm:inline">
                https://formlee.io/dashboard
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                id="preview-simulate-btn"
                onClick={handleSimulateTest}
                className="inline-flex items-center space-x-1.5 bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-700 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-3 h-3 text-zinc-500" />
                <span>{testSent ? 'Payload Received!' : 'Test Live Submission'}</span>
              </button>

              <button
                // onClick={() => navigate('/dashboard')}
                className="inline-flex items-center space-x-1 bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors cursor-pointer"
              >
                <span>Open Full App</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[460px] bg-[#FAFAFA]">
            {/* Mock Sidebar */}
            <div className="w-full md:w-52 bg-white border-r border-zinc-200/80 p-4 shrink-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6 px-2">
                  <div className="w-5 h-5 rounded bg-zinc-900 flex items-center justify-center text-white text-[10px] font-bold">
                    F
                  </div>
                  <span className="font-bold text-xs tracking-tight text-zinc-900">
                    Formlee
                  </span>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'overview'
                        ? 'bg-zinc-100 text-zinc-900 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Overview</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('forms')}
                    className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'forms'
                        ? 'bg-zinc-100 text-zinc-900 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Forms</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('submissions')}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'submissions'
                        ? 'bg-zinc-100 text-zinc-900 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Inbox className="w-3.5 h-3.5" />
                      <span>Submissions</span>
                    </div>
                    <span className="text-[10px] bg-zinc-900 text-white px-1.5 py-0.2 rounded-full font-mono">
                      {previewSubmissions.length}
                    </span>
                  </button>

                  <div className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 cursor-not-allowed">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Integrations</span>
                  </div>

                  <div className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 cursor-not-allowed">
                    <Settings className="w-3.5 h-3.5" />
                    <span>Settings</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 text-[11px] text-zinc-400">
                <span className="text-zinc-900 font-medium">Alex Rivera</span> · Pro
              </div>
            </div>

            {/* Mock Dashboard Area */}
            <div className="flex-1 p-5 sm:p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                    Good morning, Alex.
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Here's what's happening with your forms today.
                  </p>
                </div>
                <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full font-medium flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>End-to-end active</span>
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <span className="text-[11px] text-zinc-500 font-medium block mb-1">
                    Total submissions
                  </span>
                  <span className="text-xl font-extrabold text-zinc-900 font-mono">
                    1,248
                  </span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <span className="text-[11px] text-zinc-500 font-medium block mb-1">
                    Active forms
                  </span>
                  <span className="text-xl font-extrabold text-zinc-900 font-mono">
                    8
                  </span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <span className="text-[11px] text-zinc-500 font-medium block mb-1">
                    This month
                  </span>
                  <span className="text-xl font-extrabold text-zinc-900 font-mono">
                    324
                  </span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <span className="text-[11px] text-zinc-500 font-medium block mb-1">
                    Delivery rate
                  </span>
                  <span className="text-xl font-extrabold text-emerald-600 font-mono">
                    99.8%
                  </span>
                </div>
              </div>

              {/* Recent Submissions Table preview */}
              <div className="bg-white rounded-xl border border-zinc-200/80 overflow-hidden shadow-2xs">
                <div className="p-3.5 border-b border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-900">
                    Recent submissions
                  </span>
                  <button
                    // onClick={() => navigate('/dashboard/submissions')}
                    className="text-[11px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    View all →
                  </button>
                </div>

                <div className="divide-y divide-zinc-100 text-xs">
                  {previewSubmissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-3 hover:bg-zinc-50 flex items-center justify-between transition-colors"
                    >
                      <div className="min-w-0 flex-1 pr-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-zinc-900 truncate">
                            {sub.email}
                          </span>
                          <span className="text-[10px] text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded-md font-mono">
                            {sub.form}
                          </span>
                        </div>
                        <p className="text-zinc-500 text-[11px] truncate mt-0.5">
                          {sub.message}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[11px] text-zinc-400 block font-mono">
                          {sub.time}
                        </span>
                        <span className="text-[10px] text-emerald-600 font-medium">
                          {sub.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
