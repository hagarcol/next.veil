// @mui
import { Button, Stack, Typography, useTheme } from "@mui/material";

// redux
import { isModalOpen, setModalType } from "@/redux/slices/extra";
import { dispatch } from "@/redux/store";

interface PropsType {
  text: string;
}

const CustomButton = ({
  text
}: PropsType) => {
  const theme = useTheme();
  
  return (
    <Button
      onClick={() => {
        dispatch(setModalType("locked"));
        dispatch(isModalOpen(true));
      }} 
      sx={{
        boxShadow: "0 0 10px rgba(0,0,0,.35)",
        padding: "16px 24px",
        backgroundColor: "#8671ffcc",
        borderRadius: "8px",
        "&.MuiButton-root:hover": { 
          backgroundColor: "#8671ff",
          borderColor: "#8671ff",
          boxShadow: "0 0 30px rgba(134,113,255,.35)"
        },
        // "@media (max-width: 1200px)": {
        //   padding: "12px 24px !important",
        // },
        // "@media (max-width: 992px)": {
        //   padding: "12px 8px !important",
        // }
      }}
    >
      <Stack 
        direction="row" 
        alignItems="center" 
        gap={0.5}
      >
        <Typography 
          color="white"
          fontSize={16}
          fontFamily={theme.typography.fontFamily}
          sx={{ textTransform: "none", fontWeight: 700 }}
        >
          {text}
        </Typography>
      </Stack>
    </Button>
  )
};

export default CustomButton;