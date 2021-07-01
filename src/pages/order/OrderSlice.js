import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  orderList:[]
};


const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    orderSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.orderList = payload.result
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = orderSlice;

export const {
  requestPending,
  orderSuccess,
  requestFail
} = actions;

export default reducer;
