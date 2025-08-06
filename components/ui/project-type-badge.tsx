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
      className={`text-xs ${typeInfo.textColor} ${typeInfo.bgColor} border ${typeInfo.borderColor} px-2 py-0.5 flex-shrink-0 h-fit`}
    >
      {typeInfo.icon} {typeInfo.label}
    </Badge>
  );
};
