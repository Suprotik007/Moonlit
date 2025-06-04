import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "./App";
import HomeLayout from "./Layout/HomeLayout";
import LoginBox from "./pages/LoginBox";
import RegBox from "./pages/RegBox";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
      index:true,
       path:'/login',
      Component: LoginBox,
    },
    {
     path:'/reg',
      Component: RegBox,
  },
   ]
    
  },
 
  
]);  

export default router