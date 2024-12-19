// @mui
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material"

//components
import FloatingImage from "./FloatingImage";

// types
import { CORE_BENEFITS_ITEM_TYPE } from "../types"

const CustomCard = ({ props, isNarrowScreen }: {props: CORE_BENEFITS_ITEM_TYPE, isNarrowScreen: boolean}) => {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));
  const {img, subTitle, content} = props;

  return (
    <Stack
      sx={{
        width: isNarrowScreen ? "100%" : "33%",
        margin: "0 12px",
        border: "1px solid #343445",
        borderRadius: "1rem",
        backgroundColor: "#2d2d39",
      }}
    >
      <Stack 
        direction="column"
        justifyContent="space-between"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          width: "100%",
          height: "100%", 
        }}
      >
        <FloatingImage src={img} alt="Lock" height={isWideScreen ? 170 : 120}/>

        <Stack
          padding="24px"
          sx={{
            backgroundColor: "#202029",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            flexGrow: 1, 
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="customFont"
            fontSize={28}
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            margin="0 0 1rem"
          >
            {subTitle}
          </Typography>

          <Typography
            color={theme.palette.secondary.main}
            fontSize={16}
            sx={{
              marginBottom: "0px !important",
              flexGrow: 1
            }}
          >
            {content}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
};

export default CustomCard;