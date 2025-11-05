import React, { useEffect, useState } from 'react';
import { Sun, Moon, Bell } from 'lucide-react';
import Hero3D from './components/Hero3D';
import AuthPanel from './components/AuthPanel';
import DashboardOverview from './components/DashboardOverview';
import GamificationPanel from './components/GamificationPanel';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored || 'dark';
    setTheme(initial);
    if (initial === 'dark') document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-[#05060a] dark:via-[#070b12] dark:to-[#05060a] text-slate-900 dark:text-white selection:bg-emerald-500/40 selection:text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/40 dark:bg-black/30 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-400 shadow-lg" />
            <div className="leading-tight">
              <p className="font-semibold text-slate-900 dark:text-white">Smart Loan Tracker</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-300/70">Futuristic 3D Fintech</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex p-2 rounded-xl bg-white/60 dark:bg-white/10 border border-white/20">
              <Bell className="h-4 w-4 text-slate-600 dark:text-slate-300" />
            </button>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-white/10 border border-white/20"
            >
              {theme === 'dark' ? (
                <div className="flex items-center gap-2 text-slate-200"><Sun className="h-4 w-4" /><span className="text-xs">Light</span></div>
              ) : (
                <div className="flex items-center gap-2 text-slate-700"><Moon className="h-4 w-4" /><span className="text-xs">Dark</span></div>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 md:py-10 space-y-6 md:space-y-8">
        <Hero3D />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <AuthPanel />
          <DashboardOverview />
        </div>

        <GamificationPanel />

        <footer className="text-center text-xs text-slate-500 dark:text-slate-400 pt-4 pb-10">
          © {new Date().getFullYear()} Smart Loan Tracker · Designed for transparency and trust
        </footer>
      </main>
    </div>
  );
}

export default App;
