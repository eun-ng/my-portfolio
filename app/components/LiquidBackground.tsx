'use client';
import { motion } from 'framer-motion';

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-[#020617] pointer-events-none">
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] lg:w-[50vw] lg:h-[50vw] rounded-full mix-blend-screen dark:mix-blend-lighten opacity-80"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(148, 163, 184, 0.1) 40%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] lg:w-[60vw] lg:h-[60vw] rounded-full mix-blend-screen dark:mix-blend-lighten opacity-80"
        style={{
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(37, 99, 235, 0.1) 40%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] left-[20%] w-[60vw] h-[60vw] lg:w-[40vw] lg:h-[40vw] rounded-full mix-blend-screen dark:mix-blend-lighten opacity-80"
        style={{
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(100, 116, 139, 0.1) 40%, transparent 70%)',
        }}
      />
    </div>
  );
};
