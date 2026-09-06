import SectionHeader from '@/app/components/SectionHeader';
import type { Project } from '@/lib/projects';
import ProjectClient from './project-client';

interface ProjectSectionProps {
  projects?: Project[];
}

const ProjectSection = ({ projects: initialProjects }: ProjectSectionProps) => {
  return (
    <section id="projects" className="grid">
      <SectionHeader label="Projects" />
      <ProjectClient projects={initialProjects || []} />
    </section>
  );
};

export default ProjectSection;
