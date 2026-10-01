"use client";
import { useState } from "react";
import {
    Mail,
    Webhook,
    MessageSquare,
    Bot,
    Zap,
    FileSpreadsheet,
    Check,
    Settings,
    Send,
    ExternalLink,
    ShieldAlert
} from 'lucide-react';
import { Badge } from '@/components/ui/Badges';
import { Modal } from "@/components/ui/Modal";


export default function(){
    return (
        <div className="p-5 space-y-6 animate-in fade-in duration-200">
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-light">Integrations</h1>
                <p className="text-zinc-500 text-sm">Automatically Forward form submissions to your database, chats channels and APIs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 hover:border-zinc-300 shadow-xs flex flex-col justify-between transition-all">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center border border-zinc-200/70">
                                <Mail className="w-5 h-5" />
                            </div>
                            <Badge variant="success" size="sm">
                                Enabled
                            </Badge>
                        </div>

                        <h3 className="text-base font-bold text-zinc-950 mb-1">Webhook URL Destination</h3>
                        <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                            We send a POST request with HMAC sha256 signature in the <code className="font-mono">X-Formlee-Signature</code> header.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                     <span className="text-[11px] text-zinc-400 truncate max-w-[140px]">
                        Active 
                     </span>
                     <button
                     className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 transitions-color cursor-pointer"
                     ></button>

                    </div>
                </div>
            </div>
        </div> 
    ) 
}