import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RootState } from 'redux/store';
import { useAppSelector } from '@app/hooks';

export const CollectionsMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
                שמלות
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
                <MenuItem onClick={() => navigate('/collections/new')} >הוספת סט</MenuItem>
                <MenuItem onClick={() => navigate('/collections/edit')}>עריכת סט</MenuItem>
                <MenuItem onClick={() => navigate('/collections/delete')}>מחיקת סט</MenuItem>
            </Menu>
        </>
    );
}
