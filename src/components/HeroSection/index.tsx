// @mui
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// component
import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  position: 'relative',
  padding: '260px 3rem 140px 3rem',
  [theme.breakpoints.down('md')]: {
    padding: '200px 1.5rem 100px 1.5rem',
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