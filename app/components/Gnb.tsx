'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Gnb = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex justify-end py-2 px-4 lg:p-4">
      <button
        className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-sm text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:scale-105 active:scale-95 transition-all duration-300"
        onClick={handleChange}
        type="button"
        aria-label="Toggle theme"
      >
        <Moon className="block dark:hidden w-5 h-5" />
        <Sun className="hidden dark:block w-5 h-5" />
      </button>
    </div>
  );
};

export default Gnb;
