import axios from "axios";

const rootURL = "http://localhost:8002/api/v1/";
const signAPI = rootURL + "signup";

export const createUserAPI = (formDT) => {
  console.log("GOT IN APIS")

  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(signAPI, formDT);

      resolve(data);
    } catch (error) {
      console.log(error)
      reject(error);
    }
  });
};
