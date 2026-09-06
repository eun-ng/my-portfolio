'use client';
import { motion } from 'framer-motion';

const HeroInfo = () => {
  return (
    <div className="flex flex-col relative">
      <motion.h1
        initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground drop-shadow-sm"
      >
        남궁은
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="mt-2 text-lg lg:text-xl text-primary/80 dark:text-blue-400/90 font-medium"
      >
        Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm"
      >
        복잡한 금융 비즈니스 로직을 안정적으로 구현하고, <br />
        화면 단의 완성도까지 책임지는 개발자입니다.
      </motion.p>
    </div>
  );
};

export default HeroInfo;
