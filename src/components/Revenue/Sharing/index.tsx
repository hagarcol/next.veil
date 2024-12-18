// @mui
import { Stack, useTheme, useMediaQuery } from "@mui/material";

// components
import CustomContainer from "@/components/Custom/Container";
import RevenueTitle from "../Title";
import TextSection from "@/components/Custom/TextSection";
import CustomButton from "@/components/Custom/Button";

const RevenueSharing = () => {
  const theme = useTheme();
  const islgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isxlOverScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <CustomContainer>
      <Stack alignItems="center" padding="0 12px">
        <Stack 
          alignItems="center"
          width={
            isxlOverScreen ? 
            "calc(100% / 12 * 7)" 
            : islgScreen ? 
              "calc(100% / 12 * 8)"
              : "100%"
          }
          padding="0 12px"
        >
          <RevenueTitle 
            title="Revenue Sharing"
            description="How does it work?"
          />

          <TextSection 
            text="Our revenue sharing program comes from the distributed profits from our Veil Token taxes and our exchange processing. We allocate 20% of all revenue back to our revenue sharing program. This program will airdrop holders* of the Veil Token every 72 hours, with the funds that are generated into the RevShare wallet."
            align="center"
            fontSize={16}
            fontWeight={400}
            color="#DEDEDE"
            sx={{
              margin: "0 0 8px"
            }}
          />

          <TextSection 
            text="*Eligibility: Veil Token Holders holding at-least 1,000,000 Veil Tokens."
            align="center"
            fontSize={16}
            fontWeight={400}
            fontStyle="italic"
            color="#FFFFFF80"
            sx={{
              margin: "0 0 24px",
            }}
          />

          <CustomButton text="View RevShare Wallet"/>
        </Stack>
      </Stack>
    </CustomContainer>
  )
};

export default RevenueSharing;