import { motion } from 'framer-motion';
import { BookOpen, Database, GitBranch, List, BoxSelect, ShieldCheck, ChevronRight, Sun, Moon } from 'lucide-react';
import { Chapter } from '../data/chapters';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Database,
  GitBranch,
  List,
  BoxSelect,
  ShieldCheck,
};

interface SidebarProps {
  chapters: Chapter[];
  activeChapterId: string;
  onSelect: (id: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Sidebar({ chapters, activeChapterId, onSelect, isDarkMode, toggleTheme }: SidebarProps) {
  return (
    <aside className="w-80 bg-white dark:bg-[#0a0f1a] border-r border-slate-200 dark:border-slate-800/60 flex flex-col h-full shrink-0 transition-colors duration-300">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800/60 bg-gradient-to-b from-slate-50 dark:from-slate-900/50 to-transparent flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center border border-blue-500/20 dark:border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] dark:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">C#</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-slate-400">
              OOP Masterclass
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">Nesne Yönelimli Programlama</p>
        </div>
        <button onClick={toggleTheme} className="hidden md:flex p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {chapters.map((chapter) => {
          const Icon = iconMap[chapter.icon] || BookOpen;
          const isActive = chapter.id === activeChapterId;

          return (
            <button
              key={chapter.id}
              onClick={() => onSelect(chapter.id)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-200 relative group flex items-start gap-3
                ${isActive 
                  ? 'bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.02)] dark:shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]' 
                  : 'hover:bg-slate-50 dark:hover:bg-slate-800/40 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50'
                }
              `}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              )}
              
              <div className={`mt-0.5 p-1.5 rounded-lg transition-colors ${isActive ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}`}>
                <Icon size={18} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className={`text-sm font-semibold truncate transition-colors ${isActive ? 'text-blue-900 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100'}`}>
                  {chapter.title.split(':')[0]}
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 transition-colors ${isActive ? 'text-blue-700/70 dark:text-blue-200/70' : 'text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400'}`}>
                  {chapter.title.split(':')[1]?.trim() || chapter.description}
                </p>
              </div>

              <ChevronRight 
                size={16} 
                className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${isActive ? 'text-blue-500 dark:text-blue-400 opacity-100 translate-x-0' : 'text-slate-400 dark:text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} 
              />
            </button>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-slate-200 dark:border-slate-800/60 text-center">
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">v1.0.0</p>
      </div>
    </aside>
  );
}
