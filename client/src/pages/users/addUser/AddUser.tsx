import { FilledInput, FormControl, InputLabel, TextField } from "@mui/material";
import { useState } from "react"
import { IUserDetails } from "types/types"

export const AddUser=()=>{

    const [user,setUser]= useState<IUserDetails>();
    return(
        <>
        <p>AddUser</p>
        <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" 
        // value={name} onChange={handleChange} 
        />
      </FormControl>
        </>
    )
}