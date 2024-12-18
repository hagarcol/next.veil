import { useState, useMemo } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

// @mui
import { Stack, Modal, Typography, useTheme, Button, useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

// components
import DarkTextField from "@/components/Custom/DarkTextField";
import AnimatedCryptoBox from "@/components/Custom/AnimatedCryptoBox";

// types
import { CRYPTO_TYPE, CRYPTO_DATA } from "@/assets/data";

// redux
import { setCrypto } from "@/redux/slices/crypto";

interface CryptoItemPropsType {
  cypto: CRYPTO_TYPE;
  handleClose: () => void;
}

interface CryptoModalPropsType {
  open: boolean;
  handleClose: () => void;
}


const CryptoItem = ({ cypto, handleClose }: CryptoItemPropsType) => {
  const dispatch = useDispatch();
  const {img, name, subName} = cypto;

  const handleSelectCrypto = () => {
    dispatch(setCrypto(cypto));
    handleClose();
  }

  return (
    <AnimatedCryptoBox>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        onClick={handleSelectCrypto}
        sx={{
          cursor: "pointer",
          padding: "24px",
          borderTop: "1px solid #343445",
          transition: "background-color 0.2s ease",
          '&:hover': {
            backgroundColor: "#34344580"
          }
        }}
      >
        <Image 
          src={img}
          alt={name}
          width={50}
          height={50}
        />

        <Stack>
          <Typography variant="customFont" fontSize="24px" fontWeight={700} textAlign="center" color="white">{name}</Typography>

          <Stack
            sx={{
              borderRadius: "1rem",
              padding: "6px 12px",
              backgroundColor: "rgba(22, 22, 28)",
              justifyContent: "center",
              width: "fit-content"
            }}
          
          >
            <Typography 
              fontSize="16px" 
              fontWeight={700} 
              color="grey"
              textAlign="center"
              padding={0}
              margin={0}
            >
              {subName}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </AnimatedCryptoBox>
  )
}

const CryptoModal = ({ open, handleClose }: CryptoModalPropsType) => {
  const isWideScreen = useMediaQuery("(min-width:992px)");
  const isNarrowScreen = useMediaQuery("(max-width:576px)");
  const theme = useTheme();
  const [originalData] = useState(CRYPTO_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = useMemo(() => {
    const term = searchTerm.toLocaleLowerCase().trim();

    if (!term) return originalData;

    return originalData.filter((item) => 
      item.name.toLowerCase().includes(term) || item.subName.toLowerCase().includes(term)
    );
  }, [originalData, searchTerm])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock  
        sx={{
          overflow: 'hidden',
        }}
        slotProps={{
          backdrop: {
            onClick: handleClose
          }
        }}
      >
        <Stack 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: isWideScreen ? 800 : !isNarrowScreen ? 500 : "100%",
            width: "100%",
            maxHeight: '90vh',
            bgcolor: theme.palette.primary.light,
            boxShadow: 24,
            borderRadius: "1rem",
            border: "1px solid #343445",
            outline: 'none',
            overflow: 'hidden',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              borderBottom: "1px solid #343445",
              padding: "16px"
            }}
          >
            <Typography variant="customFont" fontSize="24px" fontWeight={700} color="white">
              Select Crypto to Send
            </Typography>

            <Button sx={{ padding: "6px 12px", backgroundColor: theme.palette.primary.main, width: "50px" }} onClick={handleClose}>
              <CloseIcon sx={{ fontSize: "26px", color: "white" }} />
            </Button>
          </Stack>
          
          <Stack
            padding="2rem"
            sx={{
              overflowY: 'auto',
              maxHeight: 'calc(90vh - 69px)',
            }}
          >
            <Stack
              direction="row"
              width="100%"
              sx={{
                paddingBottom: "2rem",
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: "60px",
                  width: "50px",
                  backgroundColor: "#16161C",
                  borderTopLeftRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              >
                <SearchIcon sx={{ fontSize: "30px", color: "#666692" }}/>
              </Stack>

              <DarkTextField
                placeholder="Search..."
                variant="outlined"
                onChange={handleSearch}
                sx={{
                  flexGrow: 1,
                  height: "60px",
                  '& .MuiInputBase-root': {
                    backgroundColor: "#202029",
                    borderRadius: 0,
                    borderTopRightRadius: "1rem",
                    borderBottomRightRadius: "1rem",
                    '& input': {
                      fontSize: '20px',
                      fontWeight: 400,
                      padding: '12px 24px',
                    },
                  }
                }}
              />
            </Stack>
            
            <Stack>
              {filterData.map((item, index) => (
                <CryptoItem key={index} cypto={item} handleClose={handleClose} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
};

export default CryptoModal;