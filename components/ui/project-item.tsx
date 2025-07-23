import { CardDescription, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { NotionPropertiesProps } from '@/lib/notion';
import { ProjectTypeBadge } from '@/components/ui/project-type-badge';
import { StackBadges } from '@/components/ui/stack-badges';
import { ProjectContent } from '@/components/ui/project-content';

interface ProjectItemProps {
  project: NotionPropertiesProps;
  index: number;
  isDesktop: boolean;
  isHovered: (id: string) => boolean;
}

export const ProjectItem = ({ project, index, isDesktop, isHovered }: ProjectItemProps) => {
  if (isDesktop) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div
          className={`max-w-2xl bg-transparent cursor-pointer transition-all duration-300 rounded-lg ${
            isHovered(project.id)
              ? 'border border-accent shadow-xl shadow-accent/20 bg-accent/5 scale-[1.02]'
              : 'border border-transparent hover:bg-accent/5'
          }`}
        >
          <div className="p-6">
            <div className="flex-1">
              <ProjectContent project={project} index={index} isHovered={isHovered} />
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="bg-transparent">
      <div className="py-6 lg:p-6">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-between items-center hover:text-primary transition-colors group mb-2 -m-2 p-2 rounded">
            <CardTitle className="text-base group-hover:underline group-hover:decoration-primary/30">
              {project.title}
            </CardTitle>
            <ArrowUpRight size={14} />
          </div>
        </a>
        <div className={`flex flex-col ${project.description ? 'gap-1.5' : 'gap-0'} mb-3`}>
          <ProjectTypeBadge projectType={project.projectType} />
          {project.description && <CardDescription>{project.description}</CardDescription>}
        </div>
        <StackBadges stacks={project.stacks} />
      </div>
    </div>
  );
};
