import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { categoryLinks, routepath } from '../../../Router/RouteList';
import Category from '../../Maincomponent/Category';

export default function AddCategory({ openModal, setOpenModal }: any) {
    const [val, setVal] = React.useState('');
    const handleClose = () => {
        let vals = val.trim().replace(/\s+/g, '').toLowerCase();
        categoryLinks.push(vals)
        routepath.push({
            path: `/${vals.trim()}`,
            Element: () => <Category comp={vals} />,
            private: true,  
        });
        setOpenModal(false);
        setVal('')
    };
    return (
        <div>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Add Custom Category As Per Your Business Requirements
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter Category"
                        type="text"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}