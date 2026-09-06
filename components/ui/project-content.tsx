import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { ProjectTypeBadge } from '@/components/ui/project-type-badge';
import { StackBadges } from '@/components/ui/stack-badges';
import type { Project } from '@/lib/projects';

interface ProjectContentProps {
  project: Project;
  index: number;
  isHovered: (id: string) => boolean;
}

export const ProjectContent = ({
  project,
  index,
  isHovered,
}: ProjectContentProps) => {
  return (
    <>
      <div className="flex justify-between items-start">
        <div
          className={`flex flex-col ${project.description ? 'gap-2' : 'gap-0'}`}
        >
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <ProjectTypeBadge projectType={project.projectType} />
          </div>
          {project.description && (
            <div>
              <CardDescription>{project.description}</CardDescription>
            </div>
          )}
        </div>
        <motion.div
          animate={{
            y: isHovered(project.id) ? -4 : 0,
            opacity: isHovered(project.id) ? 1 : 0.4,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <ArrowUpRight size={16} className="text-muted-foreground" />
        </motion.div>
      </div>
      <div className="pt-3">
        <StackBadges stacks={project.stacks} showAnimation={false} />
      </div>
    </>
  );
};
