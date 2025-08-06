'use client';
import { useEffect, useState } from 'react';
import type { SectionId } from '@/constants/navigation';

interface UseScrollSpyOptions {
  offset?: number;
  topThreshold?: number;
}

export const useScrollSpy = (
  sectionIds: SectionId[],
  options: UseScrollSpyOptions = {}
) => {
  const { offset = 100, topThreshold = 50 } = options;
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // 페이지 최상단에 있을 때는 첫 번째 섹션을 활성화
      if (window.scrollY < topThreshold) {
        setActiveSection(sectionIds[0]);
        return;
      }

      // 현재 뷰포트에서 가장 가까운 섹션 찾기
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // 초기 로드 시 체크
    handleScroll();

    let isThrottled = false;
    const throttledHandleScroll = () => {
      if (!isThrottled) {
        requestAnimationFrame(() => {
          handleScroll();
          isThrottled = false;
        });
        isThrottled = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [sectionIds, offset, topThreshold]);

  return activeSection;
};
