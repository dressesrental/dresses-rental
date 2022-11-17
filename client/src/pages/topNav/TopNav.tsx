import { Chip, Icon, IconButton, Link } from '@mui/material';
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddOrder } from '../addOrder/AddOrder';
import { Login } from '@pages/conected/login/Login';

export const TopNav = () => {
    const navigate = useNavigate();
    const [login,setLogin]=useState(false);

    const loginFalse=(p:boolean)=>{
        setLogin(p);
    }
    return (
        <>
            <p>topNav</p>
          
            <Login/>
            <button onClick={() => { navigate('/addOrder') }}>הוספת הזמנה</button>
        </>
    )
}