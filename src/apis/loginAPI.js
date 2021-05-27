import axios from "axios";

const rootURL = "http://localhost:8000/api/v1/";
const loginAPI = rootURL + "login";

export const userLoginAPI = (FormData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post();
      resolve(data)
    } catch (error) {
      reject(error);
    }
  });
};
