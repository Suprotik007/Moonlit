// import axios from "axios";


// const axiosInstance = axios.create({
//   baseURL: '/api', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: false, 
// });

// const useAxiosSecure = () => {
//   return axiosInstance;
// };

// export default useAxiosSecure;


import axios from "axios";

// Use your Vercel backend URL
const axiosSecure = axios.create({
  baseURL: '/api', // Your deployed backend
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default axiosSecure;