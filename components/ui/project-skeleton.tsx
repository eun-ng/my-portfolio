const ProjectSkeleton = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="border border-border/50 rounded-lg p-6 bg-card/50">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="flex gap-2 mt-3">
                  <div className="h-6 bg-muted rounded-full w-16"></div>
                  <div className="h-6 bg-muted rounded-full w-20"></div>
                  <div className="h-6 bg-muted rounded-full w-18"></div>
                </div>
              </div>
              <div className="lg:w-48 space-y-2">
                <div className="h-4 bg-muted rounded w-24"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-muted rounded w-16"></div>
                  <div className="h-8 bg-muted rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
