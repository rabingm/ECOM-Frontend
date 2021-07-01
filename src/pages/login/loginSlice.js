import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  message:true,
  isAuth: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, {payload}) => {
      state.loginResponse = payload || {};
      state.isLoading = false;
      state.isAuth = true;
    },
    updateLogin: (state, { payload }) => {
			// state.loginResponse = payload || {};
			state.isLoading = false;
			state.isAuth = true;
		},
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = false;
    },
    loginFailed: (state, {payload})=>{
state.message = false;
    },
    requestFail: (state) => {
      state.isLoading = false;
      state.isAuth = false;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { requestPending, loginSuccess,updateLogin, logoutSuccess, requestFail, loginFailed } =
  actions;

export default reducer;
