import { Client } from '@notionhq/client';
import { StackItem } from './types/stack';

export interface NotionPropertiesProps {
  id: string;
  title: string;
  description?: string;
  stacks?: StackItem[];
  url?: string;
  github?: string;
  period?: string;
  projectType?: StackItem[];
}

export interface ApiError {
  error: string;
  message: string;
  hasData: boolean;
}

export type ProjectsResponse = NotionPropertiesProps[] | ApiError;

interface NotionPage {
  id: string;
  properties: {
    Name?: {
      title?: { plain_text: string }[];
    };
    Description?: {
      rich_text?: { plain_text: string }[];
    };
    Stacks?: {
      multi_select?: { id: string; name: string; color: string }[];
    };
    NotionDetail?: {
      url?: string;
    };
    GitHub?: {
      url?: string;
    };
    Period?: {
      date?: {
        start?: string;
        end?: string;
      };
    };
    ProjectType?: {
      multi_select?: { id: string; name: string; color: string }[];
    };
  };
}

const isValidNotionPage = (page: unknown): page is NotionPage => {
  if (typeof page !== 'object' || page === null) return false;

  const pageObj = page as Record<string, unknown>;
  return (
    'id' in pageObj &&
    'properties' in pageObj &&
    typeof pageObj.id === 'string' &&
    typeof pageObj.properties === 'object' &&
    pageObj.properties !== null
  );
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProjects(pageSize: number = 10): Promise<NotionPropertiesProps[]> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID를 확인해주세요.');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      sorts: [
        {
          property: 'Period',
          direction: 'descending',
        },
      ],
    });

    return (
      response.results?.filter(isValidNotionPage).map((page) => {
        const properties = (page as NotionPage).properties;

        return {
          id: page.id,
          title: properties.Name?.title?.[0]?.plain_text || '',
          description: properties.Description?.rich_text?.[0]?.plain_text || '',
          stacks: properties.Stacks?.multi_select || [],
          url: properties.NotionDetail?.url,
          github: properties.GitHub?.url,
          period:
            properties.Period?.date?.start && properties.Period?.date?.end
              ? `${properties.Period.date.start} ~ ${properties.Period.date.end}`
              : properties.Period?.date?.start || '',
          projectType: properties.ProjectType?.multi_select || [],
        };
      }) || []
    );
  } catch (error) {
    console.error('Notion API Error:', error);
    console.error('Environment check:', {
      hasToken: !!process.env.NOTION_TOKEN,
      hasDatabase: !!process.env.NOTION_DATABASE_ID,
    });

    if (error instanceof Error) {
      if (error.message.includes('Unauthorized')) {
        throw new Error('Notion API 인증에 실패했습니다. 토큰을 확인해주세요.');
      }
      if (error.message.includes('Not found')) {
        throw new Error('Notion 데이터베이스를 찾을 수 없습니다. 데이터베이스 ID를 확인해주세요.');
      }
      if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        throw new Error('네트워크 요청이 시간 초과되었습니다. 잠시 후 다시 시도해주세요.');
      }
    }

    throw new Error('프로젝트를 불러오는 중 오류가 발생했습니다.');
  }
}
