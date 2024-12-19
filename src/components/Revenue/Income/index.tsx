// @mui
import { Stack, useMediaQuery, useTheme } from "@mui/material";

// components
import CustomContainer from "@/components/Custom/Container";
import TextSection from "@/components/Custom/TextSection";
import CustomBox from "@/components/Custom/Box";

interface IncomeProps {
  title: string;
  amount: string;
  unit: string;
  width: string;
}

const IncomeItem = ({
  title,
  amount,
  unit,
  width
}: IncomeProps) => {
  return (
    <CustomBox 
      sx={{
        width: width
      }}
      title={{
        text: title,
        fontSize: 20,
        align: "center",
        variant: "customFont",
        sx: {
          padding: "8px 24px",
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
              text={amount}
              variant="customFont"
              align="center"
              fontSize={40}
              color="#8671FF"
            />

            <TextSection 
              text={unit}
              align="center"
              fontSize={20}
              color="#FFFFFF80"
            />
          </Stack>
        </Stack>
      }
    />
  )
}
const RevenueIncome = () => {
  const theme = useTheme();
  const islgOverScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const ismdOverScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <CustomContainer>
      <Stack alignItems="center">
        <Stack
          width={
            islgOverScreen
              ? "calc(100% / 12 * 8)"
              : "100%"
          }
        >
          <TextSection 
            text="Our Revenue Income"
            variant="customFont"
            gradient={true}
            fontSize={40}
            align="center"
            margin="0 0 24px"
          />

          <TextSection 
            text="Overview for Revenue generated from Veil Exchange & Token Fees"
            color="#8671FF"
            fontSize={16}
            fontWeight={400}
            align="center"
            margin="0 0 16px"
          />

          <Stack gap={2}>
            <Stack direction={ismdOverScreen ? "row" : "column"} justifyContent="space-between" gap={2}>
              <IncomeItem 
                title="Revenue from Exchange"
                amount="3.38 ETH"
                unit="$ USD"
                width={ismdOverScreen ? "49.99%" : "100%"}
              />

              <IncomeItem 
                title="Revenue from Token Fees"
                amount="ETH"
                unit="$ USD"
                width={ismdOverScreen ? "49.99%" : "100%"}
              />
            </Stack>

            <IncomeItem 
              title="Total Revenue"
              amount="3.38 ETH"
              unit="$ USD"
              width="100%"
            />
          </Stack>
        </Stack>
      </Stack>
    </CustomContainer>
  )
};

export default RevenueIncome;