// @muyi
import { Stack } from "@mui/material"; 

// components
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#16161c",
        borderTop: "1px solid #343445",
        padding: "48px 0 16px"
      }}
    >
      <Stack
        sx={{
          margin: "48px 0",
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