import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	sentMessage:[],
};

const contactSlice = createSlice({
	name: "contactUs",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		
		messageSendSuccess: (state, { payload }) => {
			state.sentMessage = payload.result;
			state.isLoading = false;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = contactSlice;

export const {
	requestPending,
	messageSendSuccess,
	requestFail,
} = actions;

export default reducer;
