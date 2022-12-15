import axios from "axios";
import { USERS_URL } from "../config/config";
import { IUserDetails } from "types/types";

export const getUsersApi = async () => {
  return await axios.get<IUserDetails[]>(`${USERS_URL}/users`);
};

export const addUserApi = async (user: IUserDetails) => {
  return await axios.post<IUserDetails>(`${USERS_URL}/createUser`, user);
};

export const getUserByPhoneApi = (phone: string) => {
  return axios.get<IUserDetails>(`${USERS_URL}/getByPhoneNumber/${phone}`);
};

export const editUSerApi=(user:IUserDetails)=>{
  return axios.put<IUserDetails>(`${USERS_URL}/editUser`, user);
}
