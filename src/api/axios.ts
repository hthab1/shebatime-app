import axios, { AxiosInstance } from "axios";
import { loadCachedItem } from "../utils/storage";
import { BASE_URL } from "../config/api";

const apiInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

apiInstance.interceptors.request.use(
  async (config: any) => {
    const token = await loadCachedItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
