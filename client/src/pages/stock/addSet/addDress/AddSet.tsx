import { SingleDress } from '@components/showDresses/SingleDress';
import { Checkbox } from '@mui/material';
import react, { useState } from 'react';
import { ISetDresses } from '../../../../types/types';


export const AddSet=()=>{

    const [set,setSet]= useState<ISetDresses>();
    const dresses = [
        { details: "ss", id:1 },
        { details: "shhhs",id:2},
        // {details:"ss",img:{ss}},
        // {details:"ss",img:{ss}},
    ]
    return(
        <>    
        <p>AddSet</p>
        <p>בחר דגם:</p>
        
        {dresses &&
                dresses.map((dress: { details: string }, index: number) => (
                    <SingleDress details={dress.details} key={index} img={undefined}></SingleDress>
                )
                )}
        
        </>
    )
}