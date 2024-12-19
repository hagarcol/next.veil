// @ mui
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

//components
import TextSection from "@/components/Custom/TextSection";
import CustomButton from "@/components/Custom/Button";

// data
import { VEIL_TOKENOMICS_DATA } from "@/assets/data";

// redux
import { isModalOpen, setModalType } from "@/redux/slices/extra";
import { dispatch } from "@/redux/store";

interface PropsType {
  index: number;
  name: string;
  amount: string;
}

const TokenomicItem = ({
  index,
  name,
  amount
}: PropsType) => {
  return (
    <Stack 
      direction="row" 
      justifyContent='space-between' 
      padding="16px"
      sx={{
        backgroundColor: "#16161C",
        borderBottom: index !== 2 ? "1px solid #343445" : "none"
      }}
    >
      <Stack direction="row" alignItems="center">
        <TextSection 
          text={name}
          fontSize={20}
          fontWeight={400}
          align="left"
          color="#DEDEDE"
        />

        {index === 0 && (
          <TextSection 
            text="(Buy/Sell)"
            fontSize={17.5}
            fontWeight={400}
            align="left"
            color="#DEDEDE80"
          />
        )}
      </Stack>

      <TextSection 
        text={amount}
        fontSize={20}
        align="right"
        color="#8671FF"
      />
    </Stack>
  )
}

const TokenSection = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery("(max-width:992px)");
  const ismdOverScreen = useMediaQuery(theme.breakpoints.up("md"));

  const alignValue = ismdOverScreen ? "left" : "center";

  return (
    <>
      <Stack
        minHeight="60vh"
        sx={{
          backgroundImage: "url(/images/background.webp)",
          padding: "200px 0px 100px"
        }}
        >
        <Stack
          direction={isNarrowScreen ? "column" : "row"}
          justifyContent="space-between"
          maxWidth="1280px"
          width="100%"
          margin="0 auto"
          gap={4}
        >
          <Stack
            maxWidth={isNarrowScreen ? "100%" : "530px"}
            width={isNarrowScreen ? "100%" : "50%"}
            padding="0 12px"
            margin={isNarrowScreen ? "0 0 48px " : "0 0"}
          >
            <TextSection 
              text="Introducing"
              variant="customFont"
              gradient={true}
              fontSize={isNarrowScreen ? 48 : 64}
              align={alignValue}
              margin="0 0"
            />

            <TextSection 
              text="$Veil Token"
              variant="customFont"
              color="#8671FF"
              fontSize={isNarrowScreen ? 48 : 64}
              align={alignValue}
              margin="0 0 8px"
            />

            <TextSection 
              text="Introducing our utility token to support the Veil exchange platform."
              variant="customFont"
              fontSize={20}
              fontWeight={400}
              align={alignValue}
              margin="0 0 24px"
              sxText={{
                lineHeight: 2
              }}
            />
            
            <TextSection 
              text="Contract: 0xb244b3574a5627849fca2057e3854340def63071"
              variant="customFont"
              fontSize={20}
              fontWeight={400}
              align={alignValue}
              margin="0 0 24px"
              sxText={{
                lineHeight: 2
              }}
            />

            <Stack direction={ismdOverScreen ? "row" : "column"} gap={2} justifyContent={alignValue}>
              <CustomButton text="Buy Token"/>
              
              <Stack
                alignSelf="center"
                onClick={() => {
                  dispatch(setModalType("locked"));
                  dispatch(isModalOpen(true));
                }}
              >
                <Typography
                  fontSize={16}
                  sx={{
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                    cursor: "pointer",
                    color: "white",
                    transition: "color 0.5s",
                    "&:hover": {
                      color: "#8671FF"
                    }
                  }}
                >
                  View Chart
                </Typography>

              </Stack>
            </Stack>
          </Stack>

          <Stack width={isNarrowScreen ? "100%" : "41.66%"} alignSelf="center" padding="0 12px">
            <Stack>
              <TextSection 
                text="$Veil Tokenomics"
                variant="customFont"
                gradient={true}
                fontSize={40}
                align="center"
                margin="0 0 24px"
              />

              <Stack>
                {VEIL_TOKENOMICS_DATA.map((item, index) => (
                  <TokenomicItem 
                    key={index}
                    index={index}
                    name={item.name}
                    amount={item.amount}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
};

export default TokenSection;