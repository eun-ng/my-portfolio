'use client';
import * as motion from 'motion/react-client';
import useHoverCard from '@/app/hooks/useHoverCard';
import { CareerInfo } from './career';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const CareerClient = ({ careerInfo }: { careerInfo: CareerInfo[] }) => {
  const { handleHoverStart, handleHoverEnd, isOtherHovered, isHovered, isDesktop } = useHoverCard();

  return (
    <>
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
          {isDesktop ? (
            <a href={career.url} target="_blank" rel="noopener noreferrer">
              <Card
                className={`max-w-2xl bg-transparent cursor-pointer transition-all duration-300 ${
                  isHovered(career.id) ? 'border-accent shadow-xl shadow-accent/20' : 'border-transparent'
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-xl">{career.company}</CardTitle>
                      <p className="text-sm text-muted-foreground">{`${career.startDate} - ${career.endDate}`}</p>
                    </div>
                    <motion.div
                      animate={{
                        y: isHovered(career.id) ? -6 : 0,
                        opacity: isHovered(career.id) ? 1 : 0.5,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeOut',
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </div>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ) : (
            <Card className="max-w-2xl bg-transparent border-transparent">
              <CardHeader className="pb-4">
                <a href={career.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-between items-center hover:text-primary transition-colors group">
                    <CardTitle className="text-lg lg:text-xl group-hover:underline group-hover:decoration-primary/30">
                      {career.company}
                    </CardTitle>
                    <ArrowUpRight size={16} />
                  </div>
                </a>
                <p className="text-sm text-muted-foreground mt-2">{`${career.startDate} - ${career.endDate}`}</p>
                <CardDescription className="mt-2 text-sm">{career.description}</CardDescription>
              </CardHeader>
            </Card>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default CareerClient;
