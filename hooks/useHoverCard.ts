'use client';
import { useEffect, useState } from 'react';

const useHoverCard = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth >= 1024);
      }
    };

    checkDesktop();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkDesktop);
      return () => window.removeEventListener('resize', checkDesktop);
    }
  }, []);

  const handleHoverStart = (id: string) => {
    if (isDesktop) {
      setHoveredCard(id);
    }
  };

  const handleHoverEnd = () => {
    if (isDesktop) {
      setHoveredCard(null);
    }
  };

  const isHovered = (id: string) => isDesktop && hoveredCard === id;
  const isOtherHovered = (id: string) =>
    isDesktop && hoveredCard && hoveredCard !== id;

  return {
    hoveredCard,
    handleHoverStart,
    handleHoverEnd,
    isHovered,
    isOtherHovered,
    isDesktop,
  };
};

export default useHoverCard;
