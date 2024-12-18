import React, { useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

interface Logo {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: number; 
  gap?: number;  
  height?: number;
}

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LogoCarousel: React.FC<LogoCarouselProps> = ({
  logos,
  speed = 20,
  gap = 40,
  height = 100
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        height,
        position: 'relative',
        overflow: 'hidden',
        background: "#16161C",
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          width: 100,
          height: '100%',
          zIndex: 2,
        },
        '&::before': {
          left: 0,
          background: `linear-gradient(to right, #16161C, transparent)`,
        },
        '&::after': {
          right: 0,
          background: `linear-gradient(to left, #16161C, transparent)`,
        },
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          animation: `${slide} ${speed}s linear infinite`,
          animationPlayState: isHovered ? 'paused' : 'running',
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {logos.map((logo, index) => (
          <Box
            key={`first-${logo.id}-${index}`}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: `0 ${gap/2}px`,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              style={{
                height: 80,
                maxHeight: height,
                width: 'auto',
                maxWidth: logo.width || 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
        
        {logos.map((logo, index) => (
          <Box
            key={`second-${logo.id}-${index}`}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: `0 ${gap/2}px`,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              style={{
                height: 80,
                maxHeight: height,
                width: 'auto',
                maxWidth: logo.width || 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LogoCarousel;