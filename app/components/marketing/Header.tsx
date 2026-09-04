"use client";
import React, {useState} from "react"
import { Menu, X, ArrowRight, Layers, Sparkles } from 'lucide-react';
import Link from "next/link";
import {usePathname} from "next/navigation"

export default function Header() {
    const pathname = usePathname();
    return (
     <header className="sticky-top top-0 z-40 w-full border-b border-zinc-200/70 bg-[#FAFAFA]/90 backdrop-blur-md">
        <div className="flex justify-between items-center px-10 py-5">
        <div className="flex justify-between items-center px-10 py-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover:bg-zinc-800 transition-colors">
            <svg
              className="w-4 h-4 text-white"
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
            <span className="text-lg font-bold tracking-tight text-zinc-900 ml-2">
                Formlee
            </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <p className={pathname === "/" ? "text-sm font-bold text-zinc-900" : "text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"} ><Link href="/">Product</Link></p>
                <p className={pathname === "/pricing" ? "text-sm font-bold text-zinc-900" : "text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"} ><Link href="/pricing">Pricing</Link></p>
                <p className={pathname === "/docs" ? "text-sm font-bold text-zinc-900" : "text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"} ><Link href="/docs">Docs</Link></p>
            </div>
            <div className=" justify-around hidden md:flex items-center space-x-4">
                <p className={pathname === "/login" ? "text-sm font-bold text-zinc-900" : "text-sm font-medium text-zinc-700 hover:text-zinc-900 px-3 py-2 transition-colors cursor-pointer"} >
                    <Link href="/login">Log in</Link>
                </p>
                <button className="inline-flex items-center space-x-1.5 text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-xs hover:shadow transition-all active:scale-98 cursor-pointer">
                    <span>Get started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
     </header>
    )
}