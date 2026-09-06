'use client';
import { NAVIGATION_SECTIONS, type SectionId } from '@/constants/navigation';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

const scrollToSection = (sectionId: SectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  if (sectionId === 'intro') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const ScrollSpyNav = () => {
  const activeSection = useScrollSpy(
    NAVIGATION_SECTIONS.map((section) => section.id)
  );

  const getButtonClassName = (isActive: boolean) =>
    cn(
      'flex items-center gap-3 text-sm py-2.5 pl-4 w-full cursor-pointer transition-all duration-200 border-l-2 rounded-r-sm',
      isActive
        ? 'border-primary text-foreground font-medium'
        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
    );

  const getDotClassName = (isActive: boolean) =>
    cn(
      'w-1.5 h-1.5 rounded-full transition-all duration-200 shrink-0',
      isActive ? 'bg-primary scale-110' : 'bg-muted-foreground/40'
    );

  return (
    <nav className="hidden lg:block">
      <span className="sr-only">페이지 네비게이션</span>
      <ul className="flex flex-col gap-1">
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
                <div className={getDotClassName(isActive)} />
                <span className="tracking-wide">{section.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
