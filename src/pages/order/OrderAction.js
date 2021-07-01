import { sendOrder } from "../../apis/orderAPI"


import {
  orderSuccess,
  requestFail,
} from "./OrderSlice";

export const order = (items) => async (dispatch) => {
  try {

    console.log("from action",items)
    const result = await sendOrder(items)
    dispatch(orderSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

 

