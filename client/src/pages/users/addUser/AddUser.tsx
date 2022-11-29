import { FilledInput, FormControl, InputLabel, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react"
import { IUserDetails } from "types/types"
import { getAllUsers } from "../../../service/users.service";

export const AddUser=()=>{
    const dispatch=useAppDispatch();
    const [user,setUser]= useState<IUserDetails>();

    useEffect(()=>{
     dispatch(getAllUsers()) ;
    },[])
    const users:IUserDetails[]= useAppSelector(
      (state)=>state.usersReducer.users
    )
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


