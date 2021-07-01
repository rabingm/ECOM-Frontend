import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  signupResponse: {},
  error: "",
};

const signupSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    createUserSuccess: (state, { payload }) => {
      state.signupResponse = payload;
      state.isLoading = false;
    },

    createUserFail: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});
const { reducer, actions } = signupSlice;

export const { requestPending, createUserSuccess, createUserFail } = actions;
export default reducer;
