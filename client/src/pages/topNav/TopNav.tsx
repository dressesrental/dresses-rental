import { Chip, Icon, IconButton, Link } from '@mui/material';
import react, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Login } from '@pages/conected/login/Login';
import { Register } from '@pages/conected';
import { EditUser } from '@pages/users';
import { UsersMenu } from '@pages/users/users-menu';



export const TopNav = () => {
    const navigate = useNavigate();
    // const [login,setLogin] =useState<boolean>(false);

    // const loginFalse=(p:boolean)=>{
    //     setLogin(p);
    // }
    return (
        <>
            <p>topNav</p>
        <UsersMenu/>
            <Login/>
            {/* <Register/>
            <EditUser/> */}
            <button onClick={() => { navigate('/addOrder') }}>הוספת הזמנה</button>
        </>
    )
}