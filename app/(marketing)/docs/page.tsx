"use client";
import CodeBlock from "@/app/components/ui/CodeBlock";
import React, { useState } from "react";

export default function docs() {
  const [activeDocSection, setActiveDocSection] = useState<string | null>(null);
  const [testEmail, setTestEmail] = useState("developer@test.io");
  const [testMessage, setTestMessage] = useState(
    "Testing Formlee API endpoint via Docs sandbox",
  );
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [sandboxResult, setSandboxResult] = useState<any>(null);
  const docSections = [
    {
      group: "Getting Started",
      items: [
        { id: "introduction", title: "Introduction" },
        { id: "quick-start", title: "QuickStart" },
        { id: "html-forms", title: "Html Forms" },
        { id: "react", title: "React" },
        { id: "nextjs", title: "Next.js" },
      ],
    },
    {
      group: "Features",
      items: [
        { id: "submissions", title: "Submissions" },
        { id: "email-notifications", title: "Email Notifications" },
        { id: "file-upload", title: "File Upload" },
        { id: "webhooks", title: "Webhooks" },
        { id: "spam-protection", title: "Spam Protection" },
      ],
    },
    {
      group: "API Reference",
      items: [
        { id: "api-auth", title: "Authentication" },
        { id: "api-endpoints", title: "Endpoints" },
        { id: "api-submissions", title: "Submissions" },
        { id: "api-webhooks", title: "Webhooks" },
      ],
    },
  ];

  const handleRunSandBlox = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <aside className="w-full md:w-60 shrink-0 bg-white md:bg-transparent rounded-xl p-4 md:p-0 border md:border-0 border-zinc-200 sticky top-20">
          <div className="space-y-6">
            {docSections.map((section) => (
              <div key={section.group}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  {section.group}
                </h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block text-sm font-medium ${
                          activeDocSection === item.id
                            ? "text-zinc-900"
                            : "text-zinc-700 hover:text-zinc-900 transition-colors"
                        }`}
                        onClick={() => setActiveDocSection(item.id)}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
        <div className="flex-1 bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-10 shadow-xs min-w-0">
          {activeDocSection === "quick-start" && (
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 text-xs text-zinc-500 font-mono mb-2">
                  <span>Getting Started</span>
                  <span>/</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mb-3">
                  Quick Start Guide
                </h1>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Set up Formlee in under 60 seconds. No npm dependencies or
                  complex configuration required.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-900 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <span>Create a Form Endpoint</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600">
                  From your dashboard, click "+ Create Form". You will receive a
                  unique endpoint URL:
                </p>
                <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200 font-mono text-xs text-zinc-800 flex items-center justify-between">
                  <span>https://formlee.com/f/form_8x29kd</span>
                  <span className="text-[10px] text-zinc-600 uppercase font-semibold">
                    Your Endpoint
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-900 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span>Point your form action to Formlee</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Set your HTML form's{" "}
                  <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">
                    action
                  </code>{" "}
                  attribute to your Formlee endpoint and method to{" "}
                  <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">
                    POST
                  </code>
                  :
                </p>
                <CodeBlock
                  language="html"
                  filename="index.html"
                  code={`<form action="https://formlee.com/f/form_8x29kd" method="POST">
  <input type="email" name="email" placeholder="Your email" required />
  <textarea name="message" placeholder="Your message" required></textarea>
  <button type="submit">Submit</button>
</form>`}
                />
              </div>
              <div className="space-14">
                    <h3 className="text-base font-bold text-zinc-900 flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">3</span>
                        <span>Try It In The interactive Tester</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600">
                        Test submitting to your endpoint right now. Watch the response return in real time:
                    </p>
                    <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                        <form className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Email</label>
                                <input type="email"
                                    value={testEmail}
                                    onChange={(e) => setTestEmail(e.target.value)}
                                    className="w-full text-xs px-3 py-2 bg-white border border-zinc-200 rounded-lg text-zinc-900"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Message</label>
                                <textarea
                                    value={testMessage}
                                    onChange={(e) => setTestMessage(e.target.value)}
                                    className="w-full text-xs px-3 py-2 bg-white border border-zinc-200 rounded-lg text-zinc-900"
                                />
                                <button type="submit" onClick={isSendingTest} className="inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"></button>
                            </div>
                        </form>
                        {sandboxResult && (
                            <div className="mt-4 pt-4 border-t border-zinc-200">
                                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1.5"> Response (HTTP {sandboxResult.status} OK)</span>
                                <pre className="p-3 bg-[#0c0d0e] text-emerald-400 font-mono text-xs rounded-lg overflow-x-auto">
                          {JSON.stringify(sandboxResult.data, null, 2)}
                        </pre>
                            </div>
                        )}
                    </div>

              </div>
            </div>
          )}
          {
            activeDocSection === "html-forms" && (
                <div className="space-y-6">
                    <h1 className="text-2xl font-bold text-zinc-950">Html Forms</h1>
                    <p className="text-sm text-zinc-600">
                        Formlee supports all standard HTML5 input types with automatic parsing, honeypot spam protection, and file uploads.
                    </p>
                    <h3 className="text-sm font-bold text-zinc-900 mt-6"> Special Formlee Form Attributes </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                      <code className="font-mono font-bold text-zinc-900">
                        name="_next"
                      </code>
                      <p className="text-xs text-zinc-600">set a custom email subject line for incoming submission notification.</p>
                    </div>
                    <div className="p-3 bg-zinc-50 border order-zinc-200 rounded-lg">
                      <code className="font-mono font-bold text-zinc-900">name ="subject"</code>
                      <p className="text-xs text-zinc-600 mt-1">Hide this field with css. If a spam bot fills it in,Formlee silently discards the spam</p>
                  </div>
                </div>
                </div>
            )
            }
            <h3 className="text-sm font-bold text-zinc-900 mt-6">complete HTML example</h3>
            <CodeBlock
            language="html"
            code={`<form action="https://formlee.com/f/form 8x29kd"method="POST">
              <input type="text" name"gotcha" style="display: none">
                
                <!--custom email subject -->
                <input type="hidden" name=" subject" value="new website inquriy" />

                <!-- custom redirect destination -->
                <input type="hidden" name=" vaule="https://example.com/thanks />

                <label>Your Name</label>
                <input type="text" name="name" required />

                <label>Your Email</label>
                <input type="email" name="email" required />

                <label>Your Message</label>
                <textarea name="message" required></textarea>

                <button type="sumbit">submit</button>
              </form>`} />

          </div>
      </div>
    </main>
  );
}
