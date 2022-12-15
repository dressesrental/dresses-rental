import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AddUser } from './addUser/AddUser';
import { RootState } from 'redux/store';
import { useAppSelector } from '@app/hooks';

export const UsersMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const currentUser = useAppSelector((state: RootState) => {
        return state.usersReducer.currentUser
    });
    const userIn = Boolean(currentUser._id != undefined);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();

    return (
        <>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                משתמשים
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => navigate('/users/new')} >הוספת משתמש חדש</MenuItem>
                {userIn && <MenuItem onClick={() => navigate('/users/edit')}>עריכת פרטי משתמש קיים</MenuItem>}
            </Menu>
        </>
    );
}
