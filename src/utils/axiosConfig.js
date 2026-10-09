import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://techflix-backend-hmow.onrender.com",
  timeout: 60000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token && token !== "null" && token !== "undefined") {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
