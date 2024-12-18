import { Checkbox, styled } from "@mui/material";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "transparent",
  border: "2px solid #444",
  borderRadius: "4px",
  width: "20px",
  height: "20px",
  padding: 0,
  transition: 'all 0.2s ease',
  "& .MuiSvgIcon-root": {
    display: "none",
    transition: 'transform 0.2s ease',
  },
  "&.Mui-checked": {
    backgroundColor: "#191919",
    border: "2px solid #A970FF",
    boxShadow: "0 0 8px 4px rgba(169, 112, 255, 0.4)",
    color: "#FFFFFF",
    "& .MuiSvgIcon-root": {
      display: "block",
      transform: 'scale(1)',
    },
  },
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#8671ff",
    transform: 'scale(1.05)',
  },
}));

export default CustomCheckbox;