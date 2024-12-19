// @mui
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// component
import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  padding: '260px 3rem 140px 3rem',
  overflow: "hidden",
  [theme.breakpoints.down('lg')]: {
    padding: '160px 24px 60px 24px',
    minHeight: '70vh',
  },
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBackground />

      <HeroContent />
    </HeroContainer>
  );
};

export default HeroSection;