// @mui 
import { Box, Stack, useMediaQuery } from "@mui/material";

// components
import CustomCard from "./CustomCard";
import { GradientText } from "../HeroSection/TitleSection";

// data
import { CORE_BENEFITS_DATA } from "@/assets/data";

// types
import { CORE_BENEFITS_ITEM_TYPE } from "./types";

const CoreBenefits = () => {
  const isNarrowScreen = useMediaQuery('(max-width: 992px)');

  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundColor: "#16161C",
      }}
    >
      <Stack
        sx={{
          margin: "48px 0",
          padding: "48px 16px",
          maxWidth: "1280px !important",
          width: "100%",
        }}
      >
        <Box
          textAlign="center"
          margin="0 0 48px"
        >
          <GradientText
            variant='customFont'
            fontSize={40}
            fontWeight={700}
            lineHeight={1.2}
          >
            {CORE_BENEFITS_DATA.title}
          </GradientText>
        </Box>
        
        <Stack 
          direction={isNarrowScreen ? "column" : "row"} 
          gap={isNarrowScreen ? 2 : 0}
          justifyContent="space-between" 
        >
          {CORE_BENEFITS_DATA.detail.map((item: CORE_BENEFITS_ITEM_TYPE, index: number) => (
            <CustomCard key={index} props={item} isNarrowScreen={isNarrowScreen}/>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CoreBenefits;