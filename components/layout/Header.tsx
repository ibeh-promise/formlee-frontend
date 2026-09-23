"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Inbox,
  Workflow,
  Settings,
  BookOpen,
  HelpCircle,
  Plus,
  LogOut,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Code2,
  Bell,
} from "lucide-react";
// import Modal from '@/components/ui/Modal'
import Link from "next/link";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newFormName, setNewFormName] = useState("");
  const [newFormDescription, setNewFormDescription] = useState("");

  const navItems = [
    { label: "Overview", href: "/overview", icon: "LayoutDashboard" },
    {
      label: "Forms",
      href: "dashboard/forms",
      icon: "FileText",
      badge: "forms.length",
    },
    { label: "Submissions", href: "/dashboard/settings", icon: Settings },
    { label: "Integrations", href: "/dashboard/integrations", icon: Workflow },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFormName.trim()) return;
    // const created = createForm(newFormName, newFormDescription);
    setNewFormName("");
    setNewFormDescription("");
    setIsCreateModalOpen(false);
    // navigate(`/dashboard/forms/${created.id}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col md:flex-row text-zinc-900">
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-zinc-200 sticky top-0 z-30">
        <Link href={"/overview"}>
          <div className="flex items-center space-x-2.5 cursor-pointer">
            <div className="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
              <svg
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="4" />
                <path d="m8 12 3 3 5-5" />
              </svg>
            </div>
            <span className="font-bold text-base tracking-tight text-zinc-900"></span>
          </div>
        </Link>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="p-1.5 bg-zinc-900 text-white rounded-lg text-xs flex items-center space-x-1"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-2 text-zinc-600 hover:text-zinc-900 rounded-lg"
          >{mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
        <aside className={`
          fixed md:sticky top-0 z-40 h-screen w-64 bg-white border-r border-zinc-200/80 flex flex-col justify-between shrink-0 transition-transform duration-200
          ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}/>
      </div>
    </div>
  );
}
