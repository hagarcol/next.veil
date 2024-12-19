// @mui
import { Typography, Stack, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GradientText = styled(Typography)({
  background: "linear-gradient(90deg, #ffffff, #545759)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  width: "fit-content"
});

const TitleSection = () => {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack sx={{ mb: "2rem !important", zIndex: 100 }}>
      <Typography
        variant='customFont'
        fontSize={isWideScreen ? 64 : 48}
        color='rgba(134,113,255)'
        fontWeight={700}
        lineHeight={isWideScreen ? 1.4 : 1}
      >
        Privacy Driven
      </Typography>

      <GradientText
        variant='customFont'
        fontWeight={700}
        fontSize={isWideScreen ? 64 : 48}
        lineHeight={isWideScreen ? 1.4 : 1.2}
      >
        Crypto Exchange
      </GradientText>
    </Stack>
  )
};

export default TitleSection;