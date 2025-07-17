import { SectionId } from '@/app/constants/navigation';

export const scrollToSection = (sectionId: SectionId) => {
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
