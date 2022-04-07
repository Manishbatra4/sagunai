import axios from "axios";

const api = axios.create({
  baseURL: "https://as-mb.herokuapp.com/api/",
});
//  api.defaults.withCredentials = true;

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
