import { TextField, styled } from "@mui/material";

const DarkTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    backgroundColor: "#2d2d39",
    borderRadius: 8,
    height: "75px",
    flexGrow: 1,
    color: '#fff',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    '& input': {
      color: '#fff',
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '26px',
      fontWeight: 700,
      padding: '12px 16px',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      transition: 'border-color 0.2s ease',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#fff',
    opacity: 0.5,
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#fff !important', 
    opacity: 0.5,
  },
  '& .MuiInputBase-root.Mui-disabled': {
    backgroundColor: "#2d2d39", 
    '& input::placeholder': {
      color: '#fff !important',
      opacity: 0.5,
    }
  }
}));

export default DarkTextField;