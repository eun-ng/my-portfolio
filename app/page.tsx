import { Suspense } from 'react';
import ProjectSkeleton from '@/components/ui/project-skeleton';
import { SOCIAL_ICONS } from '@/constants/icons';
import { getProjects } from '@/lib/projects';
import HeroInfo from './components/HeroInfo';
import { ScrollSpyNav } from './components/ScrollSpyNav';
import CareerSection from './sections/career/career';
import IntroSection from './sections/intro';
import ProjectSection from './sections/project/project';

const ProjectSectionWrapper = async () => {
  try {
    const projects = await getProjects();
    return <ProjectSection projects={projects} />;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return <ProjectSection projects={[]} />;
  }
};

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 text-foreground lg:grid lg:grid-cols-2 lg:items-start lg:px-12 lg:py-0">
      <div className="flex flex-col items-start lg:justify-between lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:py-24">
        <div className="flex flex-col lg:gap-12 lg:text-left">
          <HeroInfo />
          <ScrollSpyNav />
        </div>
        <div className="mt-8 flex flex-row gap-3">
          {SOCIAL_ICONS.map((item) => {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg inline-flex items-center justify-center cursor-pointer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-start pt-16 gap-16 lg:pt-24 lg:pb-24 lg:gap-24">
        <IntroSection />
        <CareerSection />
        <Suspense fallback={<ProjectSkeleton />}>
          <ProjectSectionWrapper />
        </Suspense>
        <footer className="mt-16 lg:mt-24 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            <span className="text-foreground font-medium">Next.js</span>와{' '}
            <span className="text-foreground font-medium">TypeScript</span>,{' '}
            <span className="text-foreground font-medium">shadcn/ui</span>,{' '}
            <span className="text-foreground font-medium">Tailwind CSS</span>를
            사용해 개발하고{' '}
            <span className="text-foreground font-medium">Vercel</span>을
            사용하여 배포했습니다.
          </p>
        </footer>
      </div>
    </div>
  );
}
