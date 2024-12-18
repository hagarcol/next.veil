// @mui
import { Stack, TextField, useTheme, Button, Typography, useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const DarkTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#121212',
    borderRadius: 8,
    height: "60px",
    flexGrow: 1,
    '& input': {
      color: '#fff',
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '20px',
      fontWeight: 700,
      padding: '12px 16px',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
      Height: "100px"
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const TrackOrderInput = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery("(max-width: 576px)");

  return (
    <Stack
      padding="0 16px"
      maxWidth="720px"
      width="100%"
      margin="0 auto"
    >
      <Stack
        direction={isNarrowScreen ? "column" : "row"}
        gap={2}
        padding="16px"
        width="100%"
        justifyContent="space-between"
        sx={{
          border: "1px solid #343445",
          borderRadius: "1rem",
          backgroundColor: theme.palette.primary.light
        }}
      >
        <DarkTextField
          placeholder="#6PCF012721"
          fullWidth
          variant="outlined"
          sx={{ maxWidth: 400 }}
        />

        <Button 
          sx={{
            boxShadow: "0 0 10px rgba(0,0,0,.35)",
            height: "60px",
            flexGrow: 1,
            padding: "16px 48px",
            backgroundColor: "#8671ffcc",
            borderRadius: "8px",
            "&.MuiButton-root:hover": { 
              backgroundColor: "#8671ff",
              borderColor: "#8671ff",
              boxShadow: "0 0 30px rgba(134,113,255,.35)"
            },
            "@media (max-width: 1200px)": {
              padding: "12px 24px !important",
            },
            "@media (max-width: 992px)": {
              padding: "12px 8px !important",
            }
          }}
        >
          <Stack direction="row" alignItems="center" gap={0.5}>
            <SearchRoundedIcon sx={{ height: 36, width: 36, color: "white" }} />

            <Typography 
              color="white"
              fontSize={16}
              variant="customFont"
              sx={{ textTransform: "none", fontWeight: 700 }}
            >
              Track Order
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>

  )
}

export default TrackOrderInput;