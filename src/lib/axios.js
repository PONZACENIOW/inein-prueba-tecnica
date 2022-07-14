import Axios from "axios";

const axios = (baseURL = "") => {
  return Axios.create({
    baseURL: baseURL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: false,
  });
};

export default axios;
