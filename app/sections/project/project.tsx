import { getProjects, NotionPropertiesProps } from '@/lib/notion';
import ProjectClient from './project-client';

interface ProjectSectionProps {
  projects?: NotionPropertiesProps[];
}

const ProjectSection = async ({ projects: initialProjects }: ProjectSectionProps) => {
  const projects = initialProjects || (await getProjects());

  console.debug('projects :::', projects);

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2 px-6">
        <div className="w-1 h-6 bg-accent rounded-full"></div>
        <h1 className="text-2xl font-medium text-foreground">Projects</h1>
      </div>
      <ProjectClient projects={projects as NotionPropertiesProps[]} />
    </div>
  );
};

export default ProjectSection;
