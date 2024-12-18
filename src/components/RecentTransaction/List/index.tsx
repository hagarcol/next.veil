import Image from "next/image";
// @mui
import { Stack, Typography, useTheme, Theme } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// data
import { RECENT_TRANSACTION } from "@/assets/data";

interface PropsType {
  theme: Theme,
  data: {
    date: string,
    time: string,
    crypto1: string,
    crypto2: string,
    amount: string,
  }
}

const Item = (props: PropsType) => {
  const { theme, data } = props;
  const { date, time, crypto1, crypto2, amount } = data;

  return (
    <Stack
      sx={{
        borderRadius: "1rem",
        color: "#dedede",
        padding: "2px 2px 8px 2px",
        backgroundColor: "#343445",
      }}
    >
      <Stack
        direction="row"
        padding="16px"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderRadius: "1rem",
          backgroundColor: theme.palette.primary.light
        }}
      >
        <Stack direction="row" alignItems="center">
          <AccessTimeIcon sx={{ fontSize: 24}} />

          <Typography fontSize={16} marginLeft={1}>{date} - {time}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Image 
            src={crypto1}
            alt="crypto"
            width={24}
            height={24}
          />

          <Typography fontSize={16} marginLeft={1}>{amount}</Typography>

          <EastIcon sx={{ margin: "0 16px", fontSize: 16}}/>

          <Image 
            src={crypto2}
            alt="crypto"
            width={24}
            height={24}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

const TransactionList = () => {
  const theme = useTheme();

  return (
    <Stack gap={0.5}>
      {RECENT_TRANSACTION.map((item, index) => (
        <Item
          key={index}                                                                        
          theme={theme}
          data={item}         
        />                  
      ))}
    </Stack>
  )
};

export default TransactionList;