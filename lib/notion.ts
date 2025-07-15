import { Client } from '@notionhq/client';

export interface NotionPropertiesProps {
  id: string;
  title: string;
  description?: string;
  stacks?: { id: string; name: string; color: string }[];
  url?: string;
  github?: string;
  period?: string;
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProjects(): Promise<unknown> {
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

      console.debug('properties :::', properties);

      return {
        id: project.id,
        title: properties.Name?.title?.[0]?.plain_text || '',
        description: properties.Description?.rich_text?.[0]?.plain_text || '',
        stacks: properties.Stacks?.multi_select?.map((stack: string[]) => stack) || [],
        url: properties.NotionDetail?.url || undefined,
        github: properties.GitHub?.url || undefined,
        period: properties.Period?.date,
      };
    });
  } catch (error) {
    console.error('ERROR :::', error);
    return [];
  }
}
