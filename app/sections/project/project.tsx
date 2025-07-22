'use client';
import { getProjects, NotionPropertiesProps } from '@/lib/notion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ProjectClient = dynamic(() => import('./project-client'), {
  ssr: false,
  loading: () => (
    <div className="space-y-6">
      {[1, 2, 3].map((index) => (
        <div key={index} className="max-w-2xl bg-transparent border-transparent animate-pulse">
          <div className="p-4">
            <div className="flex gap-4">
              <div className="w-36 h-24 lg:w-40 lg:h-28 bg-muted rounded flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 bg-muted rounded w-48"></div>
                      <div className="h-5 bg-muted rounded-full w-20"></div>
                    </div>
                    <div className="h-4 bg-muted rounded w-64"></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[1, 2, 3, 4].map((badgeIndex) => (
                    <div key={badgeIndex} className="h-6 bg-muted rounded-full w-16"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
});

interface ProjectSectionProps {
  projects?: NotionPropertiesProps[];
}

const ProjectSection = ({ projects: initialProjects }: ProjectSectionProps) => {
  const [projects, setProjects] = useState<NotionPropertiesProps[]>(initialProjects || []);

  useEffect(() => {
    if (!initialProjects) {
      getProjects().then(setProjects);
    }
  }, [initialProjects]);

  return (
    <section id="projects" className="grid">
      <ProjectClient projects={projects} />
    </section>
  );
};

export default ProjectSection;
