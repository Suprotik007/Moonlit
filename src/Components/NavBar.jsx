
import React, { useContext  } from 'react';
import { Link, NavLink } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/logo.svg'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged Out successfully');
     
      })
      .catch(() => {
      
      });
  };

 
  const links=(
        
        <div className="flex space-x-8 font-semibold text-gray-500">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-gray-950 border-b-2 border-black' : ''
          }
        >
          Home
        </NavLink>
         <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive ? 'text-gray-950 border-b-2 border-black' : ''
          }
        >
          Rooms
        </NavLink>
        
        <NavLink
          to="/myBookings"
          className={({ isActive }) =>
            isActive ? 'text-gray-950 border-b-2 border-black' : ''
          }
        >
          My Bookings
        </NavLink>
      </div>
  )

  return (
   <div className='sticky top-0 z-50 bg-white'>

     <div className="navbar  px-5 mt-2  sm:w-12/12 md:w-11/12 mx-auto border-b-2 ">
      <div className="navbar-start">
   <div className="dropdown ">
    <div tabIndex={0} role="button" className="btn btn-ghost  text-black lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" classNa me="h-5 w-5  hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
       </div>
       <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-full  p-2   text-xs shadow">
          {links}
       </ul>
     </div>
     <img src={logo} alt="" />
     
   </div>
   <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 ">
       {links}
     </ul>
  </div> 



        <div className="navbar-end gap-3 ">
 
    {
      user ? (
<button onClick={handleLogOut} className="btn  btn-outline border-3 rounded-4xl hover:text-red-300 hover:bg-black">Log Out</button>
      ):
      (<Link to='/login'><button className="btn  btn-outline border-3 rounded-4xl hover:text-green-300 hover:bg-black">Login</button></Link>)
    }
    <ToastContainer />
  </div>
      
    </div>
   </div>
  );
};

export default Navbar;
