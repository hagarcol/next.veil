"use client";

// @mui
import { Stack } from "@mui/material";

// components
import TokenSection from "./TokenSection";
import VeilTokenStats from "./VeilTokenStats";
import RevenueAllocation from "./Allocation";
import CountSection from "../Revenue/CountSection";

const Token = () => {
  return (
    <Stack>
      <TokenSection />

      <VeilTokenStats />

      <RevenueAllocation />
      
      <CountSection />
    </Stack>
  )
};

export default Token;