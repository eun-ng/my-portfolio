import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/notion';

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
    return NextResponse.json([], { status: 500 });
  }
}
