// @mui
import { Box, Stack, Typography, useTheme } from "@mui/material"

//components
import FloatingImage from "@/components/CoreBenefits/CustomCard/FloatingImage";

// types
import { LATEST_UPDATES_ITEM_TYPE } from "../types";

const CustomCard = ({ props, isWideScreen }: {props: LATEST_UPDATES_ITEM_TYPE, isWideScreen: boolean}) => {
  const theme = useTheme();
  const {img, label, title, content, date} = props;

  return (
    <Stack
      sx={{
        width: !isWideScreen ? "100%" : "33%",
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
        <FloatingImage src={img} alt="Lock" height={100}/>

        <Stack
          padding="24px"
          gap={2}
          sx={{
            backgroundColor: "#202029",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            flexGrow: 1, 
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            width="116px"
            marginLeft="auto"
            marginRight="auto"
            textAlign="center"
            sx={{
              borderRadius: "0.5rem",
              backgroundColor: "rgba(134,113,255)"
            }}
          >
            <Typography
              variant="customFont"
              textTransform="uppercase"
              color="white"
              fontSize={15}
              fontWeight={700}
            >
              {label}
            </Typography>
          </Box>

          <Typography
            variant="customFont"
            fontSize={28}
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            margin="0 0 1rem"
            textAlign="center"
          >
            {title}
          </Typography>

          <Typography
            variant="customFont"
            color={theme.palette.secondary.main}
            fontSize={28}
            fontWeight={700}
            textAlign="center"
            sx={{
              marginBottom: "0px !important",
              flexGrow: 1
            }}
          >
            {content}
          </Typography>
        </Stack>

        <Typography
          textAlign="center"
          fontSize={16}
          padding="8px 16px"
          sx={{
            color: "hsla(0,0%,100%,.5)!important"
          }}
        >
          Released: {date}
        </Typography>
      </Stack>
    </Stack>
  )
};

export default CustomCard;