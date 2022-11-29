import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserDetails } from "types/types";

interface IUsersState {
  users: IUserDetails[];
  currentUser: IUserDetails;
}
const initialState: IUsersState = {
  users: [],
  currentUser: {},
};

export const usersSlice = createSlice({
  name: "usersReducer",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<IUserDetails[]>) => {
      state.users = action.payload;
    },
    getUserByPhoneNumber: (state,action:PayloadAction<IUserDetails>) => {
   state.currentUser=action.payload;
    },
    addUser: (state, action: PayloadAction<IUserDetails>) => {
      state.users.push(action.payload);
    },
    editUserDetailes: () => {},
    setCurrentUser: (state, action: PayloadAction<IUserDetails>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { getUsers, addUser, setCurrentUser,getUserByPhoneNumber } = usersSlice.actions;
export default usersSlice.reducer;
