import axios from "axios";

const rootURL = "http://localhost:8001/api/v1/";
const catWithIdAPI = rootURL + "category/";
const catAPI = rootURL + "category/categories";

export const fetchCat = () => {
  return new Promise(async(resolve, reject) => {
    try {
      const result = await axios.get(catAPI);

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const fetchCatById = (_id) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result = await axios.get(catWithIdAPI + _id);

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};