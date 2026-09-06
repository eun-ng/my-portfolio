'use client';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectContent } from '@/components/ui/project-content';
import { ProjectTypeBadge } from '@/components/ui/project-type-badge';
import { StackBadges } from '@/components/ui/stack-badges';
import type { Project } from '@/lib/projects';
import { cn } from '@/lib/utils';

interface ProjectItemProps {
  project: Project;
  index: number;
  isDesktop: boolean;
  isHovered: (id: string) => boolean;
}

export const ProjectItem = ({
  project,
  index,
  isDesktop,
  isHovered,
}: ProjectItemProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-10, 10]);

  const glareX = useTransform(mouseXSpring, [0, 1], [0, 100]);
  const glareY = useTransform(mouseYSpring, [0, 1], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(800px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isDesktop) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const isHovering = isDesktop && isHovered(project.id);

  const glassCardClasses = cn(
    'group max-w-2xl cursor-pointer transition-colors duration-500 rounded-[2rem] overflow-hidden',
    'text-card-foreground flex flex-col p-6 lg:p-8',
    'bg-gradient-to-b from-white/[0.15] to-transparent dark:from-white/[0.05] dark:to-transparent',
    'backdrop-blur-[24px] backdrop-saturate-[2.5] backdrop-brightness-[1.05] dark:backdrop-brightness-100',
    'border border-white/20 dark:border-white/10',
    'relative',
    isHovering
      ? [
          'shadow-[inset_0_1px_1px_rgba(255,255,255,1),_inset_0_8px_20px_rgba(255,255,255,0.4),_0_16px_48px_rgba(0,0,0,0.12)]',
          'dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_inset_0_8px_20px_rgba(255,255,255,0.15),_0_16px_48px_rgba(0,0,0,0.5)]',
          'border-white/30 dark:border-white/20',
        ]
      : [
          'shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_inset_0_4px_16px_rgba(255,255,255,0.3),_0_8px_32px_rgba(0,0,0,0.08)]',
          'dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_inset_0_4px_16px_rgba(255,255,255,0.08),_0_8px_32px_rgba(0,0,0,0.4)]',
        ]
  );

  const cardContent = (
    <div style={{ perspective: 2000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          scale: isHovering ? 1.01 : 1,
          y: isHovering ? -4 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        style={{
          rotateX: isDesktop ? rotateX : 0,
          rotateY: isDesktop ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className={glassCardClasses}
      >
        {/* Soft, Non-intrusive Liquid Glare */}
        {isDesktop && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 mix-blend-soft-light"
            style={{
              background: glareBackground,
            }}
          />
        )}

        <div style={{ transform: isDesktop ? 'translateZ(30px)' : 'none' }}>
          {isDesktop ? (
            <CardHeader className="relative z-10">
              <ProjectContent
                project={project}
                index={index}
                isHovered={isHovered}
              />
            </CardHeader>
          ) : (
            <CardHeader className="relative z-10 pb-4">
              <div className="flex justify-between items-center hover:text-primary transition-colors group mb-2 -m-2 p-2 rounded">
                <CardTitle className="text-lg lg:text-xl group-hover:underline group-hover:decoration-primary/30">
                  {project.title}
                </CardTitle>
                <ArrowUpRight size={16} className="text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <ProjectTypeBadge projectType={project.projectType} />
              </div>
              {project.description && (
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              )}
              <StackBadges stacks={project.stacks} />
            </CardHeader>
          )}
        </div>
      </motion.div>
    </div>
  );

  return (
    <Link href={`/projects/${project.id}`} className="block">
      {cardContent}
    </Link>
  );
};
