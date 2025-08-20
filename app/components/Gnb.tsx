'use client';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Gnb = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex justify-end p-4 z-100">
      <button
        className="cursor-pointer p-3 dark:text-gray-200 light:text-gray-800 text-xl w-12 h-12 flex items-center justify-center opacity-100 transition-opacity duration-200"
        onClick={handleChange}
        type="button"
        aria-label="Toggle theme"
      >
        <MdDarkMode className="block dark:hidden" />
        <MdLightMode className="hidden dark:block" />
      </button>
    </div>
  );
};

export default Gnb;
