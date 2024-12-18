// @mui
import { Stack, useMediaQuery, useTheme } from "@mui/material";

// components
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import FooterLinks from "./Links";

const TopSection = () => {
  const theme = useTheme();
  const islgOverScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
      <Stack
        direction={islgOverScreen ? "row" : "column"}
        justifyContent={islgOverScreen ? "space-between" : "center"}
        margin={islgOverScreen ? "48px -12px" : "16px -12px"}
        gap={4}
      >
        <Logo />

        <NavigationMenu />

        <FooterLinks />
      </Stack>
  )
}

export default TopSection;