import { StackItem } from '../types/stack';

export interface ProjectTypeConfig {
  icon: string;
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

export const PROJECT_TYPE_CONFIG: Record<string, ProjectTypeConfig> = {
  Company: {
    icon: '🏢',
    label: 'Company',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
  },
  Team: {
    icon: '👥',
    label: 'Team',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
  },
  Personal: {
    icon: '🚀',
    label: 'Personal',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
  },
};

export const getProjectTypeInfo = (projectType?: StackItem[]): ProjectTypeConfig | null => {
  if (!projectType || projectType.length === 0) {
    return null;
  }

  const hasCompany = projectType.some((t) => t.name === 'Company');
  const hasPersonalOrTeam = projectType.some(
    (t) => t.name === 'Personal' || t.name === 'Toy Project' || t.name === 'Team' || t.name === 'Team Project'
  );

  if (hasCompany) {
    return PROJECT_TYPE_CONFIG.Company;
  }
  if (hasPersonalOrTeam) {
    const hasTeam = projectType.some((t) => t.name === 'Team' || t.name === 'Team Project');
    return hasTeam ? PROJECT_TYPE_CONFIG.Team : PROJECT_TYPE_CONFIG.Personal;
  }

  return null;
};
