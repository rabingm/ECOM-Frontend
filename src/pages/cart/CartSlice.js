import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  selectedProd: [],
  selectedProdInc:[]
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addtoCartSuccess: (state, { payload }) => {
      const addingItem = state.selectedProd.filter(
        (row) => row.Item._id === payload.Item._id
      );
      if (addingItem.length) {
        const filteredArray = state.selectedProd.filter(
          (row) => row.Item._id !== payload.Item._id
        );

        filteredArray.push(payload);
        state.selectedProd = filteredArray;
      } else {
        state.selectedProd.push(payload);
      }
    },
    fetchCartSuccess: (state, { payload }) => {
      state.selectedProd = payload.result || [];
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    incQtySuccess: (state, {payload} ) => {

    const newCart = state.selectedProd.map((row)=>{
      if(row._id === payload){
        row.Quantity++
      }
      return row
    })

// console.log(newCart)
     
    },
    decQtySuccess: (state, { payload }) => {

      const newCart = state.selectedProd.map((row)=>{
        if(row.Quantity <= 1){
          return row.Quantity = 1
        }
        if(row._id === payload){
          row.Quantity--  
        }
      })
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = cartSlice;

export const {
  requestPending,
  addtoCartSuccess,
  fetchCartSuccess,
  requestFail,
  incQtySuccess,
  decQtySuccess
} = actions;

export default reducer;
