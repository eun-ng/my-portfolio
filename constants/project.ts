
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
  'Team Project': {
    icon: '👥',
    label: 'Team Project',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
  },
  'Toy Project': {
    icon: '🚀',
    label: 'Toy Project',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
  },
};

export const getProjectTypeInfo = (projectType?: string[]): ProjectTypeConfig | null => {
  if (!projectType || projectType.length === 0) {
    return null;
  }

  const firstType = projectType[0];
  return PROJECT_TYPE_CONFIG[firstType] || null;
};
