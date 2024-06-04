import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.serverURL,
  headers: {
    "Content-type": "application/json",
  },
});
