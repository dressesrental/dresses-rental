import {  Outlet, useNavigate } from 'react-router-dom';

export const TopNav = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>topNav</p>
            <button onClick={() => { navigate('/orders/new') }}>הוספת הזמנה</button>
            <button onClick={() => { navigate('/') }}>בית </button>
            <Outlet />
        </div>
    )
}