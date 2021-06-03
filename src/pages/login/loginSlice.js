import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  isAuth: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = false;
    },
    requestFail: (state) => {
      state.isLoading = false;
      state.isAuth = false;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { requestPending, loginSuccess, logoutSuccess, requestFail } =
  actions;

export default reducer;
