import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { categoryLinks } from '../../../Router/RouteList';
import { deleteCategory } from '../../../App/Service/service.dashboard';
import { useAppDispatch } from "../../../App/Redux/hooks";
import { Dispatch } from "redux";
import { getUserId } from '../../../App/Service/Service';
export interface ConfirmationDialogRawProps {
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
        console.log('handleOk value', value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        console.log('handleChange value', value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>Remove Category</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {categoryLinks.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

export default function RemoveCategory({ open, setOpen ,categoryLinks,setCategoryLinks}: any) {
    
    const [value, setValue] = React.useState('Dione');
    const dispatch: Dispatch<any> = useAppDispatch();
    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = async(newValue?: string) => {
        setOpen(false);
        if (newValue) {
            setValue(newValue);
            const index = categoryLinks.indexOf(newValue);
            if (index > -1) { // only splice array when item is found
                categoryLinks.splice(index, 1); // 2nd parameter means remove one item only
            }
            const reslist: any = await dispatch(deleteCategory({ id: getUserId(), category: newValue }))
            if (reslist?.payload?.data?.success) {
                setCategoryLinks(reslist?.payload?.data?.updatedProduct)
            }
        }
        console.log('handleClose value', value);

    };

    return (
        // <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ConfirmationDialogRaw
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                />
        // </Box>
    );
}