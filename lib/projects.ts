import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

export interface Project {
  id: string;
  title: string;
  description?: string;
  stacks?: string[];
  url?: string;
  github?: string;
  period?: string;
  projectType?: string[];
  content?: string;
}

interface ProjectFrontmatter {
  title: string;
  description?: string;
  stacks?: string[];
  projectType?: string[];
  period?: string;
  url?: string;
  github?: string;
}

const getAllMarkdownFiles = cache(async (dir: string): Promise<string[]> => {
  const files: string[] = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      const subFiles = await getAllMarkdownFiles(fullPath);
      files.push(...subFiles);
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
});

const CONTENT_DIR = path.join(process.cwd(), 'content');

export const getProjects = cache(async (): Promise<Project[]> => {
  try {
    const markdownFiles = await getAllMarkdownFiles(CONTENT_DIR);

    const projects = await Promise.all(
      markdownFiles.map(async (filePath) => {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);

        const frontmatter = data as ProjectFrontmatter;
        const id = path.basename(filePath, '.md');

        return {
          id,
          title: frontmatter.title || '',
          description: frontmatter.description || '',
          stacks: frontmatter.stacks || [],
          url: frontmatter.url,
          github: frontmatter.github,
          period: frontmatter.period || '',
          projectType: frontmatter.projectType || [],
        } as Project;
      })
    );

    return projects.sort((a, b) => {
      if (!a.period && !b.period) return 0;
      if (!a.period) return 1;
      if (!b.period) return -1;

      const aDate = new Date(a.period.split(' - ')[0] || a.period);
      const bDate = new Date(b.period.split(' - ')[0] || b.period);
      return bDate.getTime() - aDate.getTime();
    });
  } catch (error) {
    console.error('Markdown 파일 읽기 오류:', error);
    return [];
  }
});

export const getProjectBySlug = cache(async (slug: string): Promise<Project | null> => {
  try {
    const allFiles = await getAllMarkdownFiles(CONTENT_DIR);

    const matchingFile = allFiles.find((file) => path.basename(file, '.md') === slug);

    if (!matchingFile) {
      return null;
    }

    const fileContent = await fs.readFile(matchingFile, 'utf8');
    const { data, content } = matter(fileContent);

    const frontmatter = data as ProjectFrontmatter;

    return {
      id: slug,
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      stacks: frontmatter.stacks || [],
      url: frontmatter.url,
      github: frontmatter.github,
      period: frontmatter.period || '',
      projectType: frontmatter.projectType || [],
      content,
    };
  } catch (error) {
    console.error('프로젝트 파일 읽기 오류:', error);
    return null;
  }
});

export const getAllProjectSlugs = cache(async (): Promise<string[]> => {
  try {
    const allFiles = await getAllMarkdownFiles(CONTENT_DIR);
    return allFiles.map((file) => path.basename(file, '.md'));
  } catch {
    return [];
  }
});
