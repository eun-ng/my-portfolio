import * as motion from 'motion/react-client';
import { Badge } from '@/components/ui/badge';
import { StackItem } from '@/lib/types/stack';

interface StackBadgesProps {
  stacks?: StackItem[];
  showAnimation?: boolean;
  animationDelay?: number;
}

export const StackBadges = ({ stacks, showAnimation = false, animationDelay = 0 }: StackBadgesProps) => {
  if (!stacks || stacks.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {stacks.map((stack, index) => (
        <motion.div
          key={stack.id}
          initial={showAnimation ? { opacity: 0, scale: 0.8, y: 10 } : false}
          animate={showAnimation ? { opacity: 1, scale: 1, y: 0 } : {}}
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
            className="text-xs text-accent bg-accent/10 border border-accent/30 px-1.5 py-0.5 rounded-md"
          >
            {stack.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
};
