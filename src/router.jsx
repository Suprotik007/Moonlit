import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "./App";
import HomeLayout from "./Layout/HomeLayout";
import LoginBox from "./pages/LoginBox";
import RegBox from "./pages/RegBox";
import ErrorPage from "./pages/Error";
import Rooms from "./pages/Rooms";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import PrivateRoute from "./provider/PrivateRoute";

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
      path:'/',
      Component:Home
    },
    {
     path:'/reg',
      Component: RegBox,
  },
    {
     path:'/rooms',
      Component: Rooms,
  },
    {
     path:'/myBookings',
      // Component: MyBookings,
      element: <PrivateRoute>
        <MyBookings></MyBookings>
      </PrivateRoute>
  },
    {
     path:'/roomDetails/:_id',
      element: <RoomDetails></RoomDetails>
  },
  
   ]
    
  },
 
  
]);  

export default router