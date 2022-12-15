import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, Chip, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getUserByPhoneNumberServ } from '../../../service/users.service';
import { useAppDispatch } from '@app/hooks';
import useStyles from './Login.styles';

export const Login = () => {
  const classes=useStyles()
  const [open, setOpen] = React.useState(false);
  const [phon, setPhon] = React.useState('');
  const dispatch=useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const subscribe = () => {
    dispatch(getUserByPhoneNumberServ(phon));
    handleClose();
  }
  return (
    <div>
      <Link onClick={handleClickOpen}>
        <Chip icon={<IconButton>
          <AccountCircleIcon />
        </IconButton>} label="Login/Logout" />
      </Link>
      <Dialog open={open} className={classes.dialog}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="phone number"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setPhon(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={subscribe}>Subscribe</Button>
        </DialogActions>
        <Link />
      </Dialog>
    </div>
  );
}
