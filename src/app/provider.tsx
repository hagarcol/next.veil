"use client";

import { useEffect, useState } from "react";

// @mui
import { ThemeProvider, CssBaseline, Stack  } from '@mui/material';

// styles
import theme from "@/styles/theme";

// redux
import ReduxProvider from "@/redux/provider";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitingModal from "@/components/Custom/Modal";
import WelcomeModal from "@/components/Custom/Modal/Welcome";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Stack 
          minHeight="100vh"
          sx={{
            width: 'calc(100% - var(--scrollbar-width))',
            backgroundColor: "#16161C",
            '& .MuiModal-root': {
              '& .MuiBackdrop-root': {
                width: '100%'
              }
            },
            '& .MuiDialog-root': {
              '& .MuiDialog-container': {
                paddingRight: '0 !important'
              }
            }
          }}
        >
          <Header /> 

          {children}

          <Footer />
          
          <WaitingModal />

          <WelcomeModal />
        </Stack>
      </ThemeProvider>
    </ReduxProvider>
  );
}