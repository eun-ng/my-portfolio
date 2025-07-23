'use client';
import * as motion from 'motion/react-client';
import useHoverCard from '@/app/hooks/useHoverCard';
import { CareerItem } from '@/components/ui/career-item';
import { CareerInfo } from './career';

const CareerClient = ({ careerInfo }: { careerInfo: CareerInfo[] }) => {
  const { handleHoverStart, handleHoverEnd, isOtherHovered, isHovered, isDesktop } = useHoverCard();

  return (
    <div className="space-y-6">
      {careerInfo?.map((career: CareerInfo, index: number) => (
        <motion.div
          key={career.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isOtherHovered(career.id) ? 0.2 : 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
            opacity: { duration: 0.3 },
          }}
          onHoverStart={() => handleHoverStart(career.id)}
          onHoverEnd={handleHoverEnd}
        >
          <CareerItem career={career} isDesktop={isDesktop} isHovered={isHovered} />
        </motion.div>
      ))}
    </div>
  );
};

export default CareerClient;
