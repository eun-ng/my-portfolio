'use client';
import { NAVIGATION_SECTIONS, type SectionId } from '@/constants/navigation';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

const scrollToSection = (sectionId: SectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  if (sectionId === 'intro') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const ScrollSpyNav = () => {
  const activeSection = useScrollSpy(
    NAVIGATION_SECTIONS.map((section) => section.id)
  );

  const getButtonClassName = (isActive: boolean) =>
    cn(
      'group relative flex items-center text-sm px-4 py-2 w-full cursor-pointer transition-all duration-300 rounded-lg',
      'hover-glow metallic-border',
      isActive
        ? 'bg-gradient-to-r from-primary/20 to-accent/10 border-primary text-foreground scale-105 shadow-lg shadow-primary/20'
        : 'text-muted-foreground lg:hover:text-foreground lg:hover:scale-102'
    );

  const getIndicatorClassName = (isActive: boolean) =>
    cn(
      'w-2 h-2 rounded-full mr-3 transition-all duration-300',
      isActive
        ? 'bg-primary shadow-lg shadow-primary/50 animate-pulse'
        : 'bg-muted-foreground/40 lg:group-hover:bg-muted-foreground'
    );

  return (
    <nav className="hidden lg:block max-w-[200px]">
      <span className="sr-only">페이지 네비게이션</span>
      <ul className="flex flex-col gap-4">
        {NAVIGATION_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={getButtonClassName(isActive)}
                aria-current={isActive ? 'page' : undefined}
                type="button"
              >
                <div className={getIndicatorClassName(isActive)} />
                <span className="font-medium tracking-wide">
                  {section.label}
                </span>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg animate-pulse" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
