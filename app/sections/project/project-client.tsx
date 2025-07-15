'use client';
import * as motion from 'motion/react-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon } from 'lucide-react';
import { NotionPropertiesProps } from '@/lib/notion';
import useHoverCard from '@/app/hooks/useHoverCard';

interface ProjectClientProps {
  projects: NotionPropertiesProps[];
}

const ProjectClient = ({ projects }: ProjectClientProps) => {
  const { handleHoverStart, handleHoverEnd, isOtherHovered, isHovered } = useHoverCard();

  return (
    <>
      {projects?.map((project: NotionPropertiesProps, index: number) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isOtherHovered(project.id) ? 0.2 : 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
            opacity: { duration: 0.3 },
          }}
          onHoverStart={() => handleHoverStart(project.id)}
          onHoverEnd={handleHoverEnd}
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Card
              className={`max-w-2xl bg-transparent cursor-pointer transition-all duration-300 ${
                isHovered(project.id) ? 'border-accent shadow-xl shadow-accent/20' : 'border-transparent'
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <motion.div
                    animate={{
                      y: isHovered(project.id) ? -2 : 0,
                      opacity: isHovered(project.id) ? 1 : 0.5,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeOut',
                    }}
                  >
                    <ExternalLinkIcon size={16} />
                  </motion.div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stacks?.map((stack: { id: string; name: string; color: string }, stackIndex: number) => (
                    <motion.div
                      key={stack.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1 + stackIndex * 0.02 + 0.3,
                        duration: 0.2,
                        ease: 'easeOut',
                      }}
                    >
                      <Badge className="text-accent bg-accent/10 border border-accent/30 cursor-default backdrop-blur-sm">
                        {stack.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectClient;
