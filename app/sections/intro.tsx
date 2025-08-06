const IntroSection = () => {
  return (
    <div id="intro" className="space-y-4">
      <p className="text-pretty leading-relaxed text-body-text">
        안녕하세요. 개발자 남궁은입니다. <br />
        저는 <span className="font-semibold text-accent">클린 코드</span>와{' '}
        <span className="font-semibold text-accent">
          재사용 가능한 컴포넌트 설계
        </span>
        에 집중해서 작업하는 것을 선호합니다. 이 성향을 바탕으로 사내{' '}
        <span className="font-semibold text-accent">
          레거시 프로젝트들을 다수 고도화
        </span>
        했고, 다양한{' '}
        <span className="font-semibold text-accent">공통 컴포넌트</span>를
        설계하고 구현하여 개발팀 능률 상승에 일조했습니다. 또한, 디자이너와
        협업하여{' '}
        <span className="font-semibold text-accent">
          디자인 시스템을 새로 도입
        </span>
        하여 일관된 UX/UI를 구현했습니다.
      </p>

      <p className="text-pretty leading-relaxed text-body-text">
        새로운 기술 도입 시에는 팀원들과 함께 레퍼런스 조사와 기술 검토를 거쳐
        프로젝트에 실질적으로 도움이 되는 기술들만 선별해서 적용했습니다.
      </p>

      <p className="text-pretty leading-relaxed text-body-text">
        <span className="font-semibold text-accent">사용자 경험</span>과{' '}
        <span className="font-semibold text-accent">개발자 경험</span> 모두를
        중요하게 생각하며, 단순한 기능 구현을 넘어 제품을 통해 사용자들에게 의미
        있는 가치를 전달하는 개발자가 되고자 합니다.
      </p>

      <p className="text-pretty leading-relaxed text-body-text">
        현재는 Jest와 Testing Library를 활용한 테스트 작성, Core Web Vitals
        개선, 그리고 번들 사이즈 최적화에 특히 관심을 가지고 있습니다.
      </p>
    </div>
  );
};

export default IntroSection;
