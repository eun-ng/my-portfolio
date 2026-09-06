import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  className?: string;
}

const SectionHeader = ({ label, className }: SectionHeaderProps) => {
  return (
    <div className={cn('flex items-center gap-3 mb-8', className)}>
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
};

export default SectionHeader;
