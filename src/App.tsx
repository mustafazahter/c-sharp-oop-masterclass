import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChapterContent from './components/ChapterContent';
import { chapters } from './data/chapters';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(chapters[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const activeChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#050810] text-slate-900 dark:text-slate-50 font-sans overflow-hidden selection:bg-blue-500/30 transition-colors duration-300">
      
      {/* Mobile Header */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-16 bg-white dark:bg-[#0a0f1a] border-b border-slate-200 dark:border-slate-800/60 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center border border-blue-500/20 dark:border-blue-500/30">
            <span className="text-blue-600 dark:text-blue-400 font-bold font-mono text-sm">C#</span>
          </div>
          <span className="font-bold text-slate-900 dark:text-white">OOP Masterclass</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-slate-600 dark:text-slate-400">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600 dark:text-slate-400">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:static inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar 
          chapters={chapters} 
          activeChapterId={activeChapterId} 
          onSelect={(id) => {
            setActiveChapterId(id);
            setIsSidebarOpen(false);
          }} 
          isDarkMode={isDarkMode}
          toggleTheme={() => setIsDarkMode(!isDarkMode)}
        />
      </div>

      <main className="flex-1 overflow-y-auto relative scroll-smooth pt-16 md:pt-0">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/5 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <ChapterContent chapter={activeChapter} />
        </div>
      </main>
    </div>
  );
}
