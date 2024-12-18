import { Stack, styled } from "@mui/material";

const AnimatedCryptoBox = styled(Stack)(() => ({
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  },
}));

export default AnimatedCryptoBox;