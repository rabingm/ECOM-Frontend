import { requestPending, createUserSuccess , createUserFail} from "./signUpSlice";

import { createUserAPI } from "../../apis/signUpAPI";

export const createUser =  (formData) => async (dispatch) => {
  try {
    
    dispatch(requestPending());

    const result = await createUserAPI(formData);
    //result holds error and message
    dispatch(createUserSuccess(result));
  } catch (error) {
    console.log(error)
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(createUserFail(err))
  }
};

// export const fetchVerification =
