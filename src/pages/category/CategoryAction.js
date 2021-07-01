import {
  requestPending,
  fetchAllCategorySuccess,
  fetchAllCategoryWithIdSuccess,
  requestFail,
} from "./CategorySlice";

import { fetchCat, fetchCatById } from "../../apis/categoryAPI";

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await fetchCat(); //{status, message, result:[]}
    dispatch(fetchAllCategorySuccess(result.data));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const fetchCategoriesById = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await fetchCatById(_id); //{status, message, result:[]}
    dispatch(fetchAllCategoryWithIdSuccess(result.data));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
