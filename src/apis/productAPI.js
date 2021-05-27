import axios from "axios";

const rootURL = "http://localhost:8001/api/v1/";
const productsAPI = rootURL + "products";
const featuredAPI = rootURL + "products/feature";
const getProAPI = rootURL + "products/product/";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    try {
      const { data } = axios.get(productsAPI);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSelectedProduct = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      const { data } = axios.get(productsAPI + "/" + _id);
      resolve(data);

      console.log("from API", data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getProductBySlug = (slug) => {
  return new Promise(async (resolve, reject) => {
    try {

      const { data } = await axios.get(getProAPI  + slug);
      
      
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getFeaturedPro = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(featuredAPI);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
