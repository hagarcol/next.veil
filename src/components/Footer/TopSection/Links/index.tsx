// @mui
import { Stack } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const style = {
  color: "white",
  fontSize: 28,
}

const FooterLinks = () => {
  return (
    <Stack direction="row" gap={2} alignItems="center" padding="0 12px" justifyContent="center">
      <TwitterIcon sx={style} />

      <TelegramIcon sx={style} />

      <MenuBookIcon sx={style} />
    </Stack>
  )
};

export default FooterLinks;