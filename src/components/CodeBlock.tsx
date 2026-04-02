import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800 my-6 shadow-sm dark:shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-400/80 dark:bg-rose-500/20 border border-rose-400 dark:border-rose-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80 dark:bg-amber-500/20 border border-amber-400 dark:border-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/80 dark:bg-emerald-500/20 border border-emerald-400 dark:border-emerald-500/50"></div>
          </div>
          <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">C#</span>
        </div>
        <button 
          onClick={handleCopy} 
          className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 px-2 py-1 rounded-md border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none"
        >
          {copied ? <><Check size={14} className="text-emerald-500 dark:text-emerald-400" /> Kopyalandı</> : <><Copy size={14} /> Kopyala</>}
        </button>
      </div>
      <pre className="p-4 md:p-5 overflow-x-auto text-[13px] leading-relaxed font-mono text-slate-800 dark:text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
