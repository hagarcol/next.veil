// @mui 
import { Box, Stack, useMediaQuery } from "@mui/material";

// components
import CustomCard from "./CustomCard";
// import { GradientText } from "../HeroSection/TitleSection";
import ScrollScaleText from "../Custom/ScrollScaleText";

// data
import { CORE_BENEFITS_DATA } from "@/assets/data";

// types
import { CORE_BENEFITS_ITEM_TYPE } from "./types";

const CoreBenefits = () => {
  const isWideScreen = useMediaQuery('(min-width: 992px)');

  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundColor: "#16161C",
      }}
    >
      <Stack
        sx={{
          margin: isWideScreen ? "48px 0" : "24px 0",
          padding: isWideScreen ? "48px 16px" : "24px 16px",
          maxWidth: "1280px !important",
          width: "100%",
        }}
      >
        <Box
          textAlign="center"
          margin="0 0 48px"
        >
          <ScrollScaleText />
        </Box>
        
        <Stack 
          direction={!isWideScreen ? "column" : "row"} 
          gap={!isWideScreen ? 2 : 0}
          justifyContent="space-between" 
        >
          {CORE_BENEFITS_DATA.detail.map((item: CORE_BENEFITS_ITEM_TYPE, index: number) => (
            <CustomCard key={index} props={item} isNarrowScreen={!isWideScreen}/>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CoreBenefits;