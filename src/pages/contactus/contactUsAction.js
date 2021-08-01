import { requestPending,
	messageSendSuccess,
	requestFail,} from "./contactUsSlice";

import { sendMessage } from "../../apis/contactAPI";


export const messageSend =  (formData) => async (dispatch) => {
  try {

    
    dispatch(requestPending());

    const result = await sendMessage(formData);
    //result holds error and message
    dispatch(messageSendSuccess(result));
  } catch (error) {
    console.log(error)
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err))
  }
};