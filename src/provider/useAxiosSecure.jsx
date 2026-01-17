import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { auth } from "../Firebase";

const axiosInstance = axios.create({
  baseURL: '/api',
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  axiosInstance.interceptors.request.use(async (config) => {
    if (auth.currentUser) {
      const token = await auth.currentUser.getIdToken();
      // console.log("Sending token:", token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
      if (error.response?.status === 401 && auth.currentUser) {
        await logOut();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
