import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://troii-backend-shaw.onrender.com/api",
});
