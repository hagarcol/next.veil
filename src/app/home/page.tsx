'use client';

import { useEffect, useState } from "react";

// components
import HeroSection from "@/components/HeroSection";
import CoreBenefits from "@/components/CoreBenefits";
import ExchangeCrypto from "@/components/ExchangeCrypto";
import RecentTransaction from "@/components/RecentTransaction";
import SupportedCrypto from "@/components/SupportedCrypto";
import LatestUpdates from "@/components/LatestUpdates";
import TrackOrder from "@/components/TrackOrder";

const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <HeroSection />
    
      <CoreBenefits />

      <ExchangeCrypto />
      
      <RecentTransaction />

      <SupportedCrypto />
      
      <LatestUpdates />

      <TrackOrder />
    </>
  )
}

export default HomePage;