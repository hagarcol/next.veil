import { Button, styled } from "@mui/material";

const ExchangeButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 0 30px rgba(134,113,255,.5)',
  },
  '& .rotating-icon': {
    transition: 'transform 0.3s ease',
  },
  '&:hover .rotating-icon': {
    transform: 'rotate(180deg)',
  },
}));

export default ExchangeButton;