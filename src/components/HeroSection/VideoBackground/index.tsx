// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const VideoContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  overflow: 'hidden',
});

// const BackgroundVideo = styled('video')(({ theme }) => ({
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
// })) as typeof Box; 

const VideoBackground = () => (
  <VideoContainer>
    <video 
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      src="/video/herobackground.webm"
    />
  </VideoContainer>
);

export default VideoBackground;