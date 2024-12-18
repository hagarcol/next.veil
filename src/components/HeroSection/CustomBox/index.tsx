import { Stack, Typography, useTheme } from "@mui/material"

interface PropsType {
  title: string,
  content: string,
  flag: boolean,
}

const CustomBox = (props: PropsType) => {
  const theme = useTheme();
  const {title, content, flag} = props;

  return (
    <Stack
      sx={{
        width: flag ? "100%" : "49%",
        padding: "16px",
        borderRadius: "1rem",
        border: "1px solid #343445"
      }}
    >
      <Typography
        fontSize={14}
        textTransform="uppercase"
        color="white"
        sx={{
          margin: "0 0 8px"
        }}
      >
        {title}
      </Typography>

      <Typography
        variant='customFont'
        fontSize={24}
        fontWeight={700}
        color={theme.palette.primary.main}
      >
        {content}
      </Typography>
    </Stack>
  )
}

export default CustomBox;