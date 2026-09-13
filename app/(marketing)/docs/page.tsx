"use client";
import CodeBlock from "@/app/components/ui/CodeBlock";
import React, { useState } from "react";

export default function docs() {
  const [activeDocSection, setActiveDocSection] = useState<string | null>(null);
  const [testEmail, setTestEmail] = useState("developer@test.io");
  const [testMessage, setTestMessage] = useState(
    "Testing Formlee API endpoint via Docs sandbox",
  );
  const [isSendingText, setIsSendingText] = useState(false);
  const [sandBoxResponse, setSandBoxResponse] = useState<string | null>(null);
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
                        
                    </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
