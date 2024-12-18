import { Stack, styled } from "@mui/material";

const SwapButton = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.1) rotate(180deg)',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default SwapButton;