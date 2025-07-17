import CareerClient from './career-client';

export interface CareerInfo {
  id: string;
  jd: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  description: string;
}

const CAREER_INFO: CareerInfo[] = [
  {
    id: '0',
    jd: 'FrontEnd Developer',
    company: '휴스테이션(Hustation)',
    url: 'https://www.hustation.com/',
    startDate: '2023.02',
    endDate: '2025.02',
    description:
      '프론트엔드 개발자로써 채용 솔루션 유지보수 및 채용관리 솔루션(ATS) 신규 개발, 인성검사 신규 개발, 기업용 채용 홈페이지 신규 개발 등을 수행했습니다.',
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
