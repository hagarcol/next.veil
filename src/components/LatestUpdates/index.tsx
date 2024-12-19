// @mui
import { Stack, Box, useMediaQuery } from "@mui/material";

// component
import CustomCard from "./CustomCard";
import { GradientText } from "../HeroSection/TitleSection";

// data
import { LATEST_UPDATES_DATA } from "@/assets/data";

const LatestUpdates = () => {
  const isWideScreen = useMediaQuery('(min-width: 768px)');

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
            {LATEST_UPDATES_DATA.title}
          </GradientText>
        </Box>

        <Stack 
          direction={!isWideScreen ? "column" : "row"} 
          gap={!isWideScreen ? 2 : 0}
          justifyContent="space-between" 
        >
          {LATEST_UPDATES_DATA.detail.map((item, index) => (
            <CustomCard key={index} props={item} isWideScreen={isWideScreen} />
          ))}

        </Stack>
      </Stack>
    </Stack>
  )
}

export default LatestUpdates;