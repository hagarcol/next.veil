// @mui
import { Stack } from "@mui/material"

// components
import TextSection from "@/components/Custom/TextSection";

interface PropsType {
  title: string;
  description: string;
}

const RevenueTitle = ({
  title,
  description
}: PropsType) => {
  return (
    <Stack
      direction="column"
    >
      <TextSection 
        text={title}
        variant="customFont"
        color="#8671FF"
        fontSize={32}
        align="center"
        margin="0 0 8px"
      />

      <TextSection 
        text={description}
        variant="customFont"
        gradient={true}
        fontSize={40}
        align="center"
        margin="0 0 24px"
      />
    </Stack>
  )
};

export default RevenueTitle;