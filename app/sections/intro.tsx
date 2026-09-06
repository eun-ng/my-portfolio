'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const IntroSection = () => {
  return (
    <motion.div
      id="intro"
      className="space-y-4"
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
    >
      <SectionHeader label="About" />
      <p className="text-wrap leading-relaxed text-body-text">
        안녕하세요,{' '}
        <span className="font-semibold text-foreground">
          데이터의 흐름부터 화면의 완성도까지 책임지는
        </span>{' '}
        개발자 남궁은입니다. B2B 솔루션에서 React와 TypeScript를 활용한
        프론트엔드 개발 경험을 바탕으로, 현재는 차세대 증권 시스템을 개발하며{' '}
        <span className="font-semibold text-primary">
          복잡한 금융 비즈니스 로직을 다루는 과정
        </span>
        에 도전하고 있습니다. Spring Boot 기반 프레임워크와 Oracle DB를 활용해
        백엔드 로직을 설계하며, 이를{' '}
        <span className="font-semibold text-primary">
          UX 친화적인 결과물로 연결하는 작업
        </span>
        에 집중하고 있습니다.
      </p>
    </motion.div>
  );
};

export default IntroSection;
