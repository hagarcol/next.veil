// @mui
import { Stack, Grid } from "@mui/material";

// components
import TextSection from "@/components/Custom/TextSection";
import CustomBox from "@/components/Custom/Box";

interface CountItemType {
  title: string;
  count: string;
}

interface TimeUnit {
  title: string;
  count: string;
}

const StatsItem = ({
  title,
  count
}: CountItemType) => {
  return (
    <CustomBox 
      title={{
        text: title,
        variant: "customFont",
        align: "left",
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
            sx={{
              flexGrow: 1,
              padding: "16px"
            }}
          >
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
    <Stack>
      <TextSection 
        text="$Veil Token Stats"
        align="center"
        variant="customFont"
        fontSize={40}
        margin="0 0 24px"
      />

      <Grid container spacing={2}>
        {TokenStats.map((stat, index) => (
          <Grid key={index} item xs={6} sm={6} md={3}>
            <StatsItem 
              title={stat.title}
              count={stat.count} 
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
};

export default VeilTokenStats;