
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);



  
 

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged Out successfully');
        setDropdownOpen(false);
      })
      .catch(() => {
      
      });
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links=(
        
        <div className="flex space-x-8 font-semibold text-green-800">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Home
        </NavLink>
         <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Explore Gardener
        </NavLink>
        <NavLink
          to="/shareTips"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Share a Garden Tip 
        </NavLink>
        <NavLink
          to="/browseTips"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Browse Tips
        </NavLink>
       
        <NavLink
          to="/myTips"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          My Tips
        </NavLink>
      </div>
  )

  return (
   <div className=''>

     <div className="navbar rounded-xl px-5 mt-2 bg-green-200 shadow-sm w-11/12 mx-auto  ">
      <div className="navbar-start">
   <div className="dropdown ">
    <div tabIndex={0} role="button" className="btn btn-ghost text-green-800 lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
       </div>
       <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-full  p-2   text-xs shadow">
          {links}
       </ul>
     </div>
     <a className=" text-xl font-bold font-mono text-green-800 Kablammo">GreenHub</a>
   </div>
   <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 ">
       {links}
     </ul>
  </div> 



        <div className="navbar-end gap-3 ">
  <p className='text-red-300 text-xs sm:block hidden '>{user && user.name}</p>

    
    {
      user ? (
<button onClick={handleLogOut} className="btn text-white hover:text-black btn-outline">Log Out</button>
      ):
      (<Link to='/login'><button className="btn text-white hover:text-black btn-outline">Login</button></Link>)
    }
    <ToastContainer />
  </div>
      
    </div>
   </div>
  );
};

export default Navbar;
