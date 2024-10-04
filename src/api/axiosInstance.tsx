import axios from "axios";
import { baseURL } from "./const/ApiConstant";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: baseURL,
  // baseURL: "https://ext.digio.in:444", // Base URL of the back-end API
  // baseURL: process.env.REACT_APP_API_URL || "https://ext.digio.in:444", // Base URL of the back-end API

  // withCredentials: true, // Send cookies with requests (only use if required)

  headers: {
    "Content-Type": "application/json",
    // Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // uncomment if token is pass
    // const token = localStorage.getItem("jwtToken"); // Alternatively, can be stored in cookies
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    console.log("Axios request config:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
