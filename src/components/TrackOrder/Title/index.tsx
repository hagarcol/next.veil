// @mui
import { Box, Stack, Typography, useTheme } from "@mui/material"

//components
import { GradientText } from "@/components/HeroSection/TitleSection"

const TrackOrderTitle = () => {
  const theme = useTheme();

  return (
    <Stack
      margin="0 0 48px"
      textAlign="center"
      gap={1}
    >
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
          Track your Order
        </GradientText>
      </Stack>

      <Typography
        fontSize={16}
        sx={{
          color: theme.palette.primary.main
        }}
      >
        Already have an order number? Check the status of your order
      </Typography>
    </Stack>
  )
}

export default TrackOrderTitle;