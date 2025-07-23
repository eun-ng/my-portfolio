import { NotionPropertiesProps } from '@/lib/notion';
import ProjectClient from './project-client';

interface ProjectSectionProps {
  projects?: NotionPropertiesProps[];
}

const ProjectSection = ({ projects: initialProjects }: ProjectSectionProps) => {
  return (
    <section id="projects" className="grid">
      <ProjectClient projects={initialProjects || []} />
    </section>
  );
};

export default ProjectSection;
