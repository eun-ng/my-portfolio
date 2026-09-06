export interface ProjectTypeConfig {
  icon: string;
  label: string;
}

export const PROJECT_TYPE_CONFIG: Record<string, ProjectTypeConfig> = {
  Company: {
    icon: '🏢',
    label: 'Company',
  },
  'Team Project': {
    icon: '👥',
    label: 'Team Project',
  },
  'Toy Project': {
    icon: '🚀',
    label: 'Toy Project',
  },
};

export const getProjectTypeInfo = (
  projectType?: string[]
): ProjectTypeConfig | null => {
  if (!projectType || projectType.length === 0) {
    return null;
  }

  const firstType = projectType[0];
  return PROJECT_TYPE_CONFIG[firstType] || null;
};
