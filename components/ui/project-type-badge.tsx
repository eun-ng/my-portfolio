import { Badge } from '@/components/ui/badge';
import { getProjectTypeInfo } from '@/constants/project';

interface ProjectTypeBadgeProps {
  projectType?: string[];
}

export const ProjectTypeBadge = ({ projectType }: ProjectTypeBadgeProps) => {
  const typeInfo = getProjectTypeInfo(projectType);

  if (!typeInfo) {
    return null;
  }

  return (
    <Badge
      variant="outline"
      className="text-xs text-primary dark:text-blue-400 bg-white/20 dark:bg-white/5 backdrop-blur-2xl shadow-sm border border-white/50 dark:border-white/10 px-2 py-0.5 shrink-0 h-fit rounded-md"
    >
      {typeInfo.icon} {typeInfo.label}
    </Badge>
  );
};
