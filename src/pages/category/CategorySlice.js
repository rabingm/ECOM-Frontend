import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	categoryList:[],
	selectedCategory:[],
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		fetchAllCategorySuccess: (state, { payload }) => {
			state.categoryList = payload.result;
			state.isLoading = false;
		},
		fetchAllCategoryWithIdSuccess: (state, { payload }) => {
			state.selectedCategory = payload.result;
			state.isLoading = false;
		},

		selectACategory: (state, { payload }) => {
			state.selectedCategory = payload;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = categorySlice;

export const {
	requestPending,
	fetchAllCategorySuccess,
	fetchAllCategoryWithIdSuccess,
	selectACategory,
	requestFail,
} = actions;

export default reducer;
