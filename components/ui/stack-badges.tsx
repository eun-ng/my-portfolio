import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface StackBadgesProps {
  stacks?: string[];
  showAnimation?: boolean;
  animationDelay?: number;
}

export const StackBadges = ({
  stacks,
  showAnimation = false,
  animationDelay = 0,
}: StackBadgesProps) => {
  if (!stacks || stacks.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {stacks.map((stack, index) => (
        <motion.div
          key={stack}
          initial={showAnimation ? { opacity: 0, scale: 0.8, y: 8 } : false}
          whileInView={showAnimation ? { opacity: 1, scale: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={
            showAnimation
              ? {
                  delay: animationDelay + index * 0.05,
                  duration: 0.3,
                  ease: 'easeOut',
                }
              : {}
          }
        >
          <Badge
            variant="outline"
            className="text-xs text-slate-600 dark:text-slate-300 bg-white/20 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-sm px-2 py-0.5 rounded-md font-medium"
          >
            {stack}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
};
