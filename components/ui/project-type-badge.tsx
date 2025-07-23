import { Badge } from '@/components/ui/badge';
import { getProjectTypeInfo } from '@/lib/constants/project';
import { StackItem } from '@/lib/types/stack';

interface ProjectTypeBadgeProps {
  projectType?: StackItem[];
}

export const ProjectTypeBadge = ({ projectType }: ProjectTypeBadgeProps) => {
  const typeInfo = getProjectTypeInfo(projectType);

  if (!typeInfo) {
    return null;
  }

  return (
    <Badge
      variant="outline"
      className={`text-xs ${typeInfo.textColor} ${typeInfo.bgColor} border ${typeInfo.borderColor} px-2 py-0.5`}
    >
      {typeInfo.icon} {typeInfo.label}
    </Badge>
  );
};
