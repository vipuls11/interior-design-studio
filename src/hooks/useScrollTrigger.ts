// src/hooks/useScrollTrigger.ts
import { useState, useEffect } from 'react';

export const useScrollTrigger = (threshold = 20) => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTriggered(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isTriggered;
};