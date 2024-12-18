// @mui
import { Stack, useTheme, useMediaQuery } from "@mui/material";

// components
import CustomContainer from "@/components/Custom/Container";
import TextSection from "@/components/Custom/TextSection";
import CustomBox from "@/components/Custom/Box";

const MonthlyRevenuce = () => {
  return (
    <CustomContainer>
      <Stack>
        <TextSection 
          text="Monthly Revenue & Payouts"
          variant="customFont"
          gradient={true}
          fontSize={40}
          align="center"
          margin="0 0 24px"
        />

        <TextSection 
          text="Overview for the past 12 Months"
          color="#8671FF"
          fontSize={16}
          fontWeight={400}
          align="center"
          margin="0 0 16px"
        />
      </Stack>
    </CustomContainer>
  )
};

export default MonthlyRevenuce;