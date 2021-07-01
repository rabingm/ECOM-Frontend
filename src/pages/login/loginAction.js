import {
  requestPending,
  loginSuccess,
  updateLogin,
  logoutSuccess,
  requestFail,
  loginFailed,
} from "./loginSlice";

import { userLoginAPI } from "../../apis/loginAPI";
import { tokenAPI } from "../../apis/tokenAPI";
import { logoutAPI } from "../../apis/profileAPI";
import { getProfileSuccess, resetPassEmail } from "../profile/profileSlice";

export const sendLogin = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const resp = await userLoginAPI(formData);

    const { accessJWT, refreshJWT, result } = resp;

    localStorage.setItem("user", JSON.stringify(result));

    accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    refreshJWT && localStorage.setItem("ecommerceRefreshJWT", refreshJWT);
    if (resp.status === "success") {
      dispatch(loginSuccess(resp));
    } else {
      dispatch(loginFailed());
    }
    resp.status === "success" && dispatch(getProfileSuccess(resp.user));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};

export const userAutoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refresJWT = localStorage.getItem("ecommerceRefreshJWT");

  accessJWT && dispatch(updateLogin());

  if (!accessJWT && refresJWT) {
    //call the server to get new access token
    const result = await tokenAPI(refresJWT);
    console.log(result);

    if (result.status === "success") {
      sessionStorage.setItem("accessJWT", result.accessJWT);
      dispatch(updateLogin());
    }
  }
};

export const logOut = (_id) => (dispatch) => {
  // clear browse storage
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("ecommerceRefreshJWT");

  dispatch(logoutSuccess());
  logoutAPI(_id);

  // remove tokens form our server
};

export const setUser = (user) => (dispatch) => {
  dispatch(loginSuccess(user));
};
