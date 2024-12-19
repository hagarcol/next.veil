import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { GradientText } from '@/components/HeroSection/TitleSection';

export default function ScrollScaleText() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(20); // Start with minimum size
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    const handleScroll = () => {
      const element = textRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      
      const distanceFromTop = windowHeight - elementTop;
      const elementHeight = elementBottom - elementTop;
      const scrollProgress = distanceFromTop / (windowHeight + elementHeight);
      
      // Calculate scale between 20 and 40
      const newScale = scrollProgress <= 0.5 
        ? 20 + (scrollProgress * 40) // Scale up from 20 to 40
        : 40 - ((scrollProgress - 0.5) * 40); // Scale down from 40 to 20
      
      // Clamp the value between 20 and 40
      setScale(Math.min(40, Math.max(20, newScale)));
    };

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <Box ref={textRef}>
      <GradientText
        variant='customFont'
        fontSize={scale}
        fontWeight={700}
        lineHeight={1.2}
      >
        We are all about privacy and security
      </GradientText>
    </Box>
  );
}