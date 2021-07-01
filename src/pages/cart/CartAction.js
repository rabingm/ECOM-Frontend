import { fetchCart } from "../../apis/cartAPI";
import { useSelector } from "react-redux";


import {
  requestPending,
  addtoCartSuccess,
  fetchCartSuccess,
  requestFail,
  incQtySuccess,
  decQtySuccess
} from "./CartSlice";

export const addToCart = (items) => async (dispatch) => {
  try {
    
    dispatch(addtoCartSuccess(items));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const viewCart = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await fetchCart();
    dispatch(fetchCartSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
 

