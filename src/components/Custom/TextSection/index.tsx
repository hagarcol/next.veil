// @mui
import { Stack, Typography, useTheme } from "@mui/material"

// components
import { GradientText } from "@/components/HeroSection/TitleSection"

interface PropsType {
  text: string;
  align: "center" | "left" | "right";
  color?: string;
  gradient?: boolean;
  variant?: "customFont";
  fontSize?: number;
  fontWeight?: number;
  fontStyle?: string;
  lineHeight?: number;
  margin?: string;
  sx?: Record<string, string | number | boolean | Record<string, string | number>>; 
}

const TextSection = ({
  text,
  variant,
  align = "center",
  color = "white",
  gradient = false,
  fontSize = 40,
  fontWeight = 700,
  fontStyle,
  lineHeight = 1.2,
  margin,
  sx
}: PropsType) => {
  const theme = useTheme();
  
  return (
    <Stack alignItems={align} sx={sx}>
      {gradient ? (
        <GradientText
          {...(variant === "customFont" && { variant: "customFont" })}
          {...(fontStyle && { fontStyle })}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          textAlign={align}
          sx={{
            width: "fit-content",
            margin: margin || 0
          }}
        >
          {text}
        </GradientText>
      ) : (
        <Typography
          {...(variant === "customFont" ? { variant: "customFont" } : {fontFamily: theme.typography.fontFamily})}
          {...(fontStyle && { fontStyle })}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          textAlign={align}
          color={color}
          sx={{
            width: "fit-content",
            margin: margin || 0
          }}
        >
          {text}
        </Typography>
      )}
    </Stack>
  )
}

export default TextSection;