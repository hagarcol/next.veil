// @mui
import { Stack, useTheme } from "@mui/material";

// component
import TextSection from "../TextSection";

interface PropsType {
  title?: null | {
    text: string; 
    align: "left" | "center" | "right";
    variant?: "customFont"; 
    fontSize?: number;
    color?: string;
    gradient?: boolean;
    fontWeight?: number;
    fontStyle?: string;
    lineHeight?: number;
    margin?: string;
    sx?: Record<string, string | number | boolean | Record<string, string | number>>;
  };
  content?: React.ReactNode; 
  sx?: Record<string, string | number | boolean | Record<string, string | number>>;
};

const CustomBox = ({
  title,
  content,
  sx
}: PropsType) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        borderRadius: "1rem",
        border: "1px solid #343445",
        backgroundColor: theme.palette.primary.light,
        ...sx
      }}
    >
      {title && title.text && 
        <TextSection 
          text={title.text}
          align={title.align}
          {...title.variant && {variant: title.variant}}
          fontSize={title.fontSize}
          sx={title.sx}
        />
      }

      {content}
    </Stack>
  )
};

export default CustomBox;