import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  productList: [],
  featuredprod: {},
  selectedProd: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    fetchProductsSuccess: (state, { payload }) => {
      state.productList = payload.result || [];
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    fetchFeaturedProductsSuccess: (state, { payload }) => {
      state.featuredprod = payload.result || [];
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    addtoCartSuccess: (state, { payload }) => {
      state.selectedProd = payload.result || [];
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.selectedProd = {}
    },

    fetchProductBySlugSuccess:(state, {payload}) =>{
      state.selectedProd = payload.result ;
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    }
  },
});

const { reducer, actions } = productSlice;

export const {
  requestPending,
  fetchProductsSuccess,
  addtoCartSuccess,
  requestFail,
  fetchFeaturedProductsSuccess,
  fetchProductBySlugSuccess
} = actions;

export default reducer;
