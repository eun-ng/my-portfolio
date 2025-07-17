import { getProjects, NotionPropertiesProps } from '@/lib/notion';
import ProjectClient from './project-client';

interface ProjectSectionProps {
  projects?: NotionPropertiesProps[];
}

const ProjectSection = async ({ projects: initialProjects }: ProjectSectionProps) => {
  const projects = initialProjects || (await getProjects());

  return (
    <div id="projects" className="grid">
      <ProjectClient projects={projects} />
    </div>
  );
};

export default ProjectSection;
