import axios from 'axios'
import { USERS_URL } from '../config/config';
import { IUserDetails } from 'types/types';

export const getUsersApi = async () => {
  return await axios.get<IUserDetails[]>(`${USERS_URL}/users`);
};

export const addUserApi= async (user:IUserDetails) => {
return await axios.post<IUserDetails>(`${USERS_URL}/add`,user)
}

export const getUserByPhoneApi=(phone:string)=>{
    return axios.get<IUserDetails>(`${USERS_URL}/${phone}`)
}