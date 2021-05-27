import { fetchCart } from "../../apis/cartAPI";

import {
  requestPending,
  addtoCartSuccess,
  fetchCartSuccess,
  requestFail,
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
    const reusllt = await fetchCart();
    dispatch(fetchCartSuccess());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
