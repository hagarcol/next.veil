// @mui
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

// components
import CustomizedAccordions from "./CustomizedAccordions";
import { GradientText } from "../HeroSection/TitleSection";

const FAQs = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Stack
        padding="100px 0 0 0"
      >
        <Stack
          gap={1}
          sx={{
            margin: isNarrowScreen ? "24px auto" : "48px auto",
            maxWidth: "960px",
            width: "100%",
            padding: isNarrowScreen ? "24px 16px" : "48px 16px"
          }}
        >
          <Stack alignItems="center">
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
              FAQs
            </GradientText>
          </Stack>

          <Typography
            variant='customFont'
            fontSize={22}
            fontWeight={700}
            sx={{
              color: theme.palette.primary.main,
              margin: "0 0 48px"
            }}
            textAlign="center"
          >
            Answering the most popular questions
          </Typography>

          <CustomizedAccordions />
        </Stack>
      </Stack>
    </>
  )
}

export default FAQs;