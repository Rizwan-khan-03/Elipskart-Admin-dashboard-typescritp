import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialog({confirm,setConfirm,setDeleteConfirm}:any) {
  const handleClose = async() => {
    await setConfirm((prev:any) => ({
        ...prev,
        confirm:false,
        open:false ,
        message: '',
        title: '',
      }))
  };
  const handleDelete = async() => {
      await setConfirm((prev:any) => ({
          ...prev,
          confirm:true,
          open:false ,
          message: '',
          title: '',
        }))
        await setDeleteConfirm(true)
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
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}