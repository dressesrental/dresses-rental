import axios from 'axios'
import { USERS_URL } from 'config/config';
import { IUserDetails } from 'types/types';

export const getUsersApi = async () => {
    return await axios.get<IUserDetails[]>(`${USERS_URL}/users`);
  };