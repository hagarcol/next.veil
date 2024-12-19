import { useState, useEffect } from 'react';

// @mui
import {
  Modal,
  Box,
  Typography,
  Button,
  Paper,
  IconButton,
  useTheme,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [dontShowToday, setDontShowToday] = useState(false);
  const theme = useTheme();

  const userName = "";

  const handleClose = () => {
    if (dontShowToday) {
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      localStorage.setItem('welcomeModalExpiration', today.toString());
    }
    setIsOpen(false);
  };

  const handleDontShowToday = (value: boolean) => {
    setDontShowToday(value);
  }

  useEffect(() => {
    const expirationDate = localStorage.getItem('welcomeModalExpiration');
    if (expirationDate) {
      const expiration = new Date(expirationDate);
      if (new Date() < expiration) {
        setIsOpen(false);
      }
    }
  }, []);

  const modalWelcomeText = "We're excited to have you here! Explore our platform and discover amazing features designed to enhance your experience.";
  const modalDismissText = "Don't show again today";

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="welcome-modal-title"
      aria-describedby="welcome-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500 },
          maxWidth: '100%',
          outline: 'none',
        }}
      >
        <Paper
          elevation={24}
          sx={{
            position: 'relative',
            p: 4,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
            color: 'white',
            padding: "32px 32px 0"
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: "28px" }}/>
          </IconButton>

          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography
              id="welcome-modal-title"
              variant="customFont"
              fontSize={40}
              component="h2"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Welcome {userName ? `, ${userName}!` : '! 👋'}
            </Typography>
            
            <Typography
              id="welcome-modal-description"
              variant="body1"
              fontSize={14}
              sx={{ mb: 4, opacity: 0.9 }}
            >
              {modalWelcomeText}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 3 }}>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                <Typography fontSize={12}>
                  Get Started
                </Typography>
              </Button>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <Typography fontSize={12}>
                  Take a Tour
                </Typography>
              </Button>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={dontShowToday}
                  onChange={(e) => handleDontShowToday(e.target.checked)}
                  size='large'
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}
                />
              }
              label={
                <Typography fontSize={14} sx={{ opacity: 0.9 }}>
                  {modalDismissText}
                </Typography>
              }
              sx={{
                color: 'white',
                justifyContent: 'center',
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default WelcomeModal;