import { useState } from "react";
import Image from "next/image";
// @mui
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CachedIcon from '@mui/icons-material/Cached';
import { AppBar, Stack, Button, Typography, Container } from "@mui/material";
// @data
import { HeaderItems } from "@/assets/data";
// styles
import styles from "./style";

const Logo = () => (
  <Stack direction="row" alignItems="center" padding="0 12px" sx={{cursor: "pointer"}}>
    <Image
      src="/images/logo/veil.svg"
      alt="Veil Brand Icon"
      width={73}
      height={40}
      priority
    />
    <Typography variant="customFont" fontSize="24px">
      Veil
    </Typography>
  </Stack>
);

const NavigationMenu = ({ isWideScreen }: {isWideScreen: boolean}) => (
  <Stack
    direction={isWideScreen ? "row" : "column"}
    sx={styles.navigationMenu(isWideScreen)}
  >
    {HeaderItems.map((item, index) => (
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
        <Typography fontSize="16px">
          {item.name}
        </Typography>
      </Button>
    ))}
  </Stack>
);

const Header = () => {
  const isWideScreen = useMediaQuery('(min-width:1200px)');
  const isNarrowScreen = useMediaQuery('(max-width:576px)');
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Container maxWidth={false} sx={styles.container}>
        <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
          <Logo />
          
          {(isWideScreen || menuVisible) && (
            <NavigationMenu isWideScreen={isWideScreen} />
          )}

          <Stack direction="row" gap={3} padding="0 12px">
            {!isNarrowScreen && (
              <Button sx={styles.exchangeButton}>
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <CachedIcon sx={{ height: 36, width: 36, color: "white" }} />
                  <Typography 
                    color="white"
                    fontSize={16}
                    variant="customFont"
                    sx={{ textTransform: "none", fontWeight: 700 }}
                  >
                    Exchange
                  </Typography>
                </Stack>
              </Button>
            )}
            
            {!isWideScreen && (
              <Button
                sx={styles.menuButton}
                onClick={() => setMenuVisible(!menuVisible)}
              >
                <MenuIcon sx={{ width: 30, height: 30, color: "white" }} />
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;