'use client';
import * as motion from 'motion/react-client';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { NotionPropertiesProps } from '@/lib/notion';
import useHoverCard from '@/app/hooks/useHoverCard';
import Image from 'next/image';

interface ProjectClientProps {
  projects: NotionPropertiesProps[];
}

const ProjectClient = ({ projects }: ProjectClientProps) => {
  const { handleHoverStart, handleHoverEnd, isOtherHovered, isHovered, isDesktop } = useHoverCard();

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <p>프로젝트가 없습니다.</p>
      </div>
    );
  }

  const getProjectTypeInfo = (projectType?: { name: string; color: string }[]) => {
    const hasCompany = projectType?.some((t) => t.name === 'Company');
    const hasPersonalOrTeam = projectType?.some(
      (t) => t.name === 'Personal' || t.name === 'Toy Project' || t.name === 'Team' || t.name === 'Team Project'
    );

    if (hasCompany) {
      return {
        icon: '🏢',
        label: 'Company',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30',
        textColor: 'text-blue-400',
      };
    }
    if (hasPersonalOrTeam) {
      const hasTeam = projectType?.some((t) => t.name === 'Team' || t.name === 'Team Project');
      return {
        icon: hasTeam ? '👥' : '🚀',
        label: hasTeam ? 'Team' : 'Personal',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/30',
        textColor: 'text-orange-400',
      };
    }
    return null;
  };

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
                <div className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-36 h-24 lg:w-40 lg:h-28 flex-shrink-0 overflow-hidden rounded border border-border/50">
                      {project.coverImage ? (
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(min-width: 1024px) 160px, 144px"
                          priority={index === 0}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                                  <span class="text-2xl lg:text-3xl font-bold text-accent">${project.title
                                    .charAt(0)
                                    .toUpperCase()}</span>
                                </div>
                              `;
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                          <span className="text-2xl lg:text-3xl font-bold text-accent">
                            {project.title.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className={`flex flex-col ${project.description ? 'gap-2' : 'gap-0'}`}>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            {(() => {
                              const typeInfo = getProjectTypeInfo(project.projectType);
                              return typeInfo ? (
                                <Badge
                                  className={`text-xs ${typeInfo.textColor} ${typeInfo.bgColor} border ${typeInfo.borderColor} px-2 py-0.5`}
                                >
                                  {typeInfo.icon} {typeInfo.label}
                                </Badge>
                              ) : null;
                            })()}
                          </div>
                          {project.description && (
                            <CardDescription className="text-sm">{project.description}</CardDescription>
                          )}
                        </div>
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
                      <div className="pt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.stacks?.map(
                            (stack: { id: string; name: string; color: string }, stackIndex: number) => (
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
                                <Badge className="text-xs text-accent bg-accent/10 border border-accent/30 cursor-default px-2 py-1">
                                  {stack.name}
                                </Badge>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ) : (
            <Card className="max-w-2xl bg-transparent border-transparent">
              <div className="p-3">
                <div className="flex flex-col gap-3">
                  <div className="relative w-full aspect-video max-w-xs overflow-hidden rounded border border-border/50">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 320px, 448px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                                <span class="text-4xl font-bold text-accent">${project.title
                                  .charAt(0)
                                  .toUpperCase()}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <span className="text-4xl font-bold text-accent">{project.title.charAt(0).toUpperCase()}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <div className="flex justify-between items-center hover:text-primary transition-colors group mb-2">
                        <CardTitle className="text-base group-hover:underline group-hover:decoration-primary/30">
                          {project.title}
                        </CardTitle>
                        <ArrowUpRight size={14} />
                      </div>
                    </a>
                    <div className={`flex flex-col ${project.description ? 'gap-1.5' : 'gap-0'} mb-3`}>
                      {(() => {
                        const typeInfo = getProjectTypeInfo(project.projectType);
                        return typeInfo ? (
                          <Badge
                            className={`text-xs ${typeInfo.textColor} ${typeInfo.bgColor} border ${typeInfo.borderColor} px-2 py-0.5 w-fit`}
                          >
                            {typeInfo.icon} {typeInfo.label}
                          </Badge>
                        ) : null;
                      })()}
                      {project.description && (
                        <CardDescription className="text-xs">{project.description}</CardDescription>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1">
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
                          <Badge className="text-xs text-accent bg-accent/10 border border-accent/30 px-1.5 py-0.5">
                            {stack.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default ProjectClient;
