import axios from "axios";
import { use, useContext } from "react";
import { AuthContext } from "./AuthProvider";

const axiosInstance=axios.create({
    baseURL:'https://cozy-room-server.vercel.app/',
    withCredentials:true,
})

const useAxiosSecure = () => {
    const { logOut, user, refreshToken } = useContext(AuthContext);
    
    axiosInstance.interceptors.request.use(async (config) => {
        if (user) {
            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    axiosInstance.interceptors.response.use(
        response => response,
        async (error) => {
            if (error.response?.status === 401) {
                await logOut();
                // Redirect to login or handle unauthorized
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;

}
export default useAxiosSecure