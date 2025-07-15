import { SOCIAL_ICONS } from './constants/icons';
import { IntroSection } from './sections/intro';
import ProjectSection from './sections/project/project';
import CareerSection from './sections/career/career';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background text-foreground px-12">
      <div className="max-h-screen flex flex-col justify-between items-center lg:items-start py-16 lg:sticky lg:top-0 lg:py-40">
        <div className="flex flex-col gap-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl metallic-text">남궁은</h1>
          <h2 className="text-lg lg:text-xl">Front End Developer</h2>
        </div>
        <div className="flex flex-row gap-4">
          {SOCIAL_ICONS.map((item) => {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-glow metallic-border p-2 rounded-lg cursor-pointer inline-block"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center py-16 lg:gap-24 lg:py-40">
        <IntroSection />
        <CareerSection />
        <ProjectSection />
      </div>
    </div>
  );
}
