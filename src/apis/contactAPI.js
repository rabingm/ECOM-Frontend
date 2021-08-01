import axios from "axios";

const rootURL = "http://localhost:8001/api/v1/";
const contactAPI = rootURL + "contactus";

export const sendMessage = (FormData) => {
  return new Promise(async (resolve, reject) => {
    try {
        console.log("from ctatct us", FormData);

      const { data } = await axios.post(contactAPI, FormData);
      resolve(data)
    } catch (error) {
      reject(error);
    }
  });
};

