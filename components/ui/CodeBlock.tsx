"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "html",
  filename,
  showLineNumbers,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };
  return (
    <div className="relative group rounded-xl overflow-hidden border border-zinc-800 bg-[#0c0d0e] font-['JetBrains_Mono',monospace] text-xs sm:text-sm text-zinc-300 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141517] border-b border-zinc-800/80 text-zinc-400">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
        </div>
        {filename ? (
          <span className="text-sm font-medium">{filename}</span>
        ) : (
          <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
            {language}
          </span>
        )}
      </div>
      <button
        id={`copy-code-${language}`}
        onClick={handleCopy}
        className="inline-flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/50 px-2.5 py-1 rounded-md transition-all active:scale-95"
        title="Copy code"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>

      <div className="p-4 overflow-x-auto selection:bg-zinc-700 selection:text-white leading-relaxed">
        <code>
          <pre className="">{code}</pre>
        </code>
      </div>
    </div>
  );
}
