import Image from "next/image"
import { useRouter } from "next/navigation";

// @mui
import { Stack, Typography } from "@mui/material"

// data
import { FOOTER_DATA } from "@/assets/data"

const Logo = () => {
  const router = useRouter();

  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      justifyContent="center"
      sx={{cursor: "pointer", padding: "0 12px"}}
      onClick={() => {
        router.push("/home")
      }}
    >
      <Image
        src={FOOTER_DATA.logo.img}
        alt="Veil Brand Icon"
        width={73}
        height={40}
        priority
      />
      
      <Typography variant="customFont" fontSize="24px" color="white">
        {FOOTER_DATA.logo.title}
      </Typography>
    </Stack>
  )
};

export default Logo;