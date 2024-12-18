// @mui
import { Stack } from '@mui/material';
import { useMediaQuery } from '@mui/material';

// component
import CustomBox from '../CustomBox';


const StatsSection = () => {
  const isNarrowScreen = useMediaQuery('(max-width:576px)');

  return (
    <Stack 
      direction={isNarrowScreen ? "column" : "row"}
      gap={2}
      sx={{
        width: "100%",
        margin: "48px -8px",
      }}
    >
      <CustomBox 
        title='Lifetime Volume Swapped'
        content='$42,464,823'
        flag={isNarrowScreen}
      />

      <CustomBox 
        title='Past 24-Hour Volume'
        content='$87,721'
        flag={isNarrowScreen}
      />
    </Stack>
  )
}

export default StatsSection;