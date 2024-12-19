import React from "react";

// @mui
import { Box, Grid, Stack, Typography, alpha } from "@mui/material"
import { PieChart } from '@mui/x-charts/PieChart';

// data
import { Revenue_Allocation_DATA } from "@/assets/data";

interface Revenue_Allocation_DATA_TYPE {
  id: number;
  name: string;
  percent: string;
  color: string;
  value: number;
};

interface Chart_DATA_TYPE {
  id: number;
  value: number;
  label: string;
  color: string;
};

export const getLighterColor = (baseColor: string, num: number) => {
  return alpha(baseColor, num);
};

const transformToChartData = (data: Revenue_Allocation_DATA_TYPE[], skippedIds: number[]): Chart_DATA_TYPE[] => {
  let index = 0;
  return data
    .filter(item => !skippedIds.includes(item.id))
    .map(item => {
      const { value, name, color } = item;
      return {
        id: index++,
        value,
        label: name,
        color: getLighterColor(color, 0.3)
      };
    });
};

const ChartSection = () => {
  const [skippedIds, setSkippedIds] = React.useState<number[]>([]);
  const [chartData, setChartData] = React.useState(transformToChartData(Revenue_Allocation_DATA, []));

  const handleSkipId = (id: number) => {
    const newSkippedIds = skippedIds.includes(id)
      ? skippedIds.filter(item => item !== id)
      : [...skippedIds, id];
  
    setSkippedIds(newSkippedIds);
    setChartData(transformToChartData(Revenue_Allocation_DATA, newSkippedIds));
  };

  return (
    <Stack marginTop={8}>
      <Grid container justifyContent="center" rowGap={2}>
        {Revenue_Allocation_DATA.map((data, index) => {
          const skipped = skippedIds.includes(data.id);

          return (
            <Grid item key={index} xs={4}>
              <Stack direction="row" alignItems="center" gap={1} justifyContent="center">
                <Box 
                  width={20}
                  height={20}
                  borderRadius="50%"
                  sx={{
                    backgroundColor: getLighterColor(data.color, 0.3),
                    border: `1px solid ${data.color}`
                  }}
                />

                <Typography
                  color="#DEDEDE80"
                  fontSize={14}
                  fontWeight={400}
                  sx={{
                    cursor: "pointer",
                    textDecoration: skipped ? "line-through" : "none"

                  }}
                  onClick={() => handleSkipId(data.id)}
                >
                  {data.name}
                </Typography>
              </Stack>
            </Grid>
          )
        })}
      </Grid>
      
      <PieChart
        series={[
          {
            data: chartData,
            innerRadius: 80,
            outerRadius: 150,
            paddingAngle: 1,
            cornerRadius: 1,
            startAngle: 0,
            endAngle: 360,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 50, additionalRadius: -10, color: 'gray' },
            cx: 225,
            cy: 175,
          },
        ]}
        width={450}
        height={350}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </Stack>
  )
};

export default ChartSection;