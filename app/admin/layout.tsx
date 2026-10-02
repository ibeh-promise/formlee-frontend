"use client"
import Header from "@/components/adminLayout/Header"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-zinc-50">
            <Header />
            <main className="p-6">{children}</main>
        </div>
    )
}