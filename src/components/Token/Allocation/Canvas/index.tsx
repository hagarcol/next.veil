import React from 'react';
import { Box, alpha } from '@mui/material';

const DonutChart = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const data = [
    { value: 30, color: '#DC3545' }, 
    { value: 20, color: '#10CD75' },
    { value: 20, color: '#8671FF' }, 
    { value: 15, color: '#0DCAF0' }, 
    { value: 15, color: '#FFA800' },
  ];  

  const getLighterColor = (baseColor: string, num: number) => {
    return alpha(baseColor, num);
  };

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const createSegments = () => {
    let startAngle = 0;
    return data.map((item, index) => {
      const percentage = item.value / total;
      const angle = percentage * 360;
      const endAngle = startAngle + angle;
      
      const startRad = (startAngle - 90) * Math.PI / 180;
      const endRad = (endAngle - 90) * Math.PI / 180;
      
      const strokeWidth = 0.5;
      const radius = 49.75;
      const innerRadius = 30.25;

      const x1 = 50 + radius * Math.cos(startRad);
      const y1 = 50 + radius * Math.sin(startRad);
      const x2 = 50 + radius * Math.cos(endRad);
      const y2 = 50 + radius * Math.sin(endRad);
      
      const x3 = 50 + innerRadius * Math.cos(endRad);
      const y3 = 50 + innerRadius * Math.sin(endRad);
      const x4 = 50 + innerRadius * Math.cos(startRad);
      const y4 = 50 + innerRadius * Math.sin(startRad);

      const largeArcFlag = angle > 180 ? 1 : 0;
      
      const path = [
        `M ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        `L ${x3} ${y3}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
        'Z'
      ].join(' ');

      startAngle = endAngle;

      return (
        <path
          key={index}
          d={path}
          fill={getLighterColor(item.color, hoveredIndex === index ? 0.5 : 0.3)}
          stroke={item.color}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ transition: 'fill 0.2s' }}
        />
      );
    });
  };

  return (
    <Box
      sx={{
        width: '300px',
        height: '300px',
        margin: 'auto',
        '& svg': {
          display: 'block',
          width: '100%',
          height: '100%',
        },
      }}
    >
      <svg viewBox="0 0 100 100">
        {createSegments()}
      </svg>
    </Box>
  );
};

export default DonutChart;