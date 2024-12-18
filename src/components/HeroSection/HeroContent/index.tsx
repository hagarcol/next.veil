// @mui
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import { Typography, Button, Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// component
import TitleSection from '../TitleSection';
import StatsSection from '../StatsSection';

// Types
import { DescriptionSectionProps } from '../types';

const UnderlinedButton = styled(Button)({
  textTransform: "none",
  "&.MuiButton-root:hover": {
    backgroundColor: "transparent"
  }
});

const HeroContent = () => {
  const theme = useTheme();
  
  return (
    <Stack
      sx={{
        maxWidth: "640px",
        alignItems: "center",
        mx: "auto",
        zIndex: 100,
        padding: "0 16px",
        textAlign: "center"
      }}
    >
      <TitleSection />

      <DescriptionSection theme={theme} />

      <ActionButtons />

      <StatsSection />
    </Stack>
  );
};


const DescriptionSection = ({ theme }: DescriptionSectionProps) => (
  <>
    <Typography
      fontSize={20}
      sx={{
        color: theme.palette.secondary.main,
        lineHeight: 2
      }}
    >
      Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless security and privacy. No sign-up or limits. 
    </Typography>
    <UnderlinedButton>
      <Typography
        fontSize={20}
        sx={{ color: theme.palette.secondary.main }}
      >
        Powered by our Veil utility token.
      </Typography>
    </UnderlinedButton>
  </>
);

const ActionButtons = () => (
  <UnderlinedButton>
    <Stack direction="row" alignItems="center">
      <Typography
        variant='customFont'
        fontSize={20}
        fontWeight={700}
        sx={{
          color: "white",
          textDecoration: "underline!important",
          textUnderlineOffset: "1rem", 
          textDecorationThickness: "1px"
        }}
      >
        Try the Exchange Now&nbsp;
      </Typography>
      <TrendingFlatRoundedIcon 
        sx={{
          color: "white",
          strokeWidth: 20,
          fontSize: 30
        }}
      />
    </Stack>
  </UnderlinedButton>
);

export default HeroContent;