"use client"
import React, { useState } from 'react';
// import { useApp } from '../../context/AppContext';
import {
    FileText,
    Inbox,
    ArrowUpRight,
    Plus,
    Copy,
    Check,
    TrendingUp,
    Clock,
    Sparkles,
    ShieldCheck,
    CheckCircle2,
    ExternalLink,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export const OverviewView: React.FC= () => {
    // const { user, forms, submission, navigate, addToast } = useApp();
    const [ copiedID, setCopiedID] = useState<string | null >(null);

    // const totalsubmission = submissions.length + 1240; // realistic aggregate
    // const activeforms = forms.filter((f) => f.status === 'active').length;
    // const submissionsThisMonth = user.submissionsUsedThisMonth;
    // const recentSubmissions = submissions.slice(0, 5);

    const handleCopyEnpoint = (endpointId: string) => {
        const url =`https://formlee.com/f/${endpointId}`;
        navigator.clipboard.writeText(url);
        setCopiedID(endpointId);
        // addToast(`Endpoint URL coiped to clipboard!`):
        setTimeout(() => setCopiedID(null), 2000);
    };
    
    return (
        <div className="space-y-8 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-light">
            Good morning, User.
        </h1>
        <p className="text-sm sm:text-sm text-zinc-500 mt-1">
            Here's What's happening with your forms today.
        </p>
        </div>

        <div className="flex items-center space-x-3">
         <button
         className="inline-flex items-center space-x-1.5 bg-white hover:bg-zinc-50 border border-zinc-200/90 text-zinc-800 text-xs font-semibold px-3.5 py-2 rounded-xl shadows-2xs transition-colors"
         >
            <Link href={'/dashboard/froms'}>
                <span>All Forms</span>
            </Link>
        </button>
        <button
        className="inline-flex- items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold px.3.5 py-2 rounded-xl shadows-xs transition-colors"
        >
            <Link href={'docs'}>
            <span>View Docs</span>
            </Link>
            <ExternalLink className="w-3.5,h-3.5" />
        </button>
        </div> 
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs">
                <div className="flex items-Center justify-between text-zinc-500 mb-2">
                    <span className="text-xs">Total Submissions</span>
                    <Inbox className="w-4 h-4 text-zinc-400" />            
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-mono">
                    23
                </div>
                <span className="text-[11px] text-emerald-600 font-medium mt-1 inline-flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+14% vs last week</span>
                </span>`
            </div>

            <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadow-xs">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
                <span className="text-xs font-medium"></span>
                <FileText className="w-4 h-4 text-zinc-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-zinc-900 font-mono">
                {/* {activeforms} */}
                24
            </div>
            <span className="[11px] text-zinc-500 mt-1 block">
                12 total endpoints
            </span>
            </div>
        
        <div className="p-5 bg-white rounded-2xl border border-zinc-200/80 shadows-xs">
        <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-medium">This Month</span>
            <Clock className="w-4 h-4 text-zinc-400" />
        </div>
        </div>
        </div>
        </div>
    )
}


