import { addUserApi, getUsersApi } from "../../api/usres.api";
import axios from "axios";
import { AppDispatch } from "redux/store";
import { IUserDetails } from "types/types";
import { getUsers } from "./users.slice";

export const getAllUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const users: IUserDetails[] = (await getUsersApi()).data;
      dispatch(getUsers(users));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
};

export const addUserThunk=(user:IUserDetails)=>{
  return async (dispatch: AppDispatch)=>{
    try{
       const userAdd= await addUserApi(user);
    }
    catch{

    }
  }
}