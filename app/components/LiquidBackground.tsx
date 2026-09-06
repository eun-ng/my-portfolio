'use client';
import { motion } from 'framer-motion';

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-[#020617] pointer-events-none">
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 80, 0],
          rotate: [0, 90, 0],
          borderRadius: [
            '40% 60% 70% 30%',
            '60% 40% 30% 70%',
            '40% 60% 70% 30%',
          ],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vh] bg-gradient-to-r from-slate-400/40 to-blue-500/30 dark:from-slate-700/40 dark:to-blue-900/40 blur-[80px] transform-gpu"
        style={{ WebkitBackfaceVisibility: 'hidden' }}
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -80, 0],
          rotate: [0, -90, 0],
          borderRadius: [
            '60% 40% 30% 70%',
            '30% 70% 60% 40%',
            '60% 40% 30% 70%',
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-linear-to-r from-blue-600/30 to-indigo-500/30 dark:from-blue-900/40 dark:to-indigo-900/30 blur-[90px] transform-gpu"
        style={{ WebkitBackfaceVisibility: 'hidden' }}
      />

      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.1, 1],
          borderRadius: [
            '30% 70% 70% 30%',
            '70% 30% 40% 60%',
            '30% 70% 70% 30%',
          ],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vh] bg-gradient-to-tr from-sky-400/30 to-slate-400/30 dark:from-sky-900/30 dark:to-slate-800/40 blur-[70px] transform-gpu"
        style={{ WebkitBackfaceVisibility: 'hidden' }}
      />
    </div>
  );
};
