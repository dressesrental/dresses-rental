import { Checkbox } from '@mui/material';
import react, { useState } from 'react';
import { ISetDresses } from '../../../../types/types';
import { SingleDress } from '../../../showDresses/SingleDress';
import ss from '../../../../icons/ss.jpg';

export const AddSet=()=>{

    const [set,setSet]= useState<ISetDresses>();
    const dresses = [
        { details: "ss", img: ss,id:1 },
        { details: "shhhs", img: ss ,id:2},
        // {details:"ss",img:{ss}},
        // {details:"ss",img:{ss}},
    ]
    return(
        <>
        <p>AddSet</p>
        <p>בחר דגם:</p>
        
        {dresses &&
                dresses.map((dress: { details: string, img: string }, index: number) => (
                    <SingleDress details={dress.details} img={dress.img} key={index}></SingleDress>
                ))}
        
        </>
    )
}