"use client";
import Header from "@/components/adminLayout/Header";
import Sidebar from "@/components/adminLayout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Sidebar />
      <div className="ml-64 min-h-screen">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
