import { NotionProjectProps } from './notion';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export interface NotionProjectProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  url?: string;
  github?: string;
  createdTime: string;
}

export async function getProjects(): Promise<unknown[]> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID를 확인해주세요.');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
    });

    console.debug('response :::', response);

    return response.results?.map((project: unknown) => {
      const properties = project.properties;

      return {
        id: project.id,
        title: properties.Name?.title?.[0]?.plain_text || '',
        description: properties.Description?.rich_text?.[0]?.plain_text || '',
        tags: properties.Tags?.multi_select?.map((tag: unknown) => tag.name) || [],
        status: properties.Status?.select?.name || '',
        url: properties.URL?.url || undefined,
        github: properties.GitHub?.url || undefined,
        createdTime: project.created_time,
      };
    });
  } catch (error) {
    console.error('ERROR :::', error);
    return [];
  }
}
