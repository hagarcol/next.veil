import { createTheme } from '@mui/material/styles';
import breakpoints from './breakpoints';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    customFont: React.CSSProperties; 
  }
  interface TypographyVariantsOptions {
    customFont?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    customFont: true;
  }
}

const theme = createTheme({
  breakpoints,
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    customFont: {
      fontFamily: 'Space Grotesk, sans-serif',
    },
  },
  palette: {
    primary: {
      main: '#8671FFCC',
      dark: "#16161C",
      light: "#2d2d39"
    },
    secondary: {
      main: "#8576da",
    },
  },
});

export default theme;
