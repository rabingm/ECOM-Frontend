import axios from "axios";

const rootURL = "http://localhost:8000/api/v1/";
const cartAPI = rootURL + "cart";

export const fetchCart = () => {
  return new Promise((resolve, reject) => {
    try {
      const result = axios.get(cartAPI);

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};