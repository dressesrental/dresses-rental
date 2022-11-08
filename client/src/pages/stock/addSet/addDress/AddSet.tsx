import { FormHelperText, Input, InputLabel, OutlinedInput, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { ISetDresses } from '../../../../types/types';
import  "@app/style.css"


export const AddSet = () => {
    const [set, setSet] = useState<ISetDresses>();
    const dresses = [
        { details: "ss", id: 1 },
        { details: "shhhs", id: 2 },
        // {details:"ss",img:{ss}},
        // {details:"ss",img:{ss}},
    ]
    return (
        <>
            <p>AddSet</p>
            {/* <p>בחר דגם:</p> */}
            <TextField id="standard-basic" className='rlt' label="Standard" variant="standard" />
            <FormControl>
                                
                <InputLabel htmlFor="my-input" className='rlt'>שם</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>


            {/* {dresses &&
                dresses.map((dress: { details: string }, index: number) => (
                    <SingleDress details={dress.details} key={index} img={undefined}></SingleDress>
                )
                )}  */}
        </>
    )
}

function createCache(arg0: { key: string; stylisPlugins: any[]; }) {
    throw new Error('Function not implemented.');
}
