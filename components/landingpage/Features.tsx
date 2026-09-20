"use client"

import { Code2, CornerUpRight, Inbox, Link2, Mail, ShieldCheck, UploadCloud, Webhook } from "lucide-react";

export default function Features () {
    const features = [
        {
            title: 'Form Endpoints',
      description: 'Create unique endpoints for any contact form, lead capture, or survey in seconds.',
      icon: Link2,
        },
        {
            title: 'Submission Management',
      description: 'View, filter, search, and export all your incoming form submissions from one clean inbox.',
      icon: Inbox,
        },
        {
            title: 'Email Notifications',
      description: 'Receive instant notifications in your inbox whenever someone submits your form.',
      icon: Mail,
        },
        {
            title: 'Spam Protection',
      description: 'Built-in Honeypot fields, IP rate limiting, and intelligent filtering keep bots away.',
      icon: ShieldCheck,
        },
        {
            title: 'File Uploads',
      description: 'Collect resumes, screenshots, or attachments directly through your HTML forms.',
      icon: UploadCloud,
        },
        {
            title: 'Webhooks',
      description: 'Forward submissions in real time to your own API endpoints, Slack, Discord, or Zapier.',
      icon: Webhook,
        },
        {
            title: 'Custom Redirects',
      description: 'Control where users are directed after submitting, with support for AJAX / JSON responses.',
      icon: CornerUpRight,
        },
        {
            title: 'Developer Friendly',
      description: 'Simple REST APIs, typed SDKs, and straightforward documentation you can read in minutes.',
      icon: Code2,
        }
    ]
    return (
        <section className="py-20 border-t border-zinc-200/60 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need. Nothing you don't.</h2>
                    <p className="text-lg text-gray-600">
                        Formlee is intentionally designed to be lightweight, reliable, and straightforward.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/70 hover:border-zinc-300 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center mb-4 border border-zinc-200/60">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
                </div>
            </div>
        </section>
    )
}