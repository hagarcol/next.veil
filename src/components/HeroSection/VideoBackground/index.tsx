// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// types
import { VideoBackgroundProps } from '../types';

const VideoContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: -1,
  overflow: 'hidden',
});

const BackgroundVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const VideoBackground = ({ videoPath }: VideoBackgroundProps) => (
  <VideoContainer>
    <BackgroundVideo autoPlay muted loop playsInline>
      <source src={videoPath} type="video/mp4" />
    </BackgroundVideo>
  </VideoContainer>
);

export default VideoBackground;