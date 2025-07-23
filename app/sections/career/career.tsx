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
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>채용 관리 솔루션(ATS) MVP 신규 개발 및 디자인 시스템 개발</li>
          <li>채용 솔루션 FAIRY 개발</li>
          <li>채용 솔루션 RAVIS 개발</li>
          <li>채용 솔루션 FAIRY 기업용 채용 홈페이지 마이그레이션</li>
          <li>인성검사 설정 어드민 페이지 개발</li>
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
