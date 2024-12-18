// @mui
import { Stack, useMediaQuery } from "@mui/material";

// components
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import FooterLinks from "./Links";

const TopSection = () => {
  const isWideScreen = useMediaQuery("(min-width: 992px)");

  return (
      <Stack
        direction={isWideScreen ? "row" : "column"}
        justifyContent={isWideScreen ? "space-between" : "center"}
        margin="48px -12px"
        gap={4}
      >
        <Logo />

        <NavigationMenu />

        <FooterLinks />
      </Stack>
  )
}

export default TopSection;