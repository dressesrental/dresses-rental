import { addUserApi, getUserByPhoneApi, getUsersApi } from "../api/usres.api";
import axios from "axios";
import { AppDispatch } from "redux/store";
import {
  addUser,
  getUsers,
  getUserByPhoneNumber,
} from "../redux/users/users.slice";
import { IUserDetails } from "types/types";

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
  };
};

export const addUserServ = (user: IUserDetails) => {
  return async (dispatch: AppDispatch) => {
    try {
      const userAdd: IUserDetails | any = await (await addUserApi(user)).data;
      dispatch(addUser(userAdd));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };
};

export const getUserByPhoneNumberServ = (phoneNumber: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user: IUserDetails | any = (await getUserByPhoneApi(phoneNumber))
        .data;
      dispatch(getUserByPhoneNumber(user));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };
};
