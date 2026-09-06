'use client';
import { motion } from 'framer-motion';
import { CareerItem } from '@/components/ui/career-item';
import useHoverCard from '@/hooks/useHoverCard';
import type { CareerInfo } from './career';

const CareerClient = ({ careerInfo }: { careerInfo: CareerInfo[] }) => {
  const {
    handleHoverStart,
    handleHoverEnd,
    isOtherHovered,
    isHovered,
    isDesktop,
  } = useHoverCard();

  return (
    <div className="space-y-4">
      {careerInfo?.map((career: CareerInfo, index: number) => (
        <motion.div
          key={career.id}
          style={{ opacity: isOtherHovered(career.id) ? 0.3 : 1 }}
          onMouseEnter={() => handleHoverStart(career.id)}
          onMouseLeave={handleHoverEnd}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CareerItem
            career={career}
            isDesktop={isDesktop}
            isHovered={isHovered}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CareerClient;
