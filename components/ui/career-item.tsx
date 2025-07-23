import * as motion from 'motion/react-client';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { CareerInfo } from '@/app/sections/career/career';

interface CareerItemProps {
  career: CareerInfo;
  isDesktop: boolean;
  isHovered: (id: string) => boolean;
}

export const CareerItem = ({ career, isDesktop, isHovered }: CareerItemProps) => {
  if (isDesktop) {
    return (
      <a href={career.url} target="_blank" rel="noopener noreferrer">
        <Card
          className={`max-w-2xl bg-transparent cursor-pointer transition-all duration-300 ${
            isHovered(career.id)
              ? 'border border-accent shadow-xl shadow-accent/20 bg-accent/5 scale-[1.02]'
              : 'border border-transparent hover:bg-accent/5'
          }`}
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <CardTitle className="text-xl lg:text-2xl">{career.company}</CardTitle>
                <p className="text-sm lg:text-base text-body-text font-medium">{career.jd}</p>
                <p className="text-sm lg:text-base text-muted-foreground">{`${career.startDate} - ${career.endDate}`}</p>
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
            <CardDescription className="lg:text-base">{career.description}</CardDescription>
          </CardHeader>
        </Card>
      </a>
    );
  }

  return (
    <Card className="max-w-2xl bg-transparent border-transparent">
      <CardHeader className="pb-4">
        <a href={career.url} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-between items-center hover:text-primary transition-colors group -m-2 p-2 rounded">
            <div className="flex flex-col">
              <CardTitle className="text-lg lg:text-xl group-hover:underline group-hover:decoration-primary/30">
                {career.company}
              </CardTitle>
              <p className="text-sm text-body-text font-medium">{career.jd}</p>
            </div>
            <ArrowUpRight size={16} />
          </div>
        </a>
        <p className="text-sm text-muted-foreground mt-2">{`${career.startDate} - ${career.endDate}`}</p>
        <CardDescription className="text-sm mt-2">{career.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
