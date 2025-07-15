import { useState } from 'react';

const useHoverCard = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleHoverStart = (id: string) => {
    setHoveredCard(id);
  };

  const handleHoverEnd = () => {
    setHoveredCard(null);
  };

  const isHovered = (id: string) => hoveredCard === id;
  const isOtherHovered = (id: string) => hoveredCard && hoveredCard !== id;

  return {
    hoveredCard,
    handleHoverStart,
    handleHoverEnd,
    isHovered,
    isOtherHovered,
  };
};

export default useHoverCard;
