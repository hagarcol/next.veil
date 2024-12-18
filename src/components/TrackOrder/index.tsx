// @mui
import { Stack } from "@mui/material";

// components
import TrackOrderTitle from "./Title";
import TrackOrderInput from "./Input";

const TrackOrder = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#16161C"
      }}
    >
      <Stack
        margin="48px auto"
        padding="48px 16px"
        maxWidth="960px"
        width="100%"
      >
        <TrackOrderTitle />

        <TrackOrderInput />
      </Stack>
    </Stack>
  )
}

export default TrackOrder;