import React from 'react';
import { Box, alpha } from '@mui/material';

const DonutChart = () => {
  const data = [
    { value: 20, color: '#451f2b' }, 
    { value: 20, color: '#123a2b' },
    { value: 15, color: '#1A365D' }, 
    { value: 15, color: '#2d2949' }, 
    { value: 15, color: '#6B4423' },
    { value: 15, color: '#992B2B' }, 
  ];

  const getLighterColor = (baseColor: string) => {
    return alpha(baseColor, 0.7);
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
      
      const radius = 50;
      const innerRadius = 30;

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
          fill={getLighterColor(item.color)}
          stroke={item.color}
          strokeWidth="1"
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