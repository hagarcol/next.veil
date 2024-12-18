import { useState, useEffect } from "react";

// @mui
import { Stack, Grid, useTheme, useMediaQuery } from "@mui/material";

// components
import RevenueTitle from "../Title";
import TextSection from "@/components/Custom/TextSection";
import CustomBox from "@/components/Custom/Box";
import CustomContainer from "@/components/Custom/Container";

interface CountItemType {
  count: string;
  unit: string;
}

interface TimeUnit {
  title: string;
  value: number;
}

const CountItem = ({
  count,
  unit
}: CountItemType) => {
  return (
    <CustomBox 
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

const CountSection = () => {
  const theme = useTheme();
  const islgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 16,
    minutes: 25,
    seconds: 27
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && 
            prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits: TimeUnit[] = [
    { title: "Days", value: timeLeft.days },
    { title: "Hours", value: timeLeft.hours },
    { title: "Minutes", value: timeLeft.minutes },
    { title: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <CustomContainer>
      <Stack alignItems="center" padding="0 12px">
        <Stack 
          alignItems="center"
          width={islgScreen ? "66.6667%" : "100%"}
        >
          <RevenueTitle 
            title="Next Revenue Share Airdrop"
            description="Countdown till next Payout"
          />

          <Grid container spacing={2}>
            {timeUnits.map((unit, index) => (
              <Grid key={unit.title} item xs={6} sm={6} md={3}>
                <CountItem 
                  count={unit.value.toString().padStart(2, '0')} 
                  unit={unit.title}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </CustomContainer>
  )
};

export default CountSection;