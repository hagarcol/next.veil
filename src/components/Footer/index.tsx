// @muyi
import { Stack, useMediaQuery, useTheme } from "@mui/material"; 

// components
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

const Footer = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundColor: "#16161c",
        borderTop: "1px solid #343445",
        padding: isNarrowScreen ? "48px 0" : "48px 0 16px"
      }}
    >
      <Stack
        maxWidth="1280px"
        width="100%"
        sx={{
          // margin: islgOverScreen ? "48px 0" : 0,
          padding: "0 16px",
        }}
      >
        <TopSection />

        <BottomSection />
      </Stack>
    </Stack>
  )
}

export default Footer;