import { SOCIAL_ICONS } from './constants/icons';
import IntroSection from './sections/intro';
import ProjectSection from './sections/project/project';
import CareerSection from './sections/career/career';
import { ScrollSpyNav } from './components/ScrollSpyNav';
import { getProjects } from '@/lib/notion';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 bg-background text-foreground lg:grid lg:grid-cols-2 lg:px-12 lg:py-0">
      <div className="flex flex-col items-start lg:max-h-screen lg:justify-between lg:sticky lg:top-0 lg:py-24">
        <div className="flex flex-col lg:gap-12 lg:text-left">
          <div className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl metallic-text">남궁은</h1>
            <h2 className="mt-2 text-lg lg:text-xl">Front End Developer</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              사용자를 위한 UX와 동료 개발자들을 위한 DX 개선을 지향합니다.
            </p>
          </div>
          <ScrollSpyNav />
        </div>
        <div className="mt-8 flex flex-row gap-4">
          {SOCIAL_ICONS.map((item) => {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" metallic-border p-2 rounded-lg inline-block lg:hover-glow lg:cursor-pointer"
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
        <ProjectSection projects={projects} />
        <footer className="mt-16 lg:mt-24 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            <span className="text-white font-medium">Next.js</span>와{' '}
            <span className="text-white font-medium">TypeScript</span>,{' '}
            <span className="text-white font-medium">shadcn/ui</span>,{' '}
            <span className="text-white font-medium">Tailwind CSS</span>를 사용해 개발하고{' '}
            <span className="text-white font-medium">Vercel</span>을 사용하여 배포했습니다.
          </p>
        </footer>
      </div>
    </div>
  );
}
