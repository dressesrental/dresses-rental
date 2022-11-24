import { Outlet, useNavigate } from 'react-router-dom';
import "primereact/resources/themes/vela-blue/theme.css";
import "./Menu.css"


export const Menu = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>menu</p>
            <button onClick={() => { navigate('/orders/new') }}>הוספת הזמנה</button>
            <button onClick={() => { navigate('/') }}>בית </button>
            <button onClick={() => { navigate('/stock/newset') }}>add set </button>
            <Outlet />
        </div>
    )
}