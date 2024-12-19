// @mui
import { Stack } from "@mui/material";

// components
import { GradientText } from "../HeroSection/TitleSection";
import LogoCarousel from "./Carousel";

// data
import { logos } from "@/assets/data";

const SupportedCrypto = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#16161C",
        
      }}
    >
      <Stack margin="48px 0" padding="48px 16px">
        <Stack alignItems="center" margin="0 0 48px">
          <GradientText
            variant='customFont'
            fontSize={40}
            fontWeight={700}
            lineHeight={1.2}
            textAlign="center"
            sx={{
              width: "fit-content"
            }}
          >
            Supported Crypto
          </GradientText>
        </Stack>

        <LogoCarousel 
          logos={logos}
          speed={2}
          gap={40}
          height={80}
        />
      </Stack>
    </Stack>
  )
};

export default SupportedCrypto;