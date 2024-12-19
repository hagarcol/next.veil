// @mui
import { Stack } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// redux
import { dispatch } from "@/redux/store";
import { setModalType, isModalOpen } from "@/redux/slices/extra";

const style = {
  color: "white",
  fontSize: 28,
  cursor: "pointer",
  "&:hover": {
    color: "#8671FF"
  }
}

const FooterLinks = () => {

  const handleClick = () => {
    dispatch(setModalType("coming-soon"));
    dispatch(isModalOpen(true));
  }

  return (
    <Stack direction="row" gap={2} alignItems="center" padding="0 12px" justifyContent="center">
      <TwitterIcon sx={style} onClick={handleClick}/>

      <TelegramIcon sx={style} onClick={handleClick}/>

      <MenuBookIcon sx={style} onClick={handleClick}/>
    </Stack>
  )
};

export default FooterLinks;