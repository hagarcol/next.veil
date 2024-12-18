// @ mui
import { Stack, useMediaQuery } from "@mui/material";

//components
import TextSection from "@/components/Custom/TextSection";
import CustomButton from "@/components/Custom/Button";
import CustomBox from "@/components/Custom/Box";
import EastIcon from '@mui/icons-material/East';

// data
import { VEIL_TOKENOMICS_DATA } from "@/assets/data";
import { Padding } from "@mui/icons-material";

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
          align="left"
          color="#DEDEDE"
        />

        <TextSection 
          text="(Buy/Sell)"
          fontSize={17.5}
          align="left"
          color="#DEDEDE"
        />
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
  const isNarrowScreen = useMediaQuery("(max-width:992px)");

  return (
    <>
      <Stack
        minHeight="65vh"
        sx={{
          backgroundImage: "url(/images/background.webp)",
          padding: "200px 0px"
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
            width={isNarrowScreen ? "100%" : "50%"}
          >
            <TextSection 
              text="Introducing"
              variant="customFont"
              gradient={true}
              fontSize={64}
              align="left"
              margin="0 0 24px"
            />

            <TextSection 
              text="$Veil Token"
              variant="customFont"
              color="#8671FF"
              fontSize={64}
              align="left"
              margin="0 0 8px"
            />

            <TextSection 
              text="Introducing our utility token to support the Veil exchange platform."
              variant="customFont"
              fontSize={20}
              fontWeight={400}
              align="left"
              margin="0 0 24px"
            />
            
            <TextSection 
              text="Contract: 0xb244b3574a5627849fca2057e3854340def63071"
              variant="customFont"
              fontSize={20}
              fontWeight={400}
              align="left"
              margin="0 0 24px"
            />

            <Stack direction="row" gap={1}>
              <CustomButton text="Buy Token"/>

              <CustomButton text="View Chart"/>
            </Stack>
          </Stack>

          <Stack width="41.66%">
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
    </>
  )
};

export default TokenSection;