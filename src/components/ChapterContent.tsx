import { motion } from 'framer-motion';
import { Chapter } from '../data/chapters';
import CodeBlock from './CodeBlock';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ChapterContent({ chapter }: { chapter: Chapter }) {
  return (
    <motion.div
      key={chapter.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-4xl mx-auto p-6 md:p-12 pb-32"
    >
      <header className="mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
          {chapter.title.split(':')[0]}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {chapter.title.split(':')[1]?.trim() || chapter.title}
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          {chapter.description}
        </p>
      </header>

      <div className="space-y-10 md:space-y-12">
        {chapter.sections.map((section, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="scroll-mt-8"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-xs md:text-sm font-bold border border-slate-200 dark:border-slate-700 shrink-0">
                {index + 1}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100">
                {section.title}
              </h2>
            </div>

            <div className="pl-2 md:pl-12">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">
                {section.content}
              </p>

              {section.list && (
                <ul className="space-y-3 mb-6 bg-white dark:bg-slate-900/40 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800/60 shadow-sm dark:shadow-none">
                  {section.list.map((item, i) => {
                    const [boldPart, ...rest] = item.split(':');
                    return (
                      <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[14px] md:text-[15px]">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>
                          {rest.length > 0 ? (
                            <>
                              <strong className="text-slate-900 dark:text-white font-semibold">{boldPart}:</strong>
                              {rest.join(':')}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {section.code && (
                <CodeBlock code={section.code} />
              )}

              {section.important && (
                <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-800 dark:text-amber-200/90">
                  <AlertTriangle className="shrink-0 text-amber-500" size={24} />
                  <div className="text-[14px] md:text-[15px] leading-relaxed">
                    <strong className="block text-amber-700 dark:text-amber-400 font-semibold mb-1">Önemli Not</strong>
                    {section.important}
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
