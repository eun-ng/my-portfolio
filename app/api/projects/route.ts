import { NextResponse } from 'next/server';
import { getProjects, ApiError } from '@/lib/notion';

export const revalidate = 1800;

export async function GET() {
  try {
    const projects = await getProjects();

    return NextResponse.json(projects, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    console.error('API Route Error:', error);

    const errorResponse: ApiError = {
      error: 'FETCH_FAILED',
      message: error instanceof Error ? error.message : '프로젝트를 불러오는 중 오류가 발생했습니다.',
      hasData: false,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
