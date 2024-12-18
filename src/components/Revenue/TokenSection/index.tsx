// @ mui
import { Stack, useMediaQuery, useTheme } from "@mui/material";

//components
import TextSection from "@/components/Custom/TextSection";
import CustomButton from "@/components/Custom/Button";
import CustomBox from "@/components/Custom/Box";
import EastIcon from '@mui/icons-material/East';

const TokenSection = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("lg"));

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
          padding="0 16px"
          gap={4}
        >
          <Stack
            width={isNarrowScreen ? "100%" : "50%"}
            padding="0 12px"
          >
            <TextSection 
              text="Introducing our"
              variant="customFont"
              color="#8671FF"
              fontSize={32}
              align="left"
              margin="0 0 8px"
            />

            <TextSection 
              text="Revenue Share Program"
              variant="customFont"
              gradient={true}
              fontSize={40}
              align="left"
              margin="0 0 24px"
            />

            <TextSection 
              text="Join our revenue-sharing program and earn a share of our exchange and token fee profits based on your $Veil Token ownership."
              fontSize={16}
              fontWeight={400}
              align="left"
              margin="0 0 24px"
            />

            <Stack direction="row" gap={1}>
              <CustomButton text="About Token"/>

              <CustomButton text="View RevShare Wallet"/>
            </Stack>
          </Stack>

          <Stack
            sx={{
              padding: "0 12px",
              margin: "24px 0 0",
              width: isNarrowScreen ? "100%" : "42%",
            }}
          >
            <CustomBox 
              title={{
                text: "Total Paid Out So Far",
                align: "center",
                variant: "customFont",
                fontSize: 24,
                sx: {
                  padding: "8px 48px"
                }
              }}
              content={
                <Stack
                  sx={{
                    flexGrow: 1,
                    marginBottom: "4px",
                    borderBottomLeftRadius: "1rem",
                    borderBottomrightRadius: "1rem",
                    backgroundColor: "#202029",
                  }}
                >
                  <Stack
                    gap={2}
                    sx={{
                      flexGrow: 1,
                      padding: "24px 48px"
                    }}
                  >
                    <TextSection 
                      text="79.71 ETH"
                      variant="customFont"
                      align="center"
                      fontSize={40}
                      color="#8671FF"
                    />

                    <TextSection 
                      text="$306.2K USD"
                      align="center"
                      fontSize={20}
                      color="#FFFFFF80"
                    />
                  </Stack>
                  
                  <Stack 
                    padding="8px 16px"
                    borderTop="1px solid #343445"
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    gap={1}
                  > 
                    <TextSection
                      text="LAST PAYOUT:"
                      align="center"
                      fontSize={14}
                      fontWeight={400}
                      color="#FFFFFF80"
                    />

                    <EastIcon 
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        cursor: "pointer",
                        "&:hover":{
                          color: "#8671ff"
                        }
                      }}
                    />
                  </Stack>
                </Stack>
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
};

export default TokenSection;