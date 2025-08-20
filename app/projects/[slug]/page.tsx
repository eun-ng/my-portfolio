import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Badge } from '@/components/ui/badge';
import { ProjectTypeBadge } from '@/components/ui/project-type-badge';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <FiArrowLeft size={16} />
          프로젝트 목록으로 돌아가기
        </Link>

        <header className="mb-8">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  {project.title}
                </h1>
                <ProjectTypeBadge projectType={project.projectType} />
              </div>
              {project.description && (
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
              )}
            </div>

            {project.period && (
              <p className="text-sm text-muted-foreground">{project.period}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FiExternalLink size={16} />
                프로젝트 보기
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            )}
          </div>

          {project.stacks && project.stacks.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">기술 스택</h3>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <Badge
                    key={stack}
                    variant="outline"
                    className="text-xs text-accent bg-accent/10 border-accent/30"
                  >
                    {stack}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </header>

        {project.content && (
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-xl lg:text-3xl font-bold mt-6 lg:mt-8 mb-3 lg:mb-4 first:mt-0 text-foreground">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-lg lg:text-2xl font-semibold mt-5 lg:mt-6 mb-2 lg:mb-3 text-foreground">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-base lg:text-xl font-semibold mt-4 mb-2 text-foreground">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-sm lg:text-base leading-6 lg:leading-7 mb-3 lg:mb-4 text-body-text">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-3 lg:mb-4 space-y-1">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-3 lg:mb-4 space-y-1">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-sm lg:text-base leading-6 lg:leading-7 text-body-text">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="font-bold border-l-4 border-accent pl-4 mb-4">
                    {children}
                  </blockquote>
                ),
                hr: () => (
                  <hr className="my-6 lg:my-8 border-0 border-t border-border" />
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    );
                  }
                  return <code className={className}>{children}</code>;
                },
                pre: ({ children }) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                img: ({ src, alt }) => (
                  <Image
                    src={(src as string) || ''}
                    alt={alt || ''}
                    width={800}
                    height={600}
                    className="w-full max-w-2xl h-auto rounded-lg my-4 mx-auto block"
                    style={{ objectFit: 'contain' }}
                  />
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-colors"
                  >
                    {children || href}
                  </a>
                ),
              }}
            >
              {project.content}
            </Markdown>
          </article>
        )}
      </div>
    </div>
  );
}
