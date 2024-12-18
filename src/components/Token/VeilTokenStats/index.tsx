// @mui
import { Stack, Grid, Typography } from "@mui/material";

// components
import TextSection from "@/components/Custom/TextSection";
import CustomBox from "@/components/Custom/Box";
import CustomContainer from "@/components/Custom/Container";

//icons
import EthereumIcon from "./icon/EthereumIcon";
import HolderIcon from "./icon/HolderIcon";
import TransactionIcon from "./icon/TransactionIcon";
import EthIcon from "./icon/EthIcon";
import MarketIcon from "./icon/MarketIcon";

interface CountItemType {
  index: number;
  title: string;
  count: string;
}

interface TimeUnit {
  title: string;
  count: string;
}

const Icons = [
  { icon: <HolderIcon /> },
  { icon: <TransactionIcon /> },
  { icon: <EthIcon /> },
  { icon: <MarketIcon /> },
];

const StatsItem = ({
  index,
  title,
  count
}: CountItemType) => {
  return (
    <CustomBox 
      title={{
        text: title,
        variant: "customFont",
        align: "center",
        fontSize: 24,
        fontWeight: 700,
        sx: {
          padding: "8px 16px"
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
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              flexGrow: 1,
              padding: "16px"
            }}
          >
            {Icons[index].icon}

            <TextSection 
              text={count}
              variant="customFont"
              align="center"
              fontSize={40}
              color="#8671FF"
            />
          </Stack>
        </Stack>
      }
    />
  )
}

const VeilTokenStats = () => {
  const TokenStats: TimeUnit[] = [
    { title: "Total Holders", count: "5,687" },
    { title: "Total Transactions", count: "41,550" },
    { title: "Liquidity", count: "309.7K" },
    { title: "Market Cap", count: "1.0M" }
  ];

  return (
    <CustomContainer>
      <Stack>
        <Stack margin="0 0 48px">
          <TextSection 
            text="$Veil Token Stats"
            align="center"
            variant="customFont"
            gradient={true}
            fontSize={40}
            margin="0 0 24px"
          />

          <Stack direction="row" gap={1} justifyContent="center">
            <EthereumIcon />

            <Typography
              fontSize={16}
              textAlign="center"
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
              View on Etherscan
            </Typography>
          </Stack>
        </Stack>

        <Grid container spacing={2}>
          {TokenStats.map((stat, index) => (
            <Grid key={index} item xs={6} xl={3}>
              <StatsItem 
                index={index}
                title={stat.title}
                count={stat.count} 
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </CustomContainer>
  )
};

export default VeilTokenStats;