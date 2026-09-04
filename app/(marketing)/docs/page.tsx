"use client"
import React, { useState } from "react"

export default function docs() {
    const [activeDocSection, setActiveDocSection] = useState<string | null>(null);
    const [testEmail, setTestEmail] = useState("developer@test.io")
    const [testMessage, setTestMessage] = useState("Testing Formlee API endpoint via Docs sandbox")
    const [isSendingText, setIsSendingText] = useState(false)
    const [sandBoxResponse, setSandBoxResponse] = useState<string | null>(null)
    const docSections = [
        {
            group: "Getting Started",
            items: [
                {id: "introduction", title: "Introduction"},
                {id: "quick-start", title: "QuickStart"},
                {id: "html-forms", title: "Html Forms"},
                {id: "react", title: "React"},
                {id: "nextjs", title: "Next.js"},
            ],
        },
        {
            group: "Features",
            items: [
                {id: "submissions", title: "Submissions"},
                {id: "email-notifications", title: "Email Notifications"},
                {id: "file-upload", title: "File Upload"},
                {id: "webhooks", title: "Webhooks"},
                {id: "spam-protection", title: "Spam Protection"},
            ]
        },
        {
            group: "API Reference",
            items: [
                {id: "api-auth", title: "Authentication"},
                {id: "api-endpoints", title: "Endpoints"},
                {id: "api-submissions", title: "Submissions"},
                {id: "api-webhooks", title: "Webhooks"},
            ]
        }
    ]

    const handleRunSandBlox = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

    }
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
            </div>
        </main>
    )
}