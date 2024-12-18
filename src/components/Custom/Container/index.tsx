// @mui
import { Stack, useTheme, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";

interface CustomContainerProps {
  children: ReactNode;
  maxWidth?: string | number;
  customMargin?: {
    mobile?: string;
    desktop?: string;
  };
  customPadding?: {
    mobile?: string;
    desktop?: string;
  };
}

const CustomContainer = ({
  children,
  maxWidth = "1280px",
  customMargin,
  customPadding,
}: CustomContainerProps) => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Stack
        sx={{
          margin: customMargin 
            ? (isNarrowScreen ? customMargin.mobile : customMargin.desktop)
            : (isNarrowScreen ? "24px 0" : "48px auto"),
          padding: customPadding
            ? (isNarrowScreen ? customPadding.mobile : customPadding.desktop)
            : (isNarrowScreen ? "24px 16px" : "48px 16px"),
          maxWidth,
          width: '100%',
          boxSizing: "border-box",
        }}
      >
        {children}
      </Stack>
    </div>
  );
};

export default CustomContainer;