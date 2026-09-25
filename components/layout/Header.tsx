"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newFormName, setNewFormName] = useState("");
  const [newFormDescription, setNewFormDescription] = useState("");

  return (

    <header className="sticky top-0 z-40 h-[65px] bg-white border-b">
      <div className="h-full flex items-center justify-between px-8">
        
        <div className="flex items-center space-x-2 text-xs text-zinc-500 font-medium">
          <span className="text-zinc-600">
            Formlee
          </span>

          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />

          <span className="text-zinc-900 font-semibold capitalize">
            overview
          </span>
        </div>

        <div className="flex items-center space-x-3">

          <div className="flex items-center space-x-2 px-2.5 py-1.5 bg-zinc-100/80 border border-zinc-200 rounded-md text-[11px] font-mono text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

            <span>Endpoint:</span>

            <span className="text-zinc-900 font-medium">
              https://formlee.com/f/*
            </span>
          </div>

          <Button className={"bg-zinc-900 hover:bg-zinc-800"}>
            <Plus className="w-3.5 h-3.5" />
            <span>New Form</span>
          
          </Button>
        </div>
      </div>
    </header>
  );
}