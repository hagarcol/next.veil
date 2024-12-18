// @mui
import { Stack } from "@mui/material";

// components
import { GradientText } from "../HeroSection/TitleSection"
import TransactionList from "./List";

const RecentTransaction = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#16161C",
      }}
    >
      <Stack
        margin="48px auto"
        padding="48px 16px"
        sx={{
          maxWidth: "960px",
          width: "100%"
        }}
        gap="48px"
      >
        <Stack alignItems="center">
          <GradientText
            variant='customFont'
            fontSize={40}
            fontWeight={700}
            lineHeight={1.2}
            textAlign="center"
            sx={{
              width: "fit-content"
            }}
          >
            Recent Transaction
          </GradientText>
        </Stack>
        
        <TransactionList />
      </Stack>
    </Stack>
  )
};

export default RecentTransaction;