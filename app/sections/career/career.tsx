import type React from 'react';
import SectionHeader from '@/app/components/SectionHeader';
import CareerClient from './career-client';

export interface CareerInfo {
  id: string;
  jd: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  description: React.ReactNode;
  stacks?: string[];
}

const CAREER_INFO: CareerInfo[] = [
  {
    id: '1',
    jd: '원장 개발자',
    company: '나누리IT',
    url: 'https://nanuriit.kr/',
    startDate: '2026.01',
    endDate: '현재',
    stacks: ['Spring Boot Framework', 'Oracle DB', 'Java'],
    description: (
      <>
        <p className="text-balance md:text-pretty leading-relaxed text-foreground/90">
          증권사 차세대 원장 시스템 구축 프로젝트에 참여하여 출납 및 뱅킹 파트의
          핵심 비즈니스 로직을 개발한 경험이 있습니다.
        </p>
        <ul className="relative border-l border-primary/20 pl-5 ml-1 mt-6 space-y-6 list-none">
          <li className="relative">
            <span className="absolute -left-6.25 top-1.5 w-2 h-2 rounded-full bg-primary/80 ring-4 ring-background" />
            <strong className="text-foreground">
              우리투자증권 차세대 프로젝트 (출납 파트)
            </strong>
            <span className="block text-sm text-muted-foreground mt-0.5 mb-2">
              2026.06 - 현재
            </span>
            <ul className="list-disc pl-4 space-y-1.5 text-foreground/80">
              <li>
                증권 계좌 내 유가증권{' '}
                <strong className="text-foreground">입출고</strong> 업무 중
                적요입출고(국내/해외), 질권 설정, 유가증권대체처리, 해외주식
                온주전환 등을 개발하고 있습니다.
              </li>
            </ul>
          </li>
          <li className="relative">
            <span className="absolute -left-6.25 top-1.5 w-2 h-2 rounded-full bg-primary/40 ring-4 ring-background" />
            <strong className="text-foreground">
              현대차증권 차세대 프로젝트 (출납/뱅킹 파트)
            </strong>
            <span className="block text-sm text-muted-foreground mt-0.5 mb-2">
              2026.01 - 2026.05
            </span>
            <ul className="list-disc pl-4 space-y-1.5 text-foreground/80">
              <li>
                <strong className="text-foreground">외화 환전</strong> 시스템
                개발을 맡아 전문을 통한 실시간 환율 조회, 예약환전, 일괄환전 등
                환전 코어 업무 로직을 구현했습니다.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: '0',
    jd: 'Frontend Developer',
    company: '휴스테이션(Hustation)',
    url: 'https://www.hustation.com/',
    startDate: '2023.02',
    endDate: '2025.02',
    stacks: ['React', 'Next.js', 'TypeScript', 'Mantine UI', 'Zustand'],
    description: (
      <>
        <p className="text-balance md:text-pretty leading-relaxed text-foreground/90">
          SaaS HR 솔루션 전문 기업 휴스테이션에서 프론트엔드 개발자로 근무하며,
          레거시 프로젝트 개선부터 신규 서비스의 성공적인 MVP 론칭까지 제품의
          전체 라이프사이클에 기여했습니다. 기획자, 디자이너, PM 등 다양한
          직군과 긴밀하게 협업하며 사용자 경험 개선과 비즈니스 성장을
          이끌었습니다.
        </p>
        <ul className="relative border-l border-primary/20 pl-5 ml-1 mt-6 space-y-6 list-none">
          <li className="relative">
            <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-primary/80 ring-4 ring-background" />
            <strong className="text-foreground">
              신규 ATS 솔루션 MVP 프론트엔드 개발
            </strong>
            <ul className="list-disc pl-4 mt-2 space-y-1.5 text-foreground/80">
              <li>
                분산된 기능들을 통합한 신규 채용 관리 솔루션의 프론트엔드 개발을
                담당했습니다.
              </li>
              <li>
                자동화 칸반 보드 등 핵심 기능을 개발하여 채용 담당자의 업무
                시간을 평균 40% 단축했습니다.
              </li>
            </ul>
          </li>
          <li className="relative">
            <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-primary/40 ring-4 ring-background" />
            <strong className="text-foreground">
              개발 문화 개선 및 생산성 향상
            </strong>
            <ul className="list-disc pl-4 mt-2 space-y-1.5 text-foreground/80">
              <li>
                Mantine UI 기반의{' '}
                <strong className="text-foreground">
                  디자인 시스템을 주도적으로 구축
                </strong>
                하고 Storybook으로 문서화하여 팀의 개발 속도를 40%
                향상시켰습니다.
              </li>
              <li>
                레거시 JavaScript 코드를{' '}
                <strong className="text-foreground">
                  TypeScript로 전면 전환
                </strong>
                하여 코드 안정성을 확보하고 디버깅 시간을 단축했습니다.
              </li>
            </ul>
          </li>
          <li className="relative">
            <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-primary/40 ring-4 ring-background" />
            <strong className="text-foreground">
              성능 최적화 및 최신 기술 도입
            </strong>
            <ul className="list-disc pl-4 mt-2 space-y-1.5 text-foreground/80">
              <li>
                Next.js v14 App Router 마이그레이션을 통해{' '}
                <strong className="text-foreground">
                  웹 페이지 로딩 속도를 50% 이상 개선
                </strong>
                하고 DX를 향상시켰습니다.
              </li>
              <li>
                Turbopack 도입, 이미지/폰트 최적화, 부하 테스트(k6) 등을 통해
                지속적으로 웹 성능을 개선하고 안정적인 서비스를 제공했습니다.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
];

const CareerSection = () => {
  return (
    <div id="career" className="grid">
      <SectionHeader label="Career" />
      <CareerClient careerInfo={CAREER_INFO} />
    </div>
  );
};

export default CareerSection;
