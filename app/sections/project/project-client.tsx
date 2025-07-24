'use client';
import * as motion from 'motion/react-client';
import { NotionPropertiesProps } from '@/lib/notion';
import useHoverCard from '@/app/hooks/useHoverCard';
import { ProjectItem } from '@/components/ui/project-item';

interface ProjectClientProps {
  projects: NotionPropertiesProps[];
}

const ProjectClient = ({ projects }: ProjectClientProps) => {
  const { handleHoverStart, handleHoverEnd, isOtherHovered, isHovered, isDesktop } = useHoverCard();

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        <div className="max-w-md mx-auto space-y-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-muted/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-medium">프로젝트를 불러올 수 없습니다</p>
            <p className="text-sm mt-1">네트워크 연결을 확인하고 잠시 후 다시 시도해주세요</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {projects?.map((project: NotionPropertiesProps, index: number) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isOtherHovered(project.id) ? 0.2 : 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
            opacity: { duration: 0.3 },
          }}
          onHoverStart={() => handleHoverStart(project.id)}
          onHoverEnd={handleHoverEnd}
        >
          <ProjectItem project={project} index={index} isDesktop={isDesktop} isHovered={isHovered} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectClient;
