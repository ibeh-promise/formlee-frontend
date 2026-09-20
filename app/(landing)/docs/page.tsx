"use client";
import React, { useState } from "react";
// import { useApp } from '../context/AppContext';
import CodeBlock from "@/components/ui/CodeBlock";
import {
  BookOpen,
  Code2,
  Terminal,
  Send,
  CheckCircle2,
  Layers,
  Shield,
  Zap,
  ArrowRight,
  Search,
} from "lucide-react";

export default function docsPage() {
  // const { forms, simulateFormSubmission, addToast } = null;
  const [activeDocSection, setActiveDocSection] =
    useState<string>("quick-start");
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
        { id: "quick-start", title: "Quick Start" },
        { id: "html-forms", title: "HTML Forms" },
        { id: "react", title: "React" },
        { id: "nextjs", title: "Next.js" },
      ],
    },
    {
      group: "Features",
      items: [
        { id: "submissions", title: "Submissions" },
        { id: "email-notifications", title: "Email Notifications" },
        { id: "file-uploads", title: "File Uploads" },
        { id: "webhooks", title: "Webhooks" },
        { id: "spam-protection", title: "Spam Protection" },
      ],
    },
    {
      group: "API Reference",
      items: [
        { id: "api-auth", title: "Authentication" },
        { id: "api-endpoints", title: "Endpoints" },
        { id: "api-submissions", title: "Submissions API" },
        { id: "api-webhooks", title: "Webhooks API" },
      ],
    },
  ];

  const handleRunSandbox = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingTest(true);
    // setTimeout(() => {
    //   const activeForm = forms[0] || { id: 'form_8x29kd' };
    //   const sub = simulateFormSubmission(activeForm.id, {
    //     email: testEmail,
    //     name: 'Docs Tester',
    //     message: testMessage,
    //     origin: 'Documentation Sandbox'
    //   });
    //   setSandboxResult({
    //     status: 200,
    //     ok: true,
    //     data: {
    //       success: true,
    //       submissionId: sub.id,
    //       receivedAt: sub.submittedAt,
    //       form: sub.formName,
    //       status: 'delivered'
    //     }
    //   });
    //   setIsSendingTest(false);
    //   // addToast('Sandbox submission sent successfully!');
    // }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900">
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <aside className="w-full md:w-60 shrink-0 bg-white md:bg-transparent rounded-xl p-4 md:p-0 border md:border-0 border-zinc-200 sticky top-20">
            <div className="space-y-6">
              {docSections.map((group) => (
                <div key={group.group}>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-2 px-2">
                    {group.group}
                  </h4>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setActiveDocSection(item.id);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            activeDocSection === item.id
                              ? "bg-zinc-900 text-white font-semibold shadow-2xs"
                              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70"
                          }`}
                        >
                          {item.title}
                        </button>
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
                    <span className="text-zinc-900 font-semibold">
                      Quick Start
                    </span>
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
                    From your dashboard, click "+ Create Form". You will receive
                    a unique endpoint URL:
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

                <div className="space-y-4">
                  <h3 className="text-base font-bold text-zinc-900 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <span>Try it in the Interactive Tester</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Test submitting to your endpoint right now. Watch the
                    response return in real time:
                  </p>

                  <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                    <form onSubmit={handleRunSandbox} className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={testEmail}
                          onChange={(e) => setTestEmail(e.target.value)}
                          required
                          className="w-full text-xs px-3 py-2 bg-white border border-zinc-200 rounded-lg text-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">
                          Message
                        </label>
                        <textarea
                          value={testMessage}
                          onChange={(e) => setTestMessage(e.target.value)}
                          rows={2}
                          required
                          className="w-full text-xs px-3 py-2 bg-white border border-zinc-200 rounded-lg text-zinc-900"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSendingTest}
                        className="inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>
                          {isSendingTest ? "Dispatching..." : "Send Live Test"}
                        </span>
                      </button>
                    </form>

                    {sandboxResult && (
                      <div className="mt-4 pt-4 border-t border-zinc-200">
                        <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
                          Response (HTTP {sandboxResult.status} OK)
                        </span>
                        <pre className="p-3 bg-[#0c0d0e] text-emerald-400 font-mono text-xs rounded-lg overflow-x-auto">
                          {JSON.stringify(sandboxResult.data, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* HTML Forms */}
            {activeDocSection === "html-forms" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-zinc-950">HTML Forms</h1>
                <p className="text-sm text-zinc-600">
                  Formlee supports all standard HTML5 input types with automatic
                  parsing, honeypot spam protection, and file uploads.
                </p>

                <h3 className="text-sm font-bold text-zinc-900 mt-6">
                  Special Formlee Form Attributes
                </h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                    <code className="font-mono font-bold text-zinc-900">
                      name="_next"
                    </code>
                    <p className="text-xs text-zinc-600 mt-1">
                      Specify a custom redirect URL where the user should be
                      taken after submitting.
                    </p>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                    <code className="font-mono font-bold text-zinc-900">
                      name="_subject"
                    </code>
                    <p className="text-xs text-zinc-600 mt-1">
                      Set a custom email subject line for your incoming
                      submission notifications.
                    </p>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                    <code className="font-mono font-bold text-zinc-900">
                      name="_gotcha" (Honeypot)
                    </code>
                    <p className="text-xs text-zinc-600 mt-1">
                      Hide this field with CSS. If a spam bot fills it in,
                      Formlee silently discards the spam.
                    </p>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-zinc-900 mt-6">
                  Complete HTML Example
                </h3>
                <CodeBlock
                  language="html"
                  code={`<form action="https://formlee.com/f/form_8x29kd" method="POST">
  <!-- Honeypot for spam bots -->
  <input type="text" name="_gotcha" style="display:none" />

  <!-- Custom email subject -->
  <input type="hidden" name="_subject" value="New Website Inquiry" />

  <!-- Custom redirect destination -->
  <input type="hidden" name="_next" value="https://example.com/thanks" />

  <label>Your Name</label>
  <input type="text" name="name" required />

  <label>Your Email</label>
  <input type="email" name="email" required />

  <label>Your Message</label>
  <textarea name="message" required></textarea>

  <button type="submit">Submit Form</button>
</form>`}
                />
              </div>
            )}

            {activeDocSection === "react" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-zinc-950">
                  React Integration
                </h1>
                <p className="text-sm text-zinc-600">
                  Connect React forms seamlessly using standard{" "}
                  <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">
                    fetch
                  </code>{" "}
                  with JSON response handling without page reloads.
                </p>

                <CodeBlock
                  language="typescript"
                  filename="ContactForm.tsx"
                  code={`import React, { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formlee.com/f/form_8x29kd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit form.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return <div className="p-4 bg-emerald-50 text-emerald-800 rounded-lg">Thank you! We received your message.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && <div className="text-rose-600 text-xs">{errorMessage}</div>}
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your inquiry" required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`}
                />
              </div>
            )}

            {activeDocSection === "nextjs" && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-zinc-500 font-mono mb-2">
                    <span>Frameworks</span>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">
                      Next.js App Router
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                    Next.js Integration & Project Blueprint
                  </h1>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    Formlee works out of the box with Next.js 14 and 15 using
                    Server Actions, Client Components, or Route Handlers.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-zinc-900 flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 text-white text-[10px] font-mono font-semibold">
                        Option 1
                      </span>
                      <span>Next.js Server Action (Zero Client JS)</span>
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600">
                    Use a Server Action to securely submit form data server-side
                    without exposing API keys or endpoint IDs in client network
                    logs.
                  </p>
                  <CodeBlock
                    language="typescript"
                    filename="app/actions/submit-form.ts"
                    code={`'use server';

export async function submitContactForm(prevState: any, formData: FormData) {
  const endpoint = process.env.FORMLEE_ENDPOINT_URL || 'https://formlee.com/f/form_8x29kd';

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return { success: false, message: errorData.error || 'Submission failed' };
    }

    const data = await res.json();
    return { success: true, message: 'Message delivered successfully!', data };
  } catch (error) {
    return { success: false, message: 'Network connection error' };
  }
}`}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-zinc-900 flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-800 text-[10px] font-mono font-semibold">
                      Option 2
                    </span>
                    <span>Client Component (App Router)</span>
                  </h3>
                  <p className="text-xs text-zinc-600">
                    Interactive Next.js component with instant loading states
                    and feedback.
                  </p>
                  <CodeBlock
                    language="typescript"
                    filename="app/components/ContactForm.tsx"
                    code={`'use client';

import { useActionState } from 'react';
import { submitContactForm } from '../actions/submit-form';

const initialState = { success: false, message: '' };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-4 max-w-md">
      {state.message && (
        <div className={\`p-3 rounded-lg text-xs font-medium \${state.success ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}\`}>
          {state.message}
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-zinc-700 mb-1">Name</label>
        <input name="name" type="text" required className="w-full px-3 py-2 border rounded-lg text-sm" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-zinc-700 mb-1">Email</label>
        <input name="email" type="email" required className="w-full px-3 py-2 border rounded-lg text-sm" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-zinc-700 mb-1">Message</label>
        <textarea name="message" rows={3} required className="w-full px-3 py-2 border rounded-lg text-sm" />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 text-white text-xs font-semibold rounded-lg"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-zinc-900 flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-800 text-[10px] font-mono font-semibold">
                      Option 3
                    </span>
                    <span>Next.js API Route Handler (Webhook & Relay)</span>
                  </h3>
                  <CodeBlock
                    language="typescript"
                    filename="app/api/submissions/route.ts"
                    code={`import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Proxy to Formlee endpoint
    const response = await fetch('https://formlee.com/f/form_8x29kd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}`}
                  />
                </div>

                <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-zinc-950">
                    Exporting Formlee UI directly to Next.js
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    This entire project is built with modular React 19 +
                    Tailwind CSS components. To use these pages in your Next.js
                    project:
                  </p>
                  <ol className="list-decimal list-inside text-xs text-zinc-600 space-y-1.5 font-sans">
                    <li>
                      Export project via{" "}
                      <strong>Settings &rarr; Export to ZIP / GitHub</strong>.
                    </li>
                    <li>
                      Move components from{" "}
                      <code className="bg-zinc-200/70 px-1 py-0.5 rounded font-mono text-[11px]">
                        src/components
                      </code>{" "}
                      into your Next.js{" "}
                      <code className="bg-zinc-200/70 px-1 py-0.5 rounded font-mono text-[11px]">
                        components/
                      </code>{" "}
                      folder.
                    </li>
                    <li>
                      Place views into Next.js App Router directories (
                      <code className="bg-zinc-200/70 px-1 py-0.5 rounded font-mono text-[11px]">
                        app/page.tsx
                      </code>
                      ,{" "}
                      <code className="bg-zinc-200/70 px-1 py-0.5 rounded font-mono text-[11px]">
                        app/dashboard/page.tsx
                      </code>
                      , etc.).
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {activeDocSection === "webhooks" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-zinc-950">Webhooks</h1>
                <p className="text-sm text-zinc-600">
                  Formlee can automatically forward submission payloads to any
                  HTTP endpoint in real time.
                </p>

                <h3 className="text-sm font-bold text-zinc-900">
                  Payload Format
                </h3>
                <CodeBlock
                  language="json"
                  code={`{
  "event": "form.submission.created",
  "id": "sub_928103",
  "form_id": "form_8x29kd",
  "form_name": "Contact Form",
  "data": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "Hello from your contact form!"
  },
  "created_at": "2026-08-26T12:00:00.000Z",
  "ip": "198.51.100.22"
}`}
                />
              </div>
            )}

            {[
              "introduction",
              "submissions",
              "email-notifications",
              "file-uploads",
              "spam-protection",
              "api-auth",
              "api-endpoints",
              "api-submissions",
              "api-webhooks",
            ].includes(activeDocSection) && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-zinc-950 capitalize">
                  {activeDocSection.replace("-", " ")}
                </h1>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Formlee provides a robust, zero-configuration form processing
                  infrastructure. All submissions are encrypted in transit,
                  spam-checked, and delivered within milliseconds.
                </p>
                <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    API Endpoint Specification
                  </h4>
                  <pre className="font-mono text-xs text-zinc-700 bg-white p-3 rounded border border-zinc-200">
                    POST https://formlee.com/f/:form_id
                  </pre>
                  <p className="text-xs text-zinc-500">
                    Accepts either{" "}
                    <code className="bg-zinc-200/60 px-1 py-0.5 rounded">
                      application/x-www-form-urlencoded
                    </code>
                    ,{" "}
                    <code className="bg-zinc-200/60 px-1 py-0.5 rounded">
                      multipart/form-data
                    </code>
                    , or{" "}
                    <code className="bg-zinc-200/60 px-1 py-0.5 rounded">
                      application/json
                    </code>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
