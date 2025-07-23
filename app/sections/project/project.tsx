import { NotionPropertiesProps } from '@/lib/notion';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ProjectClient from './project-client';

const ProjectSkeleton = () => (
  <div className="space-y-6">
    {[1, 2, 3].map((index) => (
      <div key={index} className="max-w-2xl">
        <div className="hidden lg:block">
          <div className="border border-transparent rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>
                <Skeleton className="h-4 w-64" />
              </div>
              <Skeleton className="h-4 w-4" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[1, 2, 3, 4].map((badgeIndex) => (
                <Skeleton key={badgeIndex} className="h-6 w-16 rounded-md" />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col gap-1.5 mb-3">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-3 w-48" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[1, 2, 3, 4].map((badgeIndex) => (
                <Skeleton key={badgeIndex} className="h-6 w-12 rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

interface ProjectSectionProps {
  projects?: NotionPropertiesProps[];
}

const ProjectSection = ({ projects: initialProjects }: ProjectSectionProps) => {
  return (
    <section id="projects" className="grid">
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectClient projects={initialProjects || []} />
      </Suspense>
    </section>
  );
};

export default ProjectSection;
