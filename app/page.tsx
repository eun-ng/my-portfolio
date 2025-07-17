import { SOCIAL_ICONS } from './constants/icons';
import IntroSection from './sections/intro';
import ProjectSection from './sections/project/project';
import CareerSection from './sections/career/career';
import { ScrollSpyNav } from './components/ScrollSpyNav';

export default function Home() {
  return (
    <div className="max-w-screen-xl min-h-screen bg-background text-foreground px-6 py-12 lg:grid lg:grid-cols-2 lg:px-12 lg:mx-auto lg:py-40">
      <div className="flex flex-col items-start lg:max-h-screen lg:justify-between lg:sticky lg:top-0">
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
      <div className="flex flex-col justify-start pt-16 gap-16 lg:pt-0 lg:gap-24">
        <IntroSection />
        <CareerSection />
        <ProjectSection />
      </div>
    </div>
  );
}
