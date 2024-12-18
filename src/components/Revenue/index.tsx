// @mui
import { Stack } from "@mui/material";

// components
import TokenSection from "./TokenSection";
import CountSection from "./CountSection";
import RevenueSharing from "./Sharing";
import RevenueIncome from "./Income";
import MonthlyRevenuce from "./Monthly";

const Revenue = () => {
  return (
    <Stack>
      <TokenSection />

      <CountSection />

      <RevenueSharing />

      <RevenueIncome />

      <MonthlyRevenuce />
    </Stack>
  )
};

export default Revenue;