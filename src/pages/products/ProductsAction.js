import {
  getProducts,
  getFeaturedPro,
  getSelectedProduct,
  getProductBySlug,
} from "../../apis/productAPI.js";

import {
  requestPending,
  fetchProductsSuccess,
  requestFail,
  fetchFeaturedProductsSuccess,
  addtoCartSuccess,
  fetchProductBySlugSuccess,
} from "./ProductsSlice";

export const displayProduct = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getProducts();
    //result will receive status, message, reult:[]
    dispatch(fetchProductsSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const displayselectedProduct = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getSelectedProduct();
    //result will receive status, message, reult:[]
    dispatch(addtoCartSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const displayFeaturedProduct = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getFeaturedPro();
    //result will receive status, message, result:[]
    dispatch(fetchFeaturedProductsSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const sendSlug = (slug) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await getProductBySlug(slug);
    result.status === "Success"
      ? dispatch(fetchProductBySlugSuccess(result))
      : dispatch(requestFail(result));

    console.log("from action", result, slug);
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
