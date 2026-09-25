"use client";
import { useParams, useRouter } from "next/navigation";
import { forms } from "../page";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Code2,
  Copy,
  Globe,
  Inbox,
  Settings,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/ui/CodeBlock";

function FormDetailsPage() {
  const { slug } = useParams();
  const form = forms.find((f) => f.slug === slug)!;
  const router = useRouter();
  return (
    <div className="space-y-8 animate-in fade-in duration-200 p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-3 items-center">
          <Button variant={"secondary"} onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-light">
                {form.name}
              </h3>{" "}
              <Badge
                variant={
                  form.status === "active"
                    ? "success"
                    : form.status === "paused"
                      ? "default"
                      : "muted"
                }
              >
                {form.status}
              </Badge>
            </div>
            <p className="text-sm sm:text-sm text-zinc-500 mt-1">{form.slug}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant={"secondary"}>
            <Copy /> Create Endpoint
          </Button>
          <Button variant={"destructive"}>
            <Trash2 />
          </Button>
        </div>
      </div>

      <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="bg-black text-white p-2 rounded-2xl">
            <Globe />
          </div>
          <div>
            <p className="text-xs text-black/60">PRODUCTION ENDPOINT URL</p>
            <p className="font-semibold tracking-wide">
              https://formlee.xyz/f/{form.slug}
            </p>
          </div>
        </div>

        <Button>
          <Copy /> Copy Endpoint
        </Button>
      </div>

      <Tabs>
        <TabsList variant={"line"}>
          <TabsTrigger value={"connect-setup"}>
            <Code2 /> Connect & Setup
          </TabsTrigger>
          <TabsTrigger value={"submission"}>
            <Inbox /> Submissions ({form._count.submissions})
          </TabsTrigger>
          <TabsTrigger value={"setting"}>
            <Settings /> Form Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value={"connect-setup"}>
          <Tabs className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white">
            <div className="flex items-center justify-between  mb-2">
              <div>
                <h5 className="font-bold">Connect your code</h5>
                <p className="text-xs text-black/60">
                  Select your framework or language to view drop-in code
                  snippets.
                </p>
              </div>
              <TabsList>
                <TabsTrigger value={"html"}>HTML</TabsTrigger>
                <TabsTrigger value={"react"}>React</TabsTrigger>
                <TabsTrigger value={"nextjs"}>Nextjs</TabsTrigger>
                <TabsTrigger value={"curl"}>CURL</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value={"html"}>
              <CodeBlock
                language="html"
                filename="index.html"
                code={`<!-- 1. Add your Formlee endpoint to your form action -->
<form action="https://formlee.com/f/${form.slug}" method="POST">
  <!-- Honeypot for spam bots (optional) -->
  <input type="text" name="_gotcha" style="display:none" />

  <label for="name">Name</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <button type="submit">Send Message</button>
</form>`}
              />
            </TabsContent>
            <TabsContent value={"react"}>
              <CodeBlock
                language="jsx"
                filename="ContactForm.jsx"
                code={`import React, { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('https://formlee.com/f/${form.slug}', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="text-emerald-600 font-medium">Thank you! Your message was received.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your inquiry..." required />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`}
              />
            </TabsContent>
            <TabsContent value={"nextjs"}>
              <CodeBlock
                language="tsx"
                filename="app/components/FormleeContact.tsx"
                code={`// app/components/FormleeContact.tsx
'use client';

import { useState } from 'react';

export default function FormleeContact() {
  const [sent, setSent] = useState(false);

  async function handleAction(formData: FormData) {
    const res = await fetch('https://formlee.com/f/${form.slug}', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) setSent(true);
  }

  return (
    <form action={handleAction}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Submit to Formlee</button>
    </form>
  );
}`}
              />
            </TabsContent>
            <TabsContent value={"curl"}>
              <CodeBlock
                language="curl"
                filename="Terminal"
                code={`# Test submission via cURL
curl -X POST "https://formlee.com/f/${form.slug}" \

  -H "Accept: application/json" \

  -d "name=Test User" \

  -d "email=tester@domain.com" \

  -d "message=Hello from terminal!"`}
              />
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value={"submission"}>
          <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between"></div>
        </TabsContent>
        <TabsContent value={"setting"}>
          <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between"></div>
        </TabsContent>
      </Tabs>

      <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between">
        <div>
          <h5 className="font-bold">Test submitting to this form right now</h5>
          <p className="text-xs text-black/60">
            Submit this sample form to verify your endpoint ans watch it appear
            immediately in your inbox.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormDetailsPage;
