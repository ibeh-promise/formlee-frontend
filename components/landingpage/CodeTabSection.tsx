"use client"
import {useState} from "react"
import CodeBlock from "../ui/CodeBlock";
import {Terminal} from  "lucide-react"

export default function CodeTabSelection(){
    const [activeTab, setActiveTab] = useState<'html' | 'react' | 'nextjs'>('html');

  const codeSnippets = {
    html: `<!-- Standard HTML form with Formlee endpoint -->
<form action="https://formlee.com/f/form_8x29kd" method="POST">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <!-- Optional custom redirect -->
  <input type="hidden" name="_next" value="https://mysite.com/thanks" />

  <button type="submit">Send message</button>
</form>`,

    react: `import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const response = await fetch('https://formlee.com/f/form_8x29kd', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus('success');
    }
  };

  if (status === 'success') {
    return <p className="text-emerald-600">Thanks! We will be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="How can we help?" required />
      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`,

    nextjs: `// app/contact/page.tsx (Next.js Server Action / Client Component)
'use client';

import { useTransition } from 'react';

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();

  async function submitAction(formData: FormData) {
    const res = await fetch('https://formlee.com/f/form_8x29kd', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      alert('Submission received!');
    }
  }

  return (
    <form action={(data) => startTransition(() => submitAction(data))}>
      <input type="text" name="name" placeholder="Full name" required />
      <input type="email" name="email" placeholder="Email address" required />
      <textarea name="message" placeholder="Message content" required />
      
      <button type="submit" disabled={isPending}>
        {isPending ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}`
  };
  return (
    <section className="py-20 bg-[#FAFAFA] border-t border-zinc-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-zinc-200/70 text-zinc-700 text-xs font-mono mb-3">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Developer first</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-3">
            No backend required.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Works seamlessly with raw HTML, React, Next.js, Vue, Svelte, or cURL.
          </p>
            </div>

            <div className="flex items-center justify-center space-x-2 mb-6">
          {(['html', 'react', 'nextjs'] as const).map((tab) => (
            <button
              key={tab}
              id={`code-tab-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:bg-zinc-50'
              }`}
            >
              {tab === 'html' && 'HTML Form'}
              {tab === 'react' && 'React'}
              {tab === 'nextjs' && 'Next.js App Router'}
            </button>
          ))}  
          </div>

          <div className="max-w-3xl mx-auto">
            <CodeBlock
            code={codeSnippets[activeTab]}
            language={activeTab === 'html' ? 'html' : 'typescript'}
            filename={
              activeTab === 'html'
                ? 'index.html'
                : activeTab === 'react'
                ? 'ContactForm.tsx'
                : 'app/contact/page.tsx'
            }
          />
          </div>
          </div>
    </section>
  )
}