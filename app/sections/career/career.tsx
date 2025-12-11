import type React from 'react';
import CareerClient from './career-client';

export interface CareerInfo {
  id: string;
  jd: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  description: React.ReactNode;
}

const CAREER_INFO: CareerInfo[] = [
  {
    id: '0',
    jd: 'Frontend Developer',
    company: '휴스테이션(Hustation)',
    url: 'https://www.hustation.com/',
    startDate: '2023.02',
    endDate: '2025.02',
    description: (
      <>
        <p className="text-balance md:text-pretty leading-relaxed">
          SaaS HR 솔루션 전문 기업 휴스테이션에서 프론트엔드 개발자로 근무하며,
          레거시 프로젝트 개선부터 신규 서비스의 성공적인 MVP 론칭까지 제품의
          전체 라이프사이클에 기여했습니다. 기획자, 디자이너, PM 등 다양한
          직군과 긴밀하게 협업하며 사용자 경험 개선과 비즈니스 성장을
          이끌었습니다.
        </p>
        <ul className="list-none pl-5 mt-2 space-y-4">
          <li>
            <strong>신규 ATS 솔루션 MVP 프론트엔드 개발</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                분산된 기능들을 통합한 신규 채용 관리 솔루션의 프론트엔드를
                개발했습니다
              </li>
              <li>
                자동화 칸반 보드 등 핵심 기능을 개발하여 채용 담당자의 업무
                시간을 평균 40% 단축했습니다.
              </li>
            </ul>
          </li>
          <li>
            <strong>개발 문화 개선 및 생산성 향상</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                Mantine UI 기반의{' '}
                <strong>디자인 시스템을 주도적으로 구축</strong>하고
                Storybook으로 문서화하여 팀의 개발 속도를 40% 향상시켰습니다.
              </li>
              <li>
                레거시 JavaScript 코드를 <strong>TypeScript로 전면 전환</strong>
                하여 코드 안정성을 확보하고 디버깅 시간을 단축했습니다.
              </li>
            </ul>
          </li>
          <li>
            <strong>성능 최적화 및 최신 기술 도입</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                Next.js v14 App Router 마이그레이션을 통해{' '}
                <strong>웹 페이지 로딩 속도를 50% 이상 개선</strong>하고 DX를
                향상시켰습니다.
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
      <CareerClient careerInfo={CAREER_INFO} />
    </div>
  );
};

export default CareerSection;
