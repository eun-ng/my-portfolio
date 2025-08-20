import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
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
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <ProjectTypeBadge projectType={project.projectType} />
          </motion.div>
          {project.description && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1 + 0.1,
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              <CardDescription>{project.description}</CardDescription>
            </motion.div>
          )}
        </div>
        <motion.div
          animate={{
            y: isHovered(project.id) ? -6 : 0,
            opacity: isHovered(project.id) ? 1 : 0.5,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <FiArrowUpRight size={16} />
        </motion.div>
      </div>
      <div className="pt-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1 + 0.3,
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          <StackBadges
            stacks={project.stacks}
            showAnimation={true}
            animationDelay={index * 0.1 + 0.3}
          />
        </motion.div>
      </div>
    </>
  );
};
