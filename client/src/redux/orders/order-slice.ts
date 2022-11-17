import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderDetails, IUserDetails } from "../../types/types";

interface IOrderState {
  orderDetails: IOrderDetails;
  userDetails: IUserDetails;
}

const initialstate: IOrderState = {
  orderDetails: {},
  userDetails: {},
};

export const ordersSlice = createSlice({
  name: "ordersReducer",
  initialState: initialstate,
  reducers: {
    getScanners: (state, action: PayloadAction<IOrderDetails>) => {
      state.orderDetails = action.payload;
    },
  },
});
export const { getScanners } = ordersSlice.actions;
export default ordersSlice.reducer;
