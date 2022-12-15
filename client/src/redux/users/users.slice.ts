import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMode, IUserDetails } from "types/types";

interface IUsersState {
  users: IUserDetails[];
  currentUser: IUserDetails;
  mode: IMode;
}
const initialState: IUsersState = {
  users: [],
  currentUser: {},
  mode: "NON",
};

export const usersSlice = createSlice({
  name: "usersReducer",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<IUserDetails[]>) => {
      state.users = action.payload;
    },
    getUserByPhoneNumber: (state, action: PayloadAction<IUserDetails>) => {
      state.currentUser = action.payload;
    },
    addUser: (state, action: PayloadAction<IUserDetails>) => {
      state.users.push(action.payload);
    },
    editUserDetailes: () => {},
    setCurrentUser: (state, action: PayloadAction<IUserDetails>) => {
      state.currentUser = action.payload;
    },
    setMode: (state, action: PayloadAction<IMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { getUsers, addUser, setCurrentUser, getUserByPhoneNumber } =
  usersSlice.actions;
export default usersSlice.reducer;
