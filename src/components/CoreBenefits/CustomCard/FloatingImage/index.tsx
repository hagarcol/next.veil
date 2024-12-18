// @mui
import { Stack } from "@mui/material";
import { keyframes } from '@mui/material/styles';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const FloatingImage: React.FC<{ src: string; alt: string; height?: number }> = ({ src, alt, height = 170 }) => (
  <Stack
    alignItems="center"
    sx={{
      margin: "24px 1rem",
      flexShrink: 0,
      img: {
        animation: `${float} 3s ease-in-out infinite`
      }
    }}
  >
    <img src={src} alt={alt} style={{ width: "auto", height }} />
  </Stack>
);

export default FloatingImage;