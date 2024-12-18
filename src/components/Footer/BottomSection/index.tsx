// @mui
import { Stack, Typography, useMediaQuery } from "@mui/material";

const BottomSection = () => {
  const isWideScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Stack 
      direction={isWideScreen ? "row" : "column"}
      justifyContent="space-between"
      gap={2}
      sx={{
        borderTop: "1px solid #343445",
        padding: "48px 0 0"
      }}
    >
      <Typography
        color="#8576da"
        fontSize={16}
        textAlign="center"
        sx={{
          cursor: "pointer"
        }}
      >
        Terms of Service
      </Typography>

      <Typography
        color="#8576da"
        fontSize={16}
        textAlign="center"
      >
        Copyright © 2024 Veil. All rights reserved.
        </Typography>
    </Stack>
  )
}

export default BottomSection;