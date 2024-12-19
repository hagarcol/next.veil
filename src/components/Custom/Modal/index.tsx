import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @mui
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Box,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

// redux
import { RootState } from '@/redux/types';
import { isModalOpen } from '@/redux/slices/extra';

const WaitingModal = () => {
  const dispatch = useDispatch();
  const { open, type } = useSelector((state: RootState) => state.extra);

  const theme = useTheme();
  const Icon = type === 'locked' ? LockOutlinedIcon : ConstructionOutlinedIcon;

  const onClose = () => {
    dispatch(isModalOpen(false));
  }

  const messages = {
    locked: {
      title: 'This feature is not available on your current plan.',
      subtitle: 'Please upgrade your subscription to access this and other premium features.'
    },
    development: {
      title: 'This feature is currently under development.',
      subtitle: "We're working hard to bring this feature to you soon!"
    }
  };
  
  const content = messages[type === 'locked' ? 'locked' : 'development'];
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          position: 'relative'
        }
      }}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            margin: 2
          }
        },
        '& .MuiBackdrop-root': {
          width: '100% !important'
        }
      }}
      hideBackdrop={false}
      disableScrollLock={false}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500]
        }}
      >
        <CloseIcon sx={{ fontSize: 30 }}/>
      </IconButton>

      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Box
          sx={{
            backgroundColor: theme.palette.grey[100],
            borderRadius: '50%',
            width: 100,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: 2
          }}
        >
          <Icon sx={{ fontSize: 70, color: theme.palette.primary.main }} />
        </Box>

        <DialogTitle sx={{ p: 0, mb: 2 }}>
          <Typography variant='customFont' fontWeight={700} fontSize={28}>
            {type === 'locked' ? 'Feature Unavailable' : 'Coming Soon'}
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ p: 0, mb: 3 }}>
          <>
            <Typography variant="body1" color="text.secondary" gutterBottom fontSize={18}>
              {content.title}
            </Typography>
            
            <Typography variant="body1" color="text.secondary" fontSize={14}>
              {content.subtitle}
            </Typography>
          </>
        </DialogContent>

        <DialogActions sx={{ p: 0, justifyContent: 'center', gap: 1 }}>
          {type === 'locked' && (
            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
              disabled
              sx={{ 
                minWidth: 120,
                fontSize: 14
              }}
            >
              Upgrade Plan
            </Button>
          )}

          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ 
              minWidth: 120,
              fontSize: 14
            }}
          >
            {type === 'locked' ? 'Maybe Later' : 'Got It'}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default WaitingModal;