const IntroSection = () => {
  return (
    <div id="intro" className="space-y-4">
      <p className="text-balance md:text-pretty leading-relaxed text-body-text">
        안녕하세요,{' '}
        <span className="font-semibold text-accent">사용자 경험(UX)</span>과{' '}
        <span className="font-semibold text-accent">개발자 경험(DX)</span>의
        선순환 구조를 만드는 프론트엔드 개발자 남궁은입니다. 지난 2년간 다수의
        SaaS HR 솔루션 프론트엔드 개발을 하며,{' '}
        <span className="font-semibold text-accent">
          디자인 시스템을 주도적으로 구축하여 개발 속도를 40% 단축
        </span>
        했고,{' '}
        <span className="font-semibold text-accent">
          Next.js 마이그레이션 및 성능 최적화를 통해 로딩 속도를 50% 이상 개선
        </span>
        한 경험이 있습니다. TypeScript, React, Next.js 를 주로 활용하여 레거시
        리팩터링부터 신규 MVP 구축까지, 제품의 전체 라이프사이클에 기여하며
        비즈니스 성장을 이끌어왔습니다.
      </p>
    </div>
  );
};

export default IntroSection;
