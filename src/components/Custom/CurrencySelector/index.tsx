import { Stack, styled, alpha } from "@mui/material";

const CurrencySelector = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.light, 0.8),
    transform: 'translateY(-1px)',
  },
}));

export default CurrencySelector;