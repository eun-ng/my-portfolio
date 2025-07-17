'use client';
import * as motion from 'motion/react-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { NotionPropertiesProps } from '@/lib/notion';
import useHoverCard from '@/app/hooks/useHoverCard';

interface ProjectClientProps {
  projects: NotionPropertiesProps[];
}

const ProjectClient = ({ projects }: ProjectClientProps) => {
  const { handleHoverStart, handleHoverEnd, isOtherHovered, isHovered, isDesktop } = useHoverCard();

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
          {isDesktop ? (
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
                        y: isHovered(project.id) ? -6 : 0,
                        opacity: isHovered(project.id) ? 1 : 0.5,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeOut',
                      }}
                    >
                      <ArrowUpRight size={16} />
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
          ) : (
            <Card className="max-w-2xl bg-transparent border-transparent">
              <CardHeader className="pb-3">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-between items-center hover:text-primary transition-colors group">
                    <CardTitle className="text-lg lg:text-xl group-hover:underline group-hover:decoration-primary/30">
                      {project.title}
                    </CardTitle>
                    <ArrowUpRight size={16} />
                  </div>
                </a>
                <CardDescription className="mt-2 text-sm">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
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
                      <Badge className="text-xs text-accent bg-accent/10 border border-accent/30 backdrop-blur-sm px-2 py-1">
                        {stack.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default ProjectClient;
