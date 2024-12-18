"use client";

// @mui
import { Stack } from "@mui/material";

// components
import TokenSection from "./TokenSection";
import VeilTokenStats from "./VeilTokenStats";
import CountSection from "../Revenue/CountSection";

const Token = () => {
  return (
    <Stack>
      <TokenSection />

      <VeilTokenStats />

      <CountSection />
    </Stack>
  )
};

export default Token;