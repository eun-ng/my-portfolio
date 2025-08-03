import React from 'react';
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
    jd: 'Front End Developer',
    company: '휴스테이션(Hustation)',
    url: 'https://www.hustation.com/',
    startDate: '2023.02',
    endDate: '2025.02',
    description: (
      <>
        <p className="text-pretty leading-relaxed">
          프론트엔드 개발자로서 채용관리 솔루션(ATS), 인성검사 플랫폼, 기업용 채용 홈페이지 등 다양한 HR Tech 제품을
          개발했습니다. 기획자, 디자이너, PM과 긴밀히 협업하며 레거시 프로젝트 개선부터 신규 서비스 개발까지 전 과정에
          참여하여 제품 고도화를 지속적으로 수행했습니다.
        </p>
        <ul className="list-none pl-5 mt-2 space-y-4">
          <li>
            채용 관리 솔루션(ATS) MVP 신규 개발
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>디자인 시스템 설계 및 개발</li>
              <li>채용 자동화 처리 칸반 보드 개발</li>
              <li>공통 컴포넌트, 레이아웃 설계 및 개발</li>
              <li>채용과정 자동화 처리 칸반 보드 개발</li>
            </ul>
          </li>
          <li>
            채용 솔루션 FAIRY 개발
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>JavaScript {`→`} TypeScript로 마이그레이션</li>
              <li>공통 컴포넌트, 레이아웃 설계 및 개발</li>
              <li>레거시 코드 리팩토링 & 신규 기능 개발</li>
            </ul>
          </li>
          <li>
            채용 솔루션 RAVIS 개발
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>반응형 디자인으로 전환</li>
              <li>공통 컴포넌트, 레이아웃 설계 및 개발</li>
              <li>레거시 코드 리팩토링 & 신규 기능 개발</li>
            </ul>
          </li>
          <li>
            채용 솔루션 FAIRY 기업용 채용 홈페이지 마이그레이션
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Next.js v13 pages router {`→`} v14 app router로 마이그레이션</li>
              <li>Turbopack 사용으로 로컬 개발 환경 속도 개선</li>
              <li>이미지, 폰트 최적화 문제 개선</li>
              <li>프리 렌더링 & SEO 개선</li>
              <li>K6 활용한 부하테스트 진행</li>
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
