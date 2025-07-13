import { getProjects, NotionProject } from '@/lib/notion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon } from 'lucide-react';

interface ProjectSectionProps {
  projects?: NotionProject[];
}

const ProjectSection = async ({ projects: initialProjects }: ProjectSectionProps) => {
  const projects = initialProjects || (await getProjects());

  console.debug('debug ::: ', projects);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6">
          {projects?.map((project) => (
            <Card key={project.id} className="cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <ExternalLinkIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.status && (
                  <Badge variant={project.status === 'Completed' ? 'default' : 'outline'} className="mb-2">
                    {project.status}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
