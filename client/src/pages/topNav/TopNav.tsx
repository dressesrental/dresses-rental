import react from 'react';
import { useNavigate } from 'react-router-dom';
import { AddOrder } from '../addOrder/AddOrder';

export const TopNav=()=>{
    const navigate= useNavigate();
    return(
        <>
        <p>topNav</p>
        <button onClick={()=>{navigate('/addOrder')}}>הוספת הזמנה</button>
        </>
    )
}