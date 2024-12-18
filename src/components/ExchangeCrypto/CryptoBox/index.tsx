import { useState } from "react";
import Image from "next/image";

// @mui
import { Stack, Typography, useTheme, Fade, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// components
import DarkTextField from "../../Custom/DarkTextField";
import AnimatedCryptoBox from "../../Custom/AnimatedCryptoBox";
import CurrencySelector from "../../Custom/CurrencySelector";
import CryptoModal from "../CryptoModal";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/types";
import { setType } from "@/redux/slices/crypto";
import { YOU_SEND, SENDER, RECEIVER } from "@/constants/transaction";

const CryptoBox = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { sender, receiver } = useSelector((state: RootState) => state.crypto);
  const isNarrowScreen = useMediaQuery("(max-width:768px)");

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    const type = title === YOU_SEND ? SENDER : RECEIVER;
    dispatch(setType(type));

    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  return (
    <>
      <AnimatedCryptoBox padding="0 12px" margin="24px 0 0" width={isNarrowScreen ? "100%" : "49.9%"}>
        <Stack
          sx={{
            backgroundColor: theme.palette.primary.light,
            borderRadius: "1rem",
            border: "1px solid #343445"
          }}
        >
          <Typography padding={2} fontSize={20} fontWeight={700} color="white">
            {title}
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
              <CurrencySelector 
                direction="row" 
                justifyContent="space-between" 
                alignItems="center" 
                padding="8px 16px" 
                height="75px" 
                sx={{ 
                  backgroundColor: theme.palette.primary.light, 
                  borderRadius: "1rem",
                }}
                onClick={handleOpen}
              >
                <Stack direction="row" gap={2} alignItems="center">
                  <Image 
                    src={title === YOU_SEND ? sender.crypto.img : receiver.crypto.img}
                    alt="crypto" 
                    width={50} 
                    height={50} 
                  />
                  <Stack>
                    <Typography variant="customFont" fontSize={20} color="white">
                      {title === YOU_SEND ? sender.crypto.name : receiver.crypto.name}
                    </Typography>

                    <Typography fontSize={16} color="grey">
                      {title === YOU_SEND ? sender.crypto.subName : receiver.crypto.subName}
                    </Typography>
                  </Stack>
                </Stack>

                <KeyboardArrowDownIcon sx={{ fontSize: '30px', color: "white" }} />
              </CurrencySelector>

              <DarkTextField
                placeholder="0.0000"
                fullWidth
                variant="outlined"
                disabled={title !== YOU_SEND}
              />
            </Stack>
          </Fade>
        </Stack>
      </AnimatedCryptoBox>

      <CryptoModal 
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default CryptoBox;