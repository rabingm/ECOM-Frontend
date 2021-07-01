import axios from "axios";

const rootURL = "http://localhost:8001/api/v1/";
const orderAPI = rootURL + "checkout";
const paymentAPI = rootURL + "payment";

export const sendOrder = (ordrObj) => {
  
  return new Promise(async(resolve, reject) => {
    try {
      const {result} = await axios.post(orderAPI, ordrObj);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const sendPayment = (token) => {
  
  return new Promise(async(resolve, reject) => {
    try {
      const {result} = await axios.post(paymentAPI, token);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
