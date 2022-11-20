import { FilledInput, FormControl, InputLabel, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { getAllUsers } from "../../../redux/users/user-thunk";
import { IUserDetails } from "types/types"

export const AddUser=()=>{
    const dispatch=useAppDispatch();
    const [user,setUser]= useState<IUserDetails>();
    // const filters: IFilterDashBoard = useSelector<RootState, IFilterDashBoard>(
    //   (state) => state.filtersInDashBoradReducer
    // );
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


