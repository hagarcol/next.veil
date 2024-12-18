// @mui
import { Stack, Typography, useTheme } from "@mui/material";

// component
import TextSection from "../TextSection";

interface PropsType {
  title?: null | any;
  content?: null | any;
  sx?: any
}

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