export const NAVIGATION_SECTIONS = [
  { id: 'intro', label: 'ABOUT' },
  { id: 'career', label: 'CAREER' },
  { id: 'projects', label: 'PROJECTS' },
] as const;

export type SectionId = (typeof NAVIGATION_SECTIONS)[number]['id'];
