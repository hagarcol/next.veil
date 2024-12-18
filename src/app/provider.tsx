"use client";

import { ThemeProvider, CssBaseline, Stack } from '@mui/material';
import theme from "@/styles/theme";
import ReduxProvider from "@/redux/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

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
            backgroundColor: "#16161C"
          }}
        >
          <Header /> 

          {children}
          
          <Footer />
        </Stack>
      </ThemeProvider>
    </ReduxProvider>
  );
}