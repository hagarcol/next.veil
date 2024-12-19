import { useState } from "react";

// @mui
import CheckIcon from '@mui/icons-material/Check';
import CachedIcon from '@mui/icons-material/Cached';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Stack, Typography, useTheme, alpha, Fade, useMediaQuery, Link } from "@mui/material";

// components
import { GradientText } from "../HeroSection/TitleSection";
import SwapButton from "../Custom/SwapButton";
import ExchangeButton from "../Custom/ExchangeButton";
import CustomCheckbox from "../Custom/CustomCheckbox";
import CryptoBox from "./CryptoBox";
import WalletAddress from "./WalletAddress";

// redux
import { useDispatch } from "react-redux";
import { swapCrypto } from "@/redux/slices/crypto";

const ExchangeCrypto = () => {
  const isWideScreen = useMediaQuery("(min-width:768px)");
  const dispatch = useDispatch();
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  const handleSwapCrypto = () => {
    dispatch(swapCrypto());
  }

  return (
    <>
      <Stack
        sx={{
          background: "linear-gradient(180deg,#16161c,#202029)"
        }}
      >
        <Stack sx={{ padding: "48px 0", margin: "48px 0" }}>
          <Stack 
            direction="column" 
            maxWidth="960px" 
            width="100%" 
            padding="0 16px" 
            margin="0 auto"
          >
            <Fade in timeout={400}>              
              <Stack margin="0 0 48px" alignItems="center">
                <GradientText
                  variant='customFont'
                  fontSize={40}
                  fontWeight={700}
                  lineHeight={1.2}
                  textAlign="center"
                >
                  Exchange Crypto
                </GradientText>
              </Stack>
            </Fade>

            <Stack direction={isWideScreen ? "row" : "column"} position="relative">
              <CryptoBox title="You Send" />
              <CryptoBox title="You Receive" />
              
              <SwapButton
                position="absolute"
                bottom={isWideScreen ? "20%" : "40%"}
                left="50%"
                justifyContent="center"
                alignItems="center"
                onClick={handleSwapCrypto}
                sx={{
                  transform: 'translate(-50%, -50%)',
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.light,
                }}
              >
                <SyncAltIcon sx={{ fontSize: "30px", color: "white" }} />
              </SwapButton>
            </Stack>
            
            <WalletAddress />

            <Stack direction="row" alignItems="center" padding="0 12px" margin="24px 0" gap={1}>
              <CustomCheckbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                checkedIcon={<CheckIcon sx={{ fontSize: "18px" }} />}
              />

            <Typography 
              fontSize="16px" 
              sx={{ 
                color: '#DEDEDE'
              }}
            >
              By using the site and creating an exchange, you agree to our{" "}
              <Link
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: alpha(theme.palette.primary.main, 0.8),
                  }
                }}
              >
                Terms of Services
              </Link>
            </Typography>

             
            </Stack>

            <Stack padding="0 12px">
              <ExchangeButton
                sx={{
                  padding: "12px 24px",
                  backgroundColor: "#8671ffcc",
                  borderRadius: "8px",
                  "@media (max-width: 1200px)": {
                    padding: "12px 24px !important",
                  },
                  "@media (max-width: 992px)": {
                    padding: "12px 8px !important",
                  },
                }}
              >
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <CachedIcon className="rotating-icon" sx={{ height: 36, width: 36, color: "white" }} />
                  <Typography 
                    color="white"
                    fontSize={16}
                    variant="customFont"
                    sx={{ textTransform: "none", fontWeight: 700 }}
                  >
                    Exchange
                  </Typography>
                </Stack>
              </ExchangeButton>
            </Stack>

            <Stack padding="0 12px" direction="row" justifyContent='center' gap={2} margin="24px 16px">
              <Typography color="#DEDEDE" fontSize="16px">
                Already have an order number?
              </Typography>
              <Typography 
                color={theme.palette.primary.main} 
                sx={{
                  cursor: "pointer", 
                  textDecoration: "underline",
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: alpha(theme.palette.primary.main, 0.8),
                  }
                }} 
                fontSize="16px"
              >
                Track Order
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ExchangeCrypto;