// @mui
import { Stack, useTheme, Typography, useMediaQuery } from "@mui/material";

// components
import CustomContainer from "@/components/Custom/Container";
import TextSection from "@/components/Custom/TextSection";
import CustomBox from "@/components/Custom/Box";
import ChartSection from "./Chart";

// data
import { Revenue_Allocation_DATA } from "@/assets/data";

const RevenueAllocation = () => {
  const theme = useTheme();
  const islgOverScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <CustomContainer>
      <Stack direction={islgOverScreen ? "row" : "column"} justifyContent="space-between" gap={islgOverScreen ? 0 : 2}>
        <Stack
          padding="0 12px"
          sx={{
            width: islgOverScreen
              ?"calc(100% / 12 * 5)"
              : "100%"
          }}
        >
          <TextSection 
            text="Breakdown"
            align="left"
            variant="customFont"
            color="#8671FF"
            fontSize={32}
            margin="0 0 8px"
          />

          <TextSection 
            text="Our Revenue Allocation"
            gradient={true}
            align="left"
            fontSize={40}
            margin="0 0 24px"
          />

          <Typography
            fontSize={16}
            color="#DEDEDE"
            margin="0 0 24px"
          >
            Our Veil revenue is generated from the exchange processes & fees from the $Veil token. This is distributed to certain allocations for the upkeep of the platform, and distributed sharing. Here is the list of our allocations for each category.
          </Typography>

          <Stack gap={1}>
            {Revenue_Allocation_DATA.map((item, index) => (
              <CustomBox 
                key={index}
                content={
                  <Stack 
                    direction="row" 
                    justifyContent="space-between"
                    sx={{
                      padding: "16px",
                      backgroundColor: "#202029",
                      flexGrow: 1,
                      marginBottom: "4px",
                      borderBottomLeftRadius: "1rem",
                      borderBottomrightRadius: "1rem",
                    }}
                  >
                    <Typography
                      color="#DEDEDE"
                      fontSize={20}
                      align="left"
                      fontWeight={400}
                    >
                      {item.name}:
                    </Typography>

                    <Typography
                      color={item.color}
                      fontSize={20}
                      align="left"
                      fontWeight={400}
                    >
                      {item.percent}
                    </Typography>
                  </Stack>
                }
              />
            ))}
          </Stack>
        </Stack>

        <Stack
          padding="0 12px"
          alignSelf="center"
          alignItems="center"
          sx={{
            width: islgOverScreen
              ?"calc(100% / 12 * 6)"
              : "100%"
          }}
        >
          <ChartSection />
        </Stack>
      </Stack>
    </CustomContainer>
  )
};

export default RevenueAllocation;