// @mui
import { Stack, Button, Typography, useMediaQuery } from "@mui/material";

// data
import { FOOTER_DATA } from "@/assets/data";

const NavigationMenu = () => {
  const isWideScreen = useMediaQuery("(min-width: 576px)");
  return (
    <Stack 
      direction={isWideScreen ? "row" : "column"} 
      justifyContent="center"
      gap={2}
    >
      {FOOTER_DATA.items.map((item, index) => (
        <Button
          key={index}
          sx={{ 
            padding: "8px 24px",
            textTransform: "none",
            background: "transparent",
            color: "white",
            transition: "color 0.3s",
            "&.MuiButton-root:hover": { 
              background: "transparent",
              color: "#8671FF",
            }
          }}
        >
          <Typography fontSize="16px" textAlign="center">
            {item.title}
          </Typography>
        </Button>
      ))}
    </Stack>
  )
};

export default NavigationMenu;