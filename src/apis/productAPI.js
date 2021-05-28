import axios from "axios";

const rootURL = "http://localhost:8001/api/v1/";
const productsAPI = rootURL + "product";
const featuredAPI = rootURL + "product/feature";
const getProAPI = rootURL + "product/product/";
const viewMoreAPI = rootURL + "product/products/viewmore"

export const getProducts = () => {
  return new Promise(async(resolve, reject) => {
    try {
      const { data } =await axios.get(viewMoreAPI);
      resolve(data);
      console.log("from api", data)
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
