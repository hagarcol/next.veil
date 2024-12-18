import { Stack, Typography, useTheme, Fade } from "@mui/material";

// components
import DarkTextField from "../../Custom/DarkTextField";
import AnimatedCryptoBox from "../../Custom/AnimatedCryptoBox";

const WalletAddress = () => {
  const theme = useTheme();

  return (
    <AnimatedCryptoBox padding="0 12px" margin="24px 0 0" width="100%">
      <Stack
        sx={{
          backgroundColor: theme.palette.primary.light,
          borderRadius: "1rem",
          border: "1px solid #343445"
        }}
      >
        <Typography padding={2} fontSize={20} fontWeight={700} color="white">
          Receiving Wallet Address
        </Typography>

        <Fade in timeout={300}>
          <Stack
            direction="column"
            gap={1}
            padding={3}
            marginBottom="4px"
            sx={{
              backgroundColor: "#202029",
              borderBottomLeftRadius: "1rem",
              borderBottomRightRadius: "1rem",
            }}
          >
            <DarkTextField
              placeholder="Enter Wallet Address"
              fullWidth
              variant="outlined"
            />
          </Stack>
        </Fade>
      </Stack>
    </AnimatedCryptoBox>
  );
};

export default WalletAddress;