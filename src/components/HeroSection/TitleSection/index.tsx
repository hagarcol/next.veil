// @mui
import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GradientText = styled(Typography)({
  background: "linear-gradient(90deg, #ffffff, #545759)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  width: "fit-content"
});

const TitleSection = () => (
  <Stack sx={{ mb: "2rem !important" }}>
    <Typography
      variant='customFont'
      fontSize={64}
      color='rgba(134,113,255)'
      fontWeight={700}
      lineHeight={1.4}
    >
      Privacy Driven
    </Typography>

    <GradientText
      variant='customFont'
      fontWeight={700}
      fontSize={64}
      lineHeight={1.4}
    >
      Crypto Exchange
    </GradientText>
  </Stack>
);

export default TitleSection;