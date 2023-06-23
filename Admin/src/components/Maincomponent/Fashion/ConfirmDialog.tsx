import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialog({ confirm, setConfirm, handleDelete }: any) {
  const handleClose = async () => {
    await setConfirm((prev: any) => ({
      ...prev,
      confirm: false,
      open: false,
      message: '',
      title: '',
      id: ''
    }))
  };
  const handleDelet = async () => {
    await handleDelete()
    await setConfirm((prev: any) => ({
      ...prev,
      confirm: true,
      open: false,
      message: '',
      title: '',
      id: ''

    }))
  };

  return (
    <div>
      <Dialog
        open={confirm?.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {confirm?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirm?.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelet} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}