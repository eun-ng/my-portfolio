import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/lib/projects';
import { ProjectTypeBadge } from '@/components/ui/project-type-badge';
import { StackBadges } from '@/components/ui/stack-badges';
import { ProjectContent } from '@/components/ui/project-content';

interface ProjectItemProps {
  project: Project;
  index: number;
  isDesktop: boolean;
  isHovered: (id: string) => boolean;
}

export const ProjectItem = ({ project, index, isDesktop, isHovered }: ProjectItemProps) => {
  if (isDesktop) {
    return (
      <Link href={`/projects/${project.id}`}>
        <Card
          className={`max-w-2xl bg-transparent cursor-pointer transition-all duration-300 border-0 shadow-none ${
            isHovered(project.id)
              ? 'border border-accent shadow-xl shadow-accent/20 bg-accent/5 scale-[1.02]'
              : 'border border-transparent hover:bg-accent/5'
          }`}
        >
          <CardHeader>
            <ProjectContent project={project} index={index} isHovered={isHovered} />
          </CardHeader>
        </Card>
      </Link>
    );
  }

  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader className="pb-4">
        <Link href={`/projects/${project.id}`}>
          <div className="flex justify-between items-center hover:text-primary transition-colors group mb-2 -m-2 p-2 rounded">
            <CardTitle className="text-lg lg:text-xl group-hover:underline group-hover:decoration-primary/30">
              {project.title}
            </CardTitle>
            <ArrowUpRight size={16} />
          </div>
        </Link>
        <div className={`flex flex-col ${project.description ? 'gap-1.5' : 'gap-0'} mb-3`}>
          <ProjectTypeBadge projectType={project.projectType} />
          {project.description && <CardDescription>{project.description}</CardDescription>}
        </div>
        <StackBadges stacks={project.stacks} />
      </CardHeader>
    </Card>
  );
};
